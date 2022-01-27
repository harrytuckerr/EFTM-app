// Place any imports required by your custom components at the top of
// this file. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section. The first import from
// 'react' is required.
import React from 'react';
import { Text } from 'react-native';
import {
  RefreshControl,
  Dimensions,
  ScrollView,
  StyleSheet,
  Flatlist,
  View,
} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import moment from 'moment';
export { moment };

import { decode } from 'html-entities';
export { decode };

import OneSignal from 'react-native-onesignal';
export { OneSignal };

export { useValues, useSetValue } from './config/GlobalVariableContext';

export function notifications() {
  const variables = GlobalVariableContext.useValues();
  const tech = variables.Technotifications;
  const cars = variables.Carsnotifications;
  const lifestyle = variables.Lifestylenotifications;
  const bignews = variables.Bignewsnotifications;
  const highlights = variables.Highlightsnotifications;
  const email = variables.Email;
  const mobile = variables.MobileNumber;
  const location = variables.State;
  const firstName = variables.Firstname;
}

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const refreshController = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      bounces={true}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export const viewWidth = ({ children }) => {
  var width = Dimensions.get('window').width; //full width
  var height = Dimensions.get('window').height; //full height

  return <View width={width}>{children}</View>;
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLV4ouTgn-bG2_y2xAiQhKC1ynyV5odbg',
  authDomain: 'eftm-ios-app.firebaseapp.com',
  projectId: 'eftm-ios-app',
  storageBucket: 'eftm-ios-app.appspot.com',
  messagingSenderId: '141611989174',
  appId: '1:141611989174:web:21862b204d889a2b0fce17',
  measurementId: 'G-WM5B9QXF1S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
