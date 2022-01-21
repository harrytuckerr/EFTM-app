// Place any imports required by your custom components at the top of
// this file. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section. The first import from
// 'react' is required.
import React from 'react';
import { Text } from 'react-native';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';

// Define and export your components as named exports here.
// You can reference them within a Custom Code block
// as <CustomCode.MyTextComponent />

// Uncomment below to create your first component
// export const MyTextComponent = () => <Text>Hello world!</Text>;
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
}
