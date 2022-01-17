import React from 'react';
import * as EFTMIDApi from '../apis/EFTMIDApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const MagicLinkConfirmationScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const requestEFTMIDPOST = EFTMIDApi.useRequestEFTMIDPOST();

  const [confirmationCode, setConfirmationCode] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewYM}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={80}
      >
        <View style={styles.Viewfa} pointerEvents={'auto'}>
          <Text
            style={[
              theme.typography.headline4,
              styles.Textlt,
              { color: theme.colors.strong },
            ]}
          >
            {'Confirm your account'}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.Text_7M,
              { color: theme.colors.strong },
            ]}
          >
            {
              "We've sent a confirmation code to your phone. Copy the code into the box below to confirm your EFTM ID."
            }
          </Text>
          <TextField
            onChangeText={confirmationCode => {
              try {
                setConfirmationCode(confirmationCode);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldc1, { borderColor: theme.colors.light }]}
            type={'underline'}
            label={'Confirmation Code'}
            keyboardType={'numeric'}
            value={confirmationCode}
            error={false}
            returnKeyType={'send'}
            returnKeyLabel={'Confirm'}
          />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.ViewyN} pointerEvents={'auto'}>
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchableqf}
        >
          <Text
            style={[
              theme.typography.button,
              styles.TextoK,
              { color: theme.colors.strong },
            ]}
          >
            {'Go Back '}
            {JSON.stringify(Constants['eftmID'])}{' '}
            {JSON.stringify(Constants['test'])}
          </Text>
        </Touchable>

        <Button
          onPress={async () => {
            try {
              const EFTMID = await requestEFTMIDPOST.mutateAsync({
                email: JSON.stringify(props.route?.params?.email ?? ''),
                firstname: props.route?.params?.firstName ?? '',
                lastname: props.route?.params?.lastName ?? '',
                phonenumber: props.route?.params?.phoneNumber ?? '',
                state: props.route?.params?.state ?? '',
                verificationcode: confirmationCode,
              });
              const confirmedID = EFTMID.eftmID;
              setGlobalVariableValue({
                key: 'eftmID',
                value: confirmedID,
              });
              setGlobalVariableValue({
                key: 'activated',
                value: 'Truthy',
              });
              setGlobalVariableValue({
                key: 'test',
                value: EFTMID,
              });
              navigation.navigate('EFTMIDScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ButtonS7}
          type={'solid'}
          color={theme.colors.strong}
          disabled={false}
        >
          {'Confirm Account'}
        </Button>

        <Text
          style={[
            theme.typography.caption,
            styles.TextFR,
            { color: theme.colors.light },
          ]}
        >
          {
            'By registering for an EFTM ID you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
          }
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textlt: {
    textAlign: 'center',
  },
  Text_7M: {
    marginTop: 8,
    textAlign: 'center',
  },
  TextFieldc1: {
    marginTop: 20,
    marginBottom: 32,
    borderBottomWidth: 1,
  },
  Viewfa: {
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  KeyboardAvoidingViewYM: {
    justifyContent: 'space-between',
    flex: 1,
  },
  TextoK: {
    textAlign: 'center',
  },
  Touchableqf: {
    marginBottom: 24,
  },
  ButtonS7: {
    height: 48,
  },
  TextFR: {
    width: '100%',
    marginTop: 16,
    textAlign: 'center',
  },
  ViewyN: {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  },
});

export default withTheme(MagicLinkConfirmationScreen);
