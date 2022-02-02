import React from 'react';
import * as RetrievePostsApi from '../apis/RetrievePostsApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonOutline,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ArticleListScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const convertTime = time => {
    {
      // Using moment's inbuilt function to get relative time.
      return CustomCode.moment(time).fromNow().toString();
    }
  };

  const convertHTML = copy => {
    {
      return CustomCode.decode(copy).toString();
    }
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={styles.ViewSi} pointerEvents={'auto'}>
        <IconButton
          onPress={() => {
            try {
              navigation.goBack();
              setGlobalVariableValue({
                key: 'loadmorePage',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.IconButtonHK}
          icon={'Ionicons/arrow-back'}
          size={32}
          color={theme.colors.strong}
        />
        <View style={styles.ViewRm} pointerEvents={'auto'}>
          <Text style={[styles.Textix, { color: theme.colors.strong }]}>
            {props.route?.params?.Category ?? 'Tech'}
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewrzContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <RetrievePostsApi.FetchCategoryOffsetPostsGET
          category={props.route?.params?.categoryNumber ?? 7}
          numberofposts={2}
        >
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <>
                <FlatList
                  data={fetchData}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <RetrievePostsApi.FetchRetrieveMediaResolutionsGET
                        id={listData?.featured_media}
                      >
                        {({ loading, error, data, doFetch }) => {
                          const fetchData = data;
                          if (!fetchData || loading) {
                            return <ActivityIndicator />;
                          }

                          if (error) {
                            return (
                              <Text style={{ textAlign: 'center' }}>
                                There was a problem fetching this data
                              </Text>
                            );
                          }

                          return (
                            <Touchable
                              onPress={async () => {
                                try {
                                  await WebBrowser.openBrowserAsync(
                                    `${listData?.link}?ref=EFTMApp`
                                  );
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={[styles.ViewIn, { borderRadius: 20 }]}
                                pointerEvents={'auto'}
                              >
                                <ImageBackground
                                  style={styles.ImageBackground_5j}
                                  source={{
                                    uri: `${fetchData?.media_details?.sizes?.medium_large?.source_url}`,
                                  }}
                                  resizeMode={'cover'}
                                >
                                  <ImageBackground
                                    style={styles.ImageBackground_7k}
                                    source={Images.Angryimg1}
                                    resizeMode={'cover'}
                                  >
                                    <View
                                      style={styles.Viewxf}
                                      pointerEvents={'auto'}
                                    >
                                      <Text
                                        style={[
                                          styles.Textz1,
                                          { color: theme.colors.background },
                                        ]}
                                      >
                                        {convertHTML(listData?.title?.rendered)}
                                      </Text>

                                      <Text
                                        style={[
                                          styles.TextPb,
                                          { color: theme.colors.background },
                                        ]}
                                      >
                                        {convertTime(listData?.date)}
                                      </Text>
                                    </View>
                                  </ImageBackground>
                                </ImageBackground>
                              </View>
                            </Touchable>
                          );
                        }}
                      </RetrievePostsApi.FetchRetrieveMediaResolutionsGET>
                    );
                  }}
                  contentContainerStyle={styles.FlatListBwContent}
                  numColumns={1}
                />
                <View style={styles.Viewy5} pointerEvents={'auto'}>
                  <>
                    {Constants['loadmorePage'] ? null : (
                      <View style={styles.View_8X} pointerEvents={'auto'}>
                        <ButtonOutline
                          onPress={() => {
                            try {
                              setGlobalVariableValue({
                                key: 'loadmorePage',
                                value: true,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.ButtonOutlineIb,
                            {
                              color: theme.colors.strong,
                              borderColor: theme.colors.strong,
                            },
                          ]}
                          title={'Load More'}
                        />
                      </View>
                    )}
                  </>
                  <>
                    {!Constants['loadmorePage'] ? null : (
                      <View pointerEvents={'auto'}>
                        <RetrievePostsApi.FetchCategoryOffsetPostsGET
                          category={props.route?.params?.categoryNumber ?? 7}
                          numberofposts={15}
                        >
                          {({ loading, error, data, doFetch }) => {
                            const fetchData = data;
                            if (!fetchData || loading) {
                              return <ActivityIndicator />;
                            }

                            if (error) {
                              return (
                                <Text style={{ textAlign: 'center' }}>
                                  There was a problem fetching this data
                                </Text>
                              );
                            }

                            return (
                              <FlatList
                                data={fetchData}
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <RetrievePostsApi.FetchRetrieveMediaResolutionsGET
                                      id={listData?.featured_media}
                                    >
                                      {({ loading, error, data, doFetch }) => {
                                        const fetchData = data;
                                        if (!fetchData || loading) {
                                          return <ActivityIndicator />;
                                        }

                                        if (error) {
                                          return (
                                            <Text
                                              style={{ textAlign: 'center' }}
                                            >
                                              There was a problem fetching this
                                              data
                                            </Text>
                                          );
                                        }

                                        return (
                                          <Touchable
                                            onPress={async () => {
                                              try {
                                                await WebBrowser.openBrowserAsync(
                                                  `${listData?.link}?ref=EFTMApp`
                                                );
                                              } catch (err) {
                                                console.error(err);
                                              }
                                            }}
                                          >
                                            <ImageBackground
                                              style={[
                                                styles.ImageBackgroundT8,
                                                { borderRadius: 20 },
                                              ]}
                                              source={{
                                                uri: `${fetchData?.media_details?.sizes?.medium_large?.source_url}`,
                                              }}
                                              resizeMode={'cover'}
                                            >
                                              <ImageBackground
                                                style={styles.ImageBackgrounds0}
                                                source={Images.Angryimg1}
                                                resizeMode={'cover'}
                                              >
                                                <View
                                                  style={styles.Viewt8}
                                                  pointerEvents={'auto'}
                                                >
                                                  <Text
                                                    style={[
                                                      styles.Textr5,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .background,
                                                      },
                                                    ]}
                                                  >
                                                    {convertHTML(
                                                      listData?.title?.rendered
                                                    )}
                                                  </Text>

                                                  <Text
                                                    style={[
                                                      styles.TextzH,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .background,
                                                      },
                                                    ]}
                                                  >
                                                    {convertTime(
                                                      listData?.date
                                                    )}
                                                  </Text>
                                                </View>
                                              </ImageBackground>
                                            </ImageBackground>
                                          </Touchable>
                                        );
                                      }}
                                    </RetrievePostsApi.FetchRetrieveMediaResolutionsGET>
                                  );
                                }}
                                contentContainerStyle={styles.FlatListWMContent}
                                numColumns={1}
                              />
                            );
                          }}
                        </RetrievePostsApi.FetchCategoryOffsetPostsGET>
                      </View>
                    )}
                  </>
                </View>
              </>
            );
          }}
        </RetrievePostsApi.FetchCategoryOffsetPostsGET>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconButtonHK: {
    marginTop: 14,
    marginLeft: 16,
    zIndex: 2,
  },
  Textix: {
    fontFamily: 'PoppinsBold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 16,
  },
  ViewRm: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -48,
    width: '100%',
    zIndex: 1,
  },
  ViewSi: {
    alignContent: 'center',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 4,
  },
  Textz1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    textAlign: 'left',
  },
  TextPb: {
    textAlign: 'left',
    fontFamily: 'PoppinsLight',
  },
  Viewxf: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 8,
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'flex-start',
  },
  ImageBackground_7k: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end',
  },
  ImageBackground_5j: {
    width: '100%',
    height: 250,
  },
  ViewIn: {
    marginTop: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  FetchH1: {
    minHeight: 40,
  },
  FlatListBwContent: {
    flex: 1,
  },
  ButtonOutlineIb: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    width: '60%',
  },
  View_8X: {
    alignItems: 'center',
  },
  Textr5: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    textAlign: 'left',
  },
  TextzH: {
    fontFamily: 'PoppinsLight',
    textAlign: 'left',
    marginTop: 4,
  },
  Viewt8: {
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 8,
  },
  ImageBackgrounds0: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  ImageBackgroundT8: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
    marginTop: 8,
    marginBottom: 8,
  },
  FetchVC: {
    minHeight: 40,
  },
  FlatListWMContent: {
    flex: 1,
  },
  Fetch_3U: {
    minHeight: 40,
  },
  Viewy5: {
    paddingBottom: 16,
    marginTop: 8,
  },
  Fetchtb: {
    minHeight: 40,
  },
  ScrollViewrzContent: {
    marginTop: 8,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  screen: {
    justifyContent: 'center',
  },
});

export default withTheme(ArticleListScreen);
