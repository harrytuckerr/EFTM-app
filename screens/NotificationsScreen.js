import React from 'react';
import * as OneSignalApi from '../apis/OneSignalApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
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

  // Gets device model
  const GetDeviceID = () => {
    let deviceId = CustomCode.DeviceInfo.getDeviceId();
  };

  const { theme } = props;

  const addAndroidDevicePOST = OneSignalApi.useAddAndroidDevicePOST();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View style={styles.ViewnM} pointerEvents={'auto'}>
        <View>
          <View style={styles.ViewLv}>
            <Text
              style={[
                theme.typography.headline4,
                styles.TextU9,
                { color: theme.colors.strong },
              ]}
            >
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
                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                      ellipsizeMode={'tail'}
                    >
                      {'Tech'}
                    </Text>

                    <Text
                      style={[
                        theme.typography.caption,
                        { color: theme.colors.medium },
                      ]}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                      allowFontScaling={true}
                    >
                      {'All the latest tech news, reviews and guides.'}
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'article',
                        value: '',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  disabled={false}
                  color={theme.colors.primary}
                  activeTrackColor={theme.colors.background_blue}
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
                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Cars'}
                    </Text>

                    <Text
                      style={[
                        theme.typography.caption,
                        { color: theme.colors.medium },
                      ]}
                      ellipsizeMode={'tail'}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                    >
                      {'Hot car news, test drives and comparisons'}
                    </Text>
                  </View>
                </View>
                <Switch
                  disabled={false}
                  color={theme.colors.primary}
                  activeTrackColor={theme.colors.background_green}
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
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Lifestyle'}
                    </Text>

                    <Text
                      style={[
                        theme.typography.caption,
                        { color: theme.colors.medium },
                      ]}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                      ellipsizeMode={'tail'}
                    >
                      {'Updates on food, entertainment and our podcasts.'}
                    </Text>
                  </View>
                </View>
                <Switch
                  disabled={false}
                  color={theme.colors.primary}
                  activeTrackColor={theme.colors.yellow_background}
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
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      ellipsizeMode={'tail'}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                    >
                      {'Highlights'}
                    </Text>

                    <Text
                      style={[
                        theme.typography.caption,
                        { color: theme.colors.medium },
                      ]}
                      textBreakStrategy={'highQuality'}
                      allowFontScaling={true}
                      numberOfLines={2}
                    >
                      {
                        'Get notified when new competitions for your EFTM ID launch.'
                      }
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'highlightsnotifications',
                        value: '',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  color={theme.colors.primary}
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
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      allowFontScaling={true}
                      ellipsizeMode={'tail'}
                      textBreakStrategy={'highQuality'}
                    >
                      {'Big News'}
                    </Text>

                    <Text
                      style={[
                        theme.typography.caption,
                        { color: theme.colors.medium },
                      ]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Get notified as soon as big, breaking news happens.'}
                    </Text>
                  </View>
                </View>
                <Switch color={theme.colors.primary} />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerVF}
              color={theme.colors.divider}
              height={1}
            />
          </ScrollView>
        </View>

        <View style={styles.ViewzW}>
          <ButtonSolid
            onPress={async () => {
              try {
                await addAndroidDevicePOST.mutateAsync({
                  deviceOS: 'Android',
                  phonemodel: GetDeviceID(),
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidIa,
              { backgroundColor: theme.colors.strong },
            ]}
            title={'Save Notification Settings'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextU9: {
    textAlign: 'center',
  },
  ViewLv: {
    paddingBottom: 8,
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'center',
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
    marginTop: 12,
  },
  DividerDf: {
    height: 1,
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
  ViewY6: {
    flexWrap: 'wrap',
    width: '100%',
  },
  ViewPa: {
    flexDirection: 'row',
    maxWidth: '80%',
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
  ButtonSolidIa: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewzW: {
    paddingRight: 32,
    paddingLeft: 32,
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 14,
  },
  ViewnM: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default withTheme(NotificationsScreen);
