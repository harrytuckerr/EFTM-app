import * as React from 'react';
import AppLoading from 'expo-app-loading';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import OneSignal from 'react-native-onesignal';
import Constants from "expo-constants";

import AppNavigator from './AppNavigator';
import DraftbitTheme from './themes/DraftbitTheme.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import analytics from '@react-native-firebase/analytics';


//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("****************");
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log("Prompt response:", response);
});

//subscribe to highlights category

OneSignal.sendTags({
      bignews: "1",
      highlights: "1",
      tech: "1",
      cars: "1",
      lifestyle: "1"
    });

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  const weblink = notification.launchURL
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});

const queryClient = new QueryClient();
class App extends React.PureComponent {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={cacheAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GlobalVariableProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={DraftbitTheme}>
              <AppNavigator />
            </ThemeProvider>
          </QueryClientProvider>
        </GlobalVariableProvider>
      </SafeAreaProvider>
    );
  }
}

export default App;
