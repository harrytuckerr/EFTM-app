import React from 'react';
import * as EFTMIDApi from '../apis/EFTMIDApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  Picker,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const EFTMIDScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const ReverseBool = errornumber => {
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

  const requestVerificationCodePOST =
    EFTMIDApi.useRequestVerificationCodePOST();

  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [switchRowValue, setSwitchRowValue] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={false}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewMo}
        enabled={true}
        behavior={'position'}
      >
        <View style={styles.ViewOL} pointerEvents={'auto'}>
          <Image
            style={styles.Imagetu}
            resizeMode={'contain'}
            source={Images.Eftmblack}
          />
        </View>
        <>
          {Constants['activated'] ? null : (
            <View style={styles.View_8M} pointerEvents={'auto'}>
              <Text style={[styles.Text_8a, { color: theme.colors.strong }]}>
                {Constants['eftmID']}
              </Text>

              <Text style={[styles.TextDb, { color: theme.colors.medium }]}>
                {
                  'This unique code is your ticket to more entries in our giveaways, and even discounts on your next gadget purchase.'
                }
              </Text>
              <>
                {Constants['activated'] ? null : (
                  <View pointerEvents={'auto'}>
                    <TextField
                      onChangeText={firstName => {
                        try {
                          setFirstName(firstName);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.TextFielduY}
                      placeholder={'First Name'}
                      type={'underline'}
                      value={firstName}
                      autoCapitalize={'words'}
                      returnKeyType={'next'}
                    />
                    <TextField
                      onChangeText={lastName => {
                        try {
                          setLastName(lastName);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      placeholder={'Last Name'}
                      type={'underline'}
                      value={lastName}
                      keyboardType={'default'}
                      returnKeyType={'next'}
                      autoCapitalize={'words'}
                    />
                    <TextField
                      onChangeText={phoneNumber => {
                        try {
                          setPhoneNumber(phoneNumber);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      placeholder={'Phone Number'}
                      type={'underline'}
                      value={phoneNumber}
                      keyboardType={'phone-pad'}
                      returnKeyType={'next'}
                      keyboardAppearance={'default'}
                    />
                    <TextField
                      onChangeText={email => {
                        try {
                          setEmail(email);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      placeholder={'Email'}
                      type={'underline'}
                      value={email}
                      keyboardType={'email-address'}
                      returnKeyType={'next'}
                    />
                    <Picker
                      onValueChange={pickerValue => {
                        try {
                          setPickerValue(pickerValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      options={Constants['States']}
                      placeholder={'Your State'}
                      leftIconMode={'inset'}
                      type={'underline'}
                      placeholderTextColor={theme.colors.light}
                      defaultValue={''}
                    />
                    <>
                      {Constants['requesting'] ? null : (
                        <ButtonSolid
                          onPress={async () => {
                            try {
                              setGlobalVariableValue({
                                key: 'requesting',
                                value: true,
                              });
                              const IDRequestResults =
                                await requestVerificationCodePOST.mutateAsync({
                                  email: email.toString(),
                                  emailORsms: 'sms',
                                  phone: phoneNumber,
                                });
                              const RequestStatus = IDRequestResults.status;
                              const errorMessage = IDRequestResults.error;
                              const Success = ReverseBool(RequestStatus);
                              setGlobalVariableValue({
                                key: 'ErrorMessage',
                                value: errorMessage,
                              });
                              setGlobalVariableValue({
                                key: 'eftmIDError',
                                value: Success,
                              });
                              setGlobalVariableValue({
                                key: 'requesting',
                                value: false,
                              });
                              if (Success) {
                                return;
                              }
                              navigation.navigate(
                                'MagicLinkConfirmationScreen',
                                {
                                  method: 'sms',
                                  state: pickerValue,
                                  phoneNumber: phoneNumber,
                                  email: email,
                                  lastName: lastName,
                                  firstName: firstName,
                                }
                              );
                              setGlobalVariableValue({
                                key: 'MFAErrorStatus',
                                value: false,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.ButtonSolidQT,
                            { backgroundColor: theme.colors.strong },
                          ]}
                          title={'Continue'}
                        />
                      )}
                    </>
                    <>
                      {!Constants['eftmIDError'] ? null : (
                        <Text style={{ color: theme.colors.error }}>
                          {Constants['ErrorMessage']}
                        </Text>
                      )}
                    </>
                    <>
                      {!Constants['requesting'] ? null : (
                        <ButtonSolid
                          onPress={() => {
                            try {
                              navigation.navigate('BottomTabNavigator', {
                                screen: 'EFTMIDNav',
                                params: {
                                  screen: 'MagicLinkConfirmationScreen',
                                  params: {
                                    phoneNumber: phoneNumber,
                                    email: email,
                                    lastName: lastName,
                                    firstName: firstName,
                                    method: 'sms',
                                    state: pickerValue,
                                  },
                                },
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.ButtonSolidej,
                            { backgroundColor: theme.colors.strong },
                          ]}
                          title={'Requesting...'}
                          loading={true}
                        />
                      )}
                    </>
                  </View>
                )}
              </>
            </View>
          )}
        </>
      </KeyboardAvoidingView>
      <>
        {!Constants['activated'] ? null : (
          <View style={styles.ViewGk} pointerEvents={'auto'}>
            <View
              style={[
                styles.View_0W,
                { borderRadius: 15, borderColor: theme.colors.light },
              ]}
              pointerEvents={'auto'}
            >
              <Image
                style={styles.ImageH9}
                source={Images.Product}
                resizeMode={'cover'}
              />
              <Text style={[styles.TexteF, { color: theme.colors.strong }]}>
                {'Your EFTM ID: '}
                {Constants['eftmID']}
              </Text>

              <Text style={[styles.Text_4E, { color: theme.colors.strong }]}>
                {'Watch this space for new competitions 👀'}
              </Text>
            </View>

            <Text style={[styles.TextIO, { color: theme.colors.strong }]}>
              {'Previous Competitions'}
            </Text>

            <ScrollView
              contentContainerStyle={styles.ScrollView_27Content}
              showsVerticalScrollIndicator={false}
              bounces={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Touchable
                onPress={async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://eftm.com/2021/11/mega-eftm-lg-tv-giveaway-win-an-8399-86-inch-tv-219162'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={[
                    styles.ViewqQ,
                    { borderRadius: 25, borderColor: theme.colors.divider },
                  ]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.Imagevs}
                    source={Images.LG8KQNEDMiniLED030}
                    resizeMode={'cover'}
                  />
                  <Text style={[styles.TextMl, { color: theme.colors.strong }]}>
                    {'Ended 8 December 2021'}
                  </Text>

                  <Text
                    style={[styles.Text_1H, { color: theme.colors.strong }]}
                  >
                    {'86 Inch LG QNED TV - worth $8,399!'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://eftm.com/2021/07/mega-gaming-giveaway-win-one-of-three-xbox-series-x-lg-oled-tv-combos-213939'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={[
                    styles.ViewOh,
                    { borderRadius: 15, borderColor: theme.colors.divider },
                  ]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.Imagerm}
                    source={Images.C000200024804Still004}
                    resizeMode={'cover'}
                  />
                  <Text style={[styles.TextnW, { color: theme.colors.strong }]}>
                    {'Ended 9 August 2021'}
                  </Text>

                  <Text style={[styles.Textdh, { color: theme.colors.strong }]}>
                    {'Win an Xbox Series X and LG OLED TV!'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://eftm.com/2021/06/which-mobile-do-you-use-our-2021-mobile-phone-survey-win-a-tcl-smartphone-and-trend-micro-security-211871'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={[
                    styles.View_2c,
                    { borderRadius: 15, borderColor: theme.colors.divider },
                  ]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.ImageTc}
                    source={Images.DSC08172850x567}
                    resizeMode={'cover'}
                  />
                  <Text style={[styles.TextyW, { color: theme.colors.strong }]}>
                    {'Ended 30 June 2021'}
                  </Text>

                  <Text style={[styles.Textkl, { color: theme.colors.strong }]}>
                    {'Win a TCL 20L+ smartphone!'}
                  </Text>
                </View>
              </Touchable>
            </ScrollView>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagetu: {
    width: '90%',
    height: 80,
  },
  ViewOL: {
    alignItems: 'center',
  },
  Text_8a: {
    fontSize: 24,
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'center',
    marginTop: 24,
  },
  TextDb: {
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 22,
    marginTop: 4,
    fontFamily: 'PoppinsRegular',
  },
  TextFielduY: {
    marginTop: 16,
  },
  ButtonSolidQT: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  ButtonSolidej: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  View_8M: {
    marginLeft: 16,
    marginRight: 16,
  },
  KeyboardAvoidingViewMo: {
    marginTop: 16,
  },
  ImageH9: {
    width: 80,
    height: 80,
  },
  TexteF: {
    fontSize: 16,
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'left',
    marginTop: 8,
  },
  Text_4E: {
    alignSelf: 'center',
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    marginTop: 4,
  },
  View_0W: {
    alignItems: 'center',
    marginBottom: 48,
    justifyContent: 'center',
  },
  TextIO: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    marginTop: 16,
  },
  Imagevs: {
    height: 150,
    width: '100%',
  },
  TextMl: {
    fontFamily: 'PoppinsRegular',
    fontSize: 10,
    marginTop: 8,
    marginLeft: 16,
  },
  Text_1H: {
    fontFamily: 'PoppinsSemiBold',
    marginBottom: 8,
    marginLeft: 16,
  },
  ViewqQ: {
    height: 200,
    overflow: 'hidden',
    width: 300,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  Imagerm: {
    height: 150,
    width: '100%',
  },
  TextnW: {
    fontFamily: 'PoppinsRegular',
    fontSize: 10,
    marginTop: 8,
    marginLeft: 16,
  },
  Textdh: {
    fontFamily: 'PoppinsSemiBold',
    marginBottom: 8,
    marginLeft: 16,
  },
  ViewOh: {
    height: 200,
    width: 300,
    marginLeft: 16,
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ImageTc: {
    height: 150,
    width: '100%',
  },
  TextyW: {
    fontFamily: 'PoppinsRegular',
    fontSize: 10,
    marginTop: 8,
    marginLeft: 16,
  },
  Textkl: {
    fontFamily: 'PoppinsSemiBold',
    marginBottom: 8,
    marginLeft: 16,
  },
  View_2c: {
    height: 200,
    width: 300,
    marginLeft: 16,
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ScrollView_27Content: {
    marginTop: 8,
    marginBottom: 16,
  },
  ViewGk: {
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'space-between',
  },
  screen: {
    justifyContent: 'space-between',
  },
});

export default withTheme(EFTMIDScreen);
