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

export const requestVerificationCodePOST = (
  Constants,
  { email, emailORsms, phone }
) =>
  fetch(`https://eftmid.com/api/verify`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, phone: phone, method: emailORsms }),
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRequestVerificationCodePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => requestVerificationCodePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Verification Code', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Verification Code');
      },
    }
  );
};

export const requestEFTMIDPOST = (
  Constants,
  { email, firstname, lastname, phonenumber, state, verificationcode }
) =>
  fetch(`https://eftmid.com/api/eftmid`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: firstname,
      lastName: lastname,
      phone: phonenumber,
      email: email,
      state: state,
      verify: verificationcode,
    }),
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRequestEFTMIDPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => requestEFTMIDPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('EFTM ID', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('EFTM ID');
      },
    }
  );
};
