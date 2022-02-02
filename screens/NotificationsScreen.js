import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Divider,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const NotificationsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const sendIndividualTag = (tagName, tagValue) => {
    CustomCode.OneSignal.sendTag(tagName, tagValue);
  };

  const sendTags = (tech, cars, lifestyle, bignews, highlights) => {
    CustomCode.OneSignal.sendTags({
      tech: tech,
      cars: cars,
      lifestyle: lifestyle,
      bignews: bignews,
      highlights: highlights,
    });
  };

  const boolToInt = VariableName => {
    var original = +VariableName;

    return original.toString();
  };

  const reverseBool = errornumber => {
    if ((errornumber = '1')) return false;
    else if ((errornumber = '0')) return true;
  };

  const { theme } = props;

  const [BigNewsswitchValue, setBigNewsswitchValue] = React.useState(false);
  const [CarsswitchValue, setCarsswitchValue] = React.useState(false);
  const [LifestyleswitchValue, setLifestyleswitchValue] = React.useState(false);
  const [TechswitchValue, setTechswitchValue] = React.useState(false);
  const [highlightsswitchValue, setHighlightsswitchValue] =
    React.useState(false);
  const [switchRowValue, setSwitchRowValue] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.ViewnM} pointerEvents={'auto'}>
        <View style={styles.Viewbe}>
          <View style={styles.ViewLv}>
            <Text style={[styles.TextU9, { color: theme.colors.strong }]}>
              {'Notifications'}
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.ScrollViewjSContent}
            showsVerticalScrollIndicator={false}
            bounces={true}
          >
            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'technotifications',
                    value: '',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewQd}>
                <View style={styles.ViewG9}>
                  <View style={styles.ViewCp}>
                    <Text
                      style={[styles.Textw5, { color: theme.colors.strong }]}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                      ellipsizeMode={'tail'}
                    >
                      {'Tech'}
                    </Text>

                    <Text
                      style={[styles.TextG7, { color: theme.colors.medium }]}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                      allowFontScaling={true}
                    >
                      {'All the latest tech news, reviews and guides.'}
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={TechswitchValue => {
                    try {
                      setTechswitchValue(TechswitchValue);
                      const TestV = setGlobalVariableValue({
                        key: 'Technotifications',
                        value: TechswitchValue,
                      });
                      console.log(boolToInt(TechswitchValue));
                      sendIndividualTag('tech', boolToInt(TechswitchValue));
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  activeTrackColor={theme.colors.background_blue}
                  defaultValue={Constants['Technotifications']}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerDf}
              height={1}
              color={theme.colors.divider}
            />
            <Touchable>
              <View style={styles.ViewbC}>
                <View style={styles.ViewpT}>
                  <View style={styles.ViewVC}>
                    <Text
                      style={[styles.TextcW, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Cars'}
                    </Text>

                    <Text
                      style={[styles.TextGx, { color: theme.colors.medium }]}
                      ellipsizeMode={'tail'}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                    >
                      {'Hot car news, test drives and comparisons'}
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={CarsswitchValue => {
                    try {
                      setCarsswitchValue(CarsswitchValue);
                      const TestV = setGlobalVariableValue({
                        key: 'Carsnotifications',
                        value: CarsswitchValue,
                      });
                      console.log(Constants['Carsnotifications']);
                      sendIndividualTag('cars', boolToInt(CarsswitchValue));
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  activeTrackColor={theme.colors.background_green}
                  defaultValue={Constants['Carsnotifications']}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerLe}
              color={theme.colors.divider}
              height={1}
            />
            <Touchable>
              <View style={styles.ViewFB}>
                <View style={styles.ViewPa}>
                  <View style={styles.ViewY6}>
                    <Text
                      style={[styles.TextOz, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Lifestyle'}
                    </Text>

                    <Text
                      style={[styles.TextVO, { color: theme.colors.medium }]}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                      ellipsizeMode={'tail'}
                    >
                      {'Updates on food, entertainment and our podcasts.'}
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={LifestyleswitchValue => {
                    try {
                      setLifestyleswitchValue(LifestyleswitchValue);
                      const TestV = setGlobalVariableValue({
                        key: 'Lifestylenotifications',
                        value: LifestyleswitchValue,
                      });
                      console.log(Constants['Lifestylenotifications']);
                      sendIndividualTag(
                        'lifestyle',
                        boolToInt(LifestyleswitchValue)
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  activeTrackColor={theme.colors.yellow_background}
                  defaultValue={Constants['Lifestylenotifications']}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerTm}
              color={theme.colors.divider}
              height={1}
            />
            <Touchable>
              <View style={styles.ViewYp}>
                <View style={styles.ViewF3}>
                  <View style={styles.ViewQb}>
                    <Text
                      style={[styles.TextN3, { color: theme.colors.strong }]}
                      ellipsizeMode={'tail'}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                    >
                      {'Highlights'}
                    </Text>

                    <Text
                      style={[styles.Textus, { color: theme.colors.medium }]}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                      numberOfLines={2}
                    >
                      {
                        'Get notified when articles we find particularly interesting are posted.'
                      }
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={highlightsswitchValue => {
                    try {
                      setHighlightsswitchValue(highlightsswitchValue);
                      const TestV = setGlobalVariableValue({
                        key: 'Highlightsnotifications',
                        value: highlightsswitchValue,
                      });
                      console.log(Constants['Highlightsnotifications']);
                      sendIndividualTag(
                        'highlights',
                        boolToInt(highlightsswitchValue)
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['Highlightsnotifications']}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerTB}
              height={1}
              color={theme.colors.divider}
            />
            <Touchable>
              <View style={styles.ViewRh}>
                <View style={styles.View_0W}>
                  <View style={styles.ViewS2}>
                    <Text
                      style={[styles.TextoA, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      ellipsizeMode={'tail'}
                      textBreakStrategy={'highQuality'}
                    >
                      {'Big News'}
                    </Text>

                    <Text
                      style={[styles.TextYb, { color: theme.colors.medium }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {
                        'Get notified as soon as big, breaking news happens. \n '
                      }
                      {Constants['Bignewsnotifications'] === 'false'
                        ? false
                        : true}
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={BigNewsswitchValue => {
                    try {
                      setBigNewsswitchValue(BigNewsswitchValue);
                      const TestV = setGlobalVariableValue({
                        key: 'Bignewsnotifications',
                        value: BigNewsswitchValue,
                      });
                      console.log(Constants['Bignewsnotifications']);
                      sendIndividualTag(
                        'bignews',
                        boolToInt(BigNewsswitchValue)
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  activeTrackColor={theme.colors.strong}
                  defaultValue={Constants['Bignewsnotifications']}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerVF}
              color={theme.colors.divider}
              height={1}
            />
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextU9: {
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
    fontSize: 24,
  },
  ViewLv: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'center',
  },
  Textw5: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
  },
  TextG7: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
  },
  ViewCp: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
  },
  ViewG9: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewQd: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  DividerDf: {
    height: 1,
  },
  TextcW: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
  },
  TextGx: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
  },
  ViewVC: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
  },
  ViewpT: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewbC: {
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DividerLe: {
    height: 1,
  },
  TextOz: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
  },
  TextVO: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
  },
  ViewY6: {
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'flex-start',
  },
  ViewPa: {
    flexDirection: 'row',
    maxWidth: '75%',
    width: '100%',
    alignItems: 'center',
  },
  ViewFB: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  DividerTm: {
    height: 1,
  },
  TextN3: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
  },
  Textus: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
  },
  ViewQb: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
  },
  ViewF3: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  ViewYp: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  DividerTB: {
    height: 1,
  },
  TextoA: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
  },
  TextYb: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
  },
  ViewS2: {
    width: '100%',
  },
  View_0W: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  ViewRh: {
    marginBottom: 12,
    marginTop: 12,
    width: '100%',
    paddingBottom: 12,
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DividerVF: {
    height: 1,
  },
  ScrollViewjSContent: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 8,
    paddingBottom: 8,
  },
  Viewbe: {
    marginTop: 15,
  },
  ViewnM: {
    flex: 1,
  },
});

export default withTheme(NotificationsScreen);
