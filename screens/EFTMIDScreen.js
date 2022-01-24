import React from 'react';
import * as EFTMIDApi from '../apis/EFTMIDApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  Picker,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const EFTMIDScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewMo}
        enabled={true}
        behavior={'position'}
      >
        <View style={styles.ViewOL} pointerEvents={'auto'}>
          <Image
            style={styles.Imagetu}
            source={Images.EFTMHIRESLOGO2016}
            resizeMode={'contain'}
          />
        </View>

        <View style={styles.View_8M} pointerEvents={'auto'}>
          <Text style={[styles.Text_8a, { color: theme.colors.strong }]}>
            {Constants['eftmID'].toString()}
          </Text>

          <Text style={[styles.TextDb, { color: theme.colors.medium }]}>
            {
              'This unique code will be your ticket to more entries in our giveaways, and even discounts on your next gadget purchase.'
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
                  returnKeyType={'done'}
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
                <ButtonSolid
                  onPress={async () => {
                    try {
                      navigation.navigate('EFTMIDNav', {
                        screen: 'MagicLinkConfirmationScreen',
                        params: {
                          firstName: firstName,
                          method: 'sms',
                          state: pickerValue,
                          phoneNumber: phoneNumber,
                          email: email,
                          lastName: lastName,
                        },
                      });
                      await requestVerificationCodePOST.mutateAsync({
                        email: email.toString(),
                        emailORsms: 'sms',
                        phone: phoneNumber,
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
              </View>
            )}
          </>
        </View>
      </KeyboardAvoidingView>
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
    marginTop: 32,
  },
  TextDb: {
    fontSize: 16,
    textAlign: 'center',
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
  View_8M: {
    marginLeft: 16,
    marginRight: 16,
  },
  KeyboardAvoidingViewMo: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 32,
  },
});

export default withTheme(EFTMIDScreen);
