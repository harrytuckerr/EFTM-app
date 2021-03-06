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

export const getEFTMPodcastEpisodesGET = (Constants, { whooska }) =>
  fetch(`https://api.rss2json.com/v1/${whooska || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGetEFTMPodcastEpisodesGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['PodcastEpisodes', args], () =>
    getEFTMPodcastEpisodesGET(Constants, args)
  );
};

export const FetchGetEFTMPodcastEpisodesGET = ({
  children,
  onData = () => {},
  whooska,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useGetEFTMPodcastEpisodesGET({ whooska });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};
