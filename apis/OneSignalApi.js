import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const addAndroidDevicePOST = (
  Constants,
  {
    deviceOS,
    phonemodel,
    yesnobignews,
    yesnocars,
    yesnohighlights,
    yesnolifestyle,
  }
) =>
  fetch(`https://onesignal.com/api/v1/players`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: 'c93f5d78-73ff-4a87-8e82-45ccf668c290',
      device_type: '1',
      device_model: phonemodel,
      device_os: deviceOS,
      tags: {
        cars: yesnocars,
        tech: yesnocars,
        lifestyle: yesnolifestyle,
        bignews: yesnobignews,
        highlights: yesnohighlights,
      },
    }),
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useAddAndroidDevicePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addAndroidDevicePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('NotificationUser', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('NotificationUser');
      },
    }
  );
};
