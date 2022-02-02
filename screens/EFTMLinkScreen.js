import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ScreenContainer } from '@draftbit/ui';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const EFTMLinkScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer hasSafeArea={true}>
      <WebView
        style={styles.WebViewLg}
        source={{ uri: `${Constants['notificationURL']}` }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  WebViewLg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default EFTMLinkScreen;
