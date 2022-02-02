import React from 'react';
import * as EFTMIDApi from '../apis/EFTMIDApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  ButtonSolid,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const MagicLinkConfirmationScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const reverseBool = errornumber => {
    if (errornumber == 1) {
      isError = false;
    } else {
      isError = true;
    }
    console.log(isError);

    return isError;
  };

  const { theme } = props;
  const { navigation } = props;

  const requestEFTMIDPOST = EFTMIDApi.useRequestEFTMIDPOST();

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewYM}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={80}
      >
        <View style={styles.Viewfa} pointerEvents={'auto'}>
          <Text style={[styles.Textlt, { color: theme.colors.strong }]}>
            {'Confirm your account'}
          </Text>

          <Text style={[styles.Text_7M, { color: theme.colors.strong }]}>
            {
              "We've sent a confirmation code to your phone. Copy the code into the box below to confirm your EFTM ID."
            }
          </Text>
          <TextInput
            onChangeText={textInputValue => {
              try {
                setTextInputValue(textInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputlv, { borderColor: theme.colors.light }]}
            value={textInputValue}
            placeholder={'Your confirmation code'}
            keyboardType={'numeric'}
            autoFocus={true}
            returnKeyType={'done'}
            textContentType={'none'}
          />
          <>
            {!Constants['MFAErrorStatus'] ? null : (
              <Text style={{ color: theme.colors.error }}>
                {Constants['MFAErrorMessage']}
              </Text>
            )}
          </>
        </View>

        <View style={styles.ViewyN} pointerEvents={'auto'}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
                setGlobalVariableValue({
                  key: 'eftmIDError',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchableqf}
          >
            <>
              {!Constants['activated'] ? null : (
                <Text
                  style={[
                    styles.TextoK,
                    { color: theme.colors.custom_rgb27_215_96 },
                  ]}
                >
                  {'Success!'}
                </Text>
              )}
            </>
            <>
              {Constants['activated'] ? null : (
                <Text style={[styles.TextgP, { color: theme.colors.strong }]}>
                  {'Go Back'}
                </Text>
              )}
            </>
          </Touchable>
          <>
            {!Constants['isLoading'] ? null : (
              <ButtonSolid
                style={[
                  styles.ButtonSolid_9X,
                  { backgroundColor: theme.colors.strong },
                ]}
                title={'Confirming...'}
                loading={true}
              />
            )}
          </>
          <>
            {Constants['isLoading'] ? null : (
              <Button
                onPress={async () => {
                  try {
                    setGlobalVariableValue({
                      key: 'isLoading',
                      value: true,
                    });
                    const EFTMID = await requestEFTMIDPOST.mutateAsync({
                      email: props.route?.params?.email ?? '',
                      firstname: props.route?.params?.firstName ?? '',
                      lastname: props.route?.params?.lastName ?? '',
                      phonenumber: props.route?.params?.phoneNumber ?? '',
                      state: props.route?.params?.state ?? '',
                      verificationcode: textInputValue,
                    });
                    const confirmedID = EFTMID.eftmID;
                    const errorStatus = EFTMID.status;
                    const errorMessage = EFTMID.error;
                    const Success = reverseBool(errorStatus);
                    setGlobalVariableValue({
                      key: 'MFAErrorStatus',
                      value: Success,
                    });
                    setGlobalVariableValue({
                      key: 'MFAErrorMessage',
                      value: errorMessage,
                    });
                    setGlobalVariableValue({
                      key: 'isLoading',
                      value: false,
                    });
                    if (Success) {
                      return;
                    }
                    setGlobalVariableValue({
                      key: 'eftmID',
                      value: confirmedID,
                    });
                    setGlobalVariableValue({
                      key: 'activated',
                      value: true,
                    });
                    setGlobalVariableValue({
                      key: 'test',
                      value: JSON.stringify(EFTMID),
                    });
                    navigation.navigate('EFTMIDScreen');
                    setGlobalVariableValue({
                      key: 'firstName',
                      value: props.route?.params?.firstName ?? '',
                    });
                    setGlobalVariableValue({
                      key: 'mobileNumber',
                      value: props.route?.params?.phoneNumber ?? '',
                    });
                    setGlobalVariableValue({
                      key: 'email',
                      value: props.route?.params?.email ?? '',
                    });
                    setGlobalVariableValue({
                      key: 'state',
                      value: props.route?.params?.state ?? '',
                    });
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
            )}
          </>
          <Text style={[styles.TextFR, { color: theme.colors.light }]}>
            {
              'By registering for an EFTM ID you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
            }
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textlt: {
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
    fontSize: 24,
  },
  Text_7M: {
    marginTop: 8,
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  TextInputlv: {
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 0,
    width: '100%',
    marginTop: 32,
    fontFamily: 'PoppinsLight',
  },
  Viewfa: {
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  TextoK: {
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
  },
  TextgP: {
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
  },
  Touchableqf: {
    marginBottom: 16,
  },
  ButtonSolid_9X: {
    borderRadius: 8,
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'center',
  },
  ButtonS7: {
    height: 48,
  },
  TextFR: {
    width: '100%',
    marginTop: 16,
    textAlign: 'center',
    fontFamily: 'PoppinsLight',
  },
  ViewyN: {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 16,
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  KeyboardAvoidingViewYM: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default withTheme(MagicLinkConfirmationScreen);
