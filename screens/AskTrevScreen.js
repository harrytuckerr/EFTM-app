import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  CircleImage,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AskTrevScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const noIDCreateMessage = (Copy, Email, Phone, firstName, local) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    var message = Copy;
    var mobile = Phone;
    var local = local;
    var email = Email;
    var firstName = firstName;

    var fullMessage = `From: ${firstName} 
Email: ${email} 
Mobile: ${mobile} 
State: ${local} 

Question: 
${message}`;

    return fullMessage;
  };

  const createMessage = (Mobile, Local, Email, Name, copy) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    // We strip any comma's from the input.
    var message = copy;
    var mobile = CustomCode.notifications.mobile;
    var local = CustomCode.notifications.location;
    var email = CustomCode.notifications.email;
    var firstName = CustomCode.notifications.firstName;

    var fullMessage = `From: ${firstName} 
  Email: ${email} 
  Mobile: ${mobile} 
  State: ${local} 
  
  Question: 
  ${message}`;

    return fullMessage;
  };

  const { theme } = props;

  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [questionInputValue, setQuestionInputValue] = React.useState('');
  const [suburb, setSuburb] = React.useState('');
  const [textFieldValue, setTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewls}
        enabled={true}
        behavior={'padding'}
      >
        <View style={styles.Viewxz} pointerEvents={'auto'}>
          <CircleImage
            style={styles.CircleImageI9}
            source={Images.Trev}
            size={60}
          />
          <Text style={[styles.Text_44, { color: theme.colors.strong }]}>
            {'Ask Trevor!'}
          </Text>

          <Text style={[styles.TextHg, { color: theme.colors.medium }]}>
            {
              'Got a tech question? Looking for advice on what to buy, how to fix it or need someone to sort out that pesky problem you’re having with a tech company? EFTM’s Trevor Long is here to help.'
            }
          </Text>
        </View>

        <View pointerEvents={'auto'}>
          <TextInput
            onChangeText={questionInputValue => {
              try {
                setQuestionInputValue(questionInputValue);
                setTextInputValue(questionInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputph, { borderColor: theme.colors.divider }]}
            value={textInputValue}
            placeholder={'How can I help?'}
            multiline={true}
            keyboardType={'default'}
            autoCorrect={true}
            autoCapitalize={'sentences'}
            enablesReturnKeyAutomatically={false}
            clearTextOnFocus={false}
            textBreakStrategy={'simple'}
            textContentType={'none'}
            numberOfLines={10}
          />
        </View>
        <>
          {!Constants['activated'] ? null : (
            <ButtonSolid
              onPress={() => {
                try {
                  const MessageDetails = createMessage(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    questionInputValue
                  );
                  console.log(MessageDetails);
                  console.log(questionInputValue);
                  Linking.openURL(
                    `mailto:editor@eftm.com?subject=New Ask Trev&body=${questionInputValue}%0D%0A%0D%0AFrom,%0D%0A ${Constants['firstName']}%0D%0A%0D%0AMobile: ${Constants['mobileNumber']}%0D%0AState: ${Constants['state']}`
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSoliduP,
                { backgroundColor: theme.colors.strong },
              ]}
              title={'Send'}
            />
          )}
        </>
        <>
          {Constants['activated'] ? null : (
            <ButtonSolid
              onPress={() => {
                try {
                  const noIDMessageDetails = noIDCreateMessage(
                    questionInputValue,
                    Email,
                    phoneNumber,
                    name,
                    suburb
                  );
                  console.log(noIDMessageDetails);
                  Linking.openURL(
                    `mailto:editor@eftm.com?subject=New Ask Trev&body=${noIDMessageDetails}%0D%0A%0D%0AFrom,%0D%0A ${name}%0D%0A%0D%0AMobile: ${phoneNumber}%0D%0AState: ${suburb}`
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidZC,
                { backgroundColor: theme.colors.strong },
              ]}
              title={'Send'}
            />
          )}
        </>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  CircleImageI9: {
    marginTop: 16,
  },
  Text_44: {
    fontSize: 24,
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'center',
  },
  TextHg: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
    fontFamily: 'PoppinsRegular',
  },
  Viewxz: {
    alignItems: 'center',
  },
  TextInputph: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    textAlign: 'left',
  },
  ButtonSoliduP: {
    borderRadius: 8,
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'center',
  },
  ButtonSolidZC: {
    borderRadius: 8,
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'center',
  },
  KeyboardAvoidingViewls: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
    justifyContent: 'space-around',
  },
});

export default withTheme(AskTrevScreen);
