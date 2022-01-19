import React from 'react';
import * as RetrievePostsApi from '../apis/RetrievePostsApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const EFTMScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const convertHTML = copy => {
    {
      return CustomCode.decode(copy).toString();
    }
  };

  const ConvertTime = time => {
    {
      // Using moment's inbuilt function to get relative time.
      return CustomCode.moment(time).fromNow().toString();
    }
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ScrollView
        style={styles.ScrollViewsB}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.ViewFu} pointerEvents={'auto'}>
          <RetrievePostsApi.FetchRetrieveLatestPostFromTagGET tag={8407}>
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
                        <RetrievePostsApi.FetchRetrieveSinglePostMediaGET
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
                                    setGlobalVariableValue({
                                      key: 'article',
                                      value: listData?.link,
                                    });
                                    await WebBrowser.openBrowserAsync(
                                      `${listData?.link}`
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                <ImageBackground
                                  style={[
                                    styles.ImageBackgroundZK,
                                    {
                                      borderColor: theme.colors.background,
                                      borderRadius: 10,
                                    },
                                  ]}
                                  source={{
                                    uri: `${fetchData?.media_details?.sizes?.large?.source_url}`,
                                  }}
                                  resizeMode={'cover'}
                                >
                                  <View
                                    style={styles.ViewaB}
                                    pointerEvents={'auto'}
                                  >
                                    <ImageBackground
                                      style={styles.ImageBackground_6L}
                                      source={Images.Angryimg1}
                                      resizeMode={'cover'}
                                    >
                                      <Image
                                        style={styles.ImageVh}
                                        resizeMode={'contain'}
                                        source={{
                                          uri: 'https://cdn.eftm.com/wp-content/uploads/2021/05/EFTM-LOGO-WHITE-100.png',
                                        }}
                                      />
                                      <View
                                        style={styles.ViewMX}
                                        pointerEvents={'auto'}
                                      >
                                        <Text
                                          style={[
                                            styles.Text_3w,
                                            { color: theme.colors.background },
                                          ]}
                                        >
                                          {convertHTML(
                                            listData?.title?.rendered
                                          )}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextE4,
                                            { color: theme.colors.background },
                                          ]}
                                        >
                                          {ConvertTime(listData?.date)}
                                        </Text>
                                      </View>
                                    </ImageBackground>
                                  </View>
                                </ImageBackground>
                              </Touchable>
                            );
                          }}
                        </RetrievePostsApi.FetchRetrieveSinglePostMediaGET>
                      );
                    }}
                    style={styles.FlatListAt}
                    contentContainerStyle={styles.FlatListAtContent}
                    numColumns={1}
                    horizontal={false}
                  />
                  <View pointerEvents={'auto'} />
                </>
              );
            }}
          </RetrievePostsApi.FetchRetrieveLatestPostFromTagGET>
        </View>

        <View style={styles.View_08} pointerEvents={'auto'}>
          <View style={styles.Viewld} pointerEvents={'auto'}>
            <Text style={[styles.TextY0, { color: theme.colors.strong }]}>
              {'Tech'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('HomeArticles', {
                    screen: 'ArticleListScreen',
                    params: { categoryNumber: 7, Category: 'Tech' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableQ9}
            >
              <Text style={[styles.TextnG, { color: theme.colors.strong }]}>
                {'More'}
              </Text>
            </Touchable>
          </View>

          <RetrievePostsApi.FetchRetrievePostsForCategoryGET categoryID={7}>
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
                <ScrollView
                  contentContainerStyle={styles.ScrollViewOaContent}
                  showsVerticalScrollIndicator={false}
                  bounces={true}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <FlatList
                    data={fetchData}
                    renderItem={({ item }) => {
                      const techListData = item;
                      return (
                        <View
                          style={[styles.Vieway, { borderRadius: 14 }]}
                          pointerEvents={'auto'}
                        >
                          <RetrievePostsApi.FetchRetrieveMediaResolutionsGET
                            id={techListData?.featured_media}
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
                                <ImageBackground
                                  style={[
                                    styles.ImageBackgroundue,
                                    { borderRadius: 25 },
                                  ]}
                                  resizeMode={'cover'}
                                  backgroundColor={theme.colors.background}
                                  source={{
                                    uri: `${fetchData?.media_details?.sizes?.medium_large?.source_url}`,
                                  }}
                                >
                                  <Touchable
                                    onPress={async () => {
                                      try {
                                        await WebBrowser.openBrowserAsync(
                                          `${techListData?.link}`
                                        );
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <ImageBackground
                                      style={styles.ImageBackgroundnx}
                                      source={Images.Bluegradient}
                                      resizeMode={'cover'}
                                    >
                                      <View
                                        style={styles.ViewQr}
                                        pointerEvents={'auto'}
                                      >
                                        <Text
                                          style={[
                                            styles.TextoE,
                                            {
                                              color: theme.colors.strongInverse,
                                            },
                                          ]}
                                        >
                                          {convertHTML(
                                            techListData?.title?.rendered
                                          )}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.Textiu,
                                            { color: theme.colors.background },
                                          ]}
                                        >
                                          {ConvertTime(techListData?.date)}
                                        </Text>
                                      </View>
                                    </ImageBackground>
                                  </Touchable>
                                </ImageBackground>
                              );
                            }}
                          </RetrievePostsApi.FetchRetrieveMediaResolutionsGET>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatListayContent}
                    numColumns={1}
                    horizontal={true}
                  />
                </ScrollView>
              );
            }}
          </RetrievePostsApi.FetchRetrievePostsForCategoryGET>
        </View>

        <View style={styles.ViewPR} pointerEvents={'auto'}>
          <View
            style={styles.Viewzb}
            pointerEvents={'auto'}
            accessibilityElementsHidden={false}
          >
            <Text style={[styles.TextL1, { color: theme.colors.strong }]}>
              {'Cars'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('HomeArticles', {
                    screen: 'ArticleListScreen',
                    params: { categoryNumber: 3, Category: 'Cars' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchableck}
            >
              <Text style={[styles.TextVo, { color: theme.colors.strong }]}>
                {'More'}
              </Text>
            </Touchable>
          </View>

          <RetrievePostsApi.FetchRetrievePostsForCategoryGET categoryID={3}>
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
                <ScrollView
                  contentContainerStyle={styles.ScrollViewS6Content}
                  showsVerticalScrollIndicator={false}
                  bounces={true}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <FlatList
                    data={fetchData}
                    renderItem={({ item }) => {
                      const carsListData = item;
                      return (
                        <View
                          style={[styles.ViewoO, { borderRadius: 14 }]}
                          pointerEvents={'auto'}
                        >
                          <RetrievePostsApi.FetchRetrieveMediaResolutionsGET
                            id={carsListData?.featured_media}
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
                                <ImageBackground
                                  style={[
                                    styles.ImageBackgroundO1,
                                    { borderRadius: 25 },
                                  ]}
                                  source={{
                                    uri: `${fetchData?.media_details?.sizes?.medium_large?.source_url}`,
                                  }}
                                  resizeMode={'cover'}
                                  backgroundColor={theme.colors.background}
                                >
                                  <ImageBackground
                                    style={styles.ImageBackground_27}
                                    source={Images.Angryimg2}
                                    resizeMode={'cover'}
                                  >
                                    <Touchable
                                      onPress={async () => {
                                        try {
                                          await WebBrowser.openBrowserAsync(
                                            `${carsListData?.link}`
                                          );
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                    >
                                      <View
                                        style={styles.ViewkV}
                                        pointerEvents={'auto'}
                                      >
                                        <Text
                                          style={[
                                            styles.Text_8c,
                                            {
                                              color: theme.colors.strongInverse,
                                            },
                                          ]}
                                        >
                                          {convertHTML(
                                            carsListData?.title?.rendered
                                          )}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.Textya,
                                            { color: theme.colors.background },
                                          ]}
                                        >
                                          {ConvertTime(carsListData?.date)}
                                        </Text>
                                      </View>
                                    </Touchable>
                                  </ImageBackground>
                                </ImageBackground>
                              );
                            }}
                          </RetrievePostsApi.FetchRetrieveMediaResolutionsGET>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatListPeContent}
                    numColumns={1}
                    horizontal={true}
                  />
                </ScrollView>
              );
            }}
          </RetrievePostsApi.FetchRetrievePostsForCategoryGET>
        </View>

        <View style={styles.ViewAb} pointerEvents={'auto'}>
          <View
            style={styles.ViewBN}
            pointerEvents={'auto'}
            accessibilityElementsHidden={false}
          >
            <Text style={[styles.TextEj, { color: theme.colors.strong }]}>
              {'Lifestyle'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('HomeArticles', {
                    screen: 'ArticleListScreen',
                    params: { categoryNumber: 5, Category: 'Lifestyle' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableRz}
            >
              <Text style={[styles.Textbb, { color: theme.colors.strong }]}>
                {'More'}
              </Text>
            </Touchable>
          </View>

          <RetrievePostsApi.FetchRetrievePostsForCategoryGET categoryID={5}>
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
                <ScrollView
                  contentContainerStyle={styles.ScrollViewitContent}
                  showsVerticalScrollIndicator={false}
                  bounces={true}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <FlatList
                    data={fetchData}
                    renderItem={({ item }) => {
                      const listLifestyleData = item;
                      return (
                        <View
                          style={[styles.View_2x, { borderRadius: 14 }]}
                          pointerEvents={'auto'}
                        >
                          <RetrievePostsApi.FetchRetrieveMediaResolutionsGET
                            id={listLifestyleData?.featured_media}
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
                                <ImageBackground
                                  style={[
                                    styles.ImageBackgroundzs,
                                    { borderRadius: 25 },
                                  ]}
                                  source={{
                                    uri: `${fetchData?.media_details?.sizes?.medium_large?.source_url}`,
                                  }}
                                  resizeMode={'cover'}
                                  backgroundColor={theme.colors.background}
                                >
                                  <ImageBackground
                                    style={styles.ImageBackground_1F}
                                    source={Images.Angryimg4}
                                    resizeMode={'cover'}
                                  >
                                    <Touchable
                                      onPress={async () => {
                                        try {
                                          await WebBrowser.openBrowserAsync(
                                            `${listLifestyleData?.link}`
                                          );
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                    >
                                      <View
                                        style={styles.View_8W}
                                        pointerEvents={'auto'}
                                      >
                                        <Text
                                          style={[
                                            styles.TextUS,
                                            {
                                              color: theme.colors.strongInverse,
                                            },
                                          ]}
                                        >
                                          {convertHTML(
                                            listLifestyleData?.title?.rendered
                                          )}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextUa,
                                            { color: theme.colors.background },
                                          ]}
                                        >
                                          {ConvertTime(listLifestyleData?.date)}
                                        </Text>
                                      </View>
                                    </Touchable>
                                  </ImageBackground>
                                </ImageBackground>
                              );
                            }}
                          </RetrievePostsApi.FetchRetrieveMediaResolutionsGET>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatListN6Content}
                    numColumns={1}
                    horizontal={true}
                  />
                </ScrollView>
              );
            }}
          </RetrievePostsApi.FetchRetrievePostsForCategoryGET>
        </View>

        <View style={styles.ViewT9} pointerEvents={'auto'}>
          <View
            style={styles.Viewz0}
            pointerEvents={'auto'}
            accessibilityElementsHidden={false}
          >
            <Text style={[styles.TextYs, { color: theme.colors.strong }]}>
              {'Podcasts'}
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.ScrollView_8EContent}
            showsVerticalScrollIndicator={false}
            bounces={true}
            horizontal={true}
          >
            <View
              style={[styles.ViewAL, { borderRadius: 25 }]}
              pointerEvents={'auto'}
            >
              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'SpotifyPod',
                      value:
                        'https://open.spotify.com/show/5wvXj6yUHIItTUNnHIm5E7',
                    });
                    navigation.navigate('HomeArticles', {
                      screen: 'PodcastSeriesPageScreen',
                      params: {
                        PodURL:
                          'api.json?rss_url=https%3A%2F%2Frss.whooshkaa.com%2Frss%2Fpodcast%2Fid%2F902',
                      },
                    });
                    setGlobalVariableValue({
                      key: 'GooglePod',
                      value:
                        'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3Mud2hvb3Noa2FhLmNvbS9yc3MvcG9kY2FzdC9pZC85MDI',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Image
                  style={styles.ImageDD}
                  source={{
                    uri: 'https://images.whooshkaa.com/podcasts/podcast_902/podcast_media/fca3f0-eftm-podcast-tl-ytl-2020.jpg',
                  }}
                  resizeMode={'cover'}
                />
              </Touchable>
            </View>

            <View
              style={[styles.ViewKB, { borderRadius: 25 }]}
              pointerEvents={'auto'}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('HomeArticles', {
                      screen: 'PodcastSeriesPageScreen',
                      params: {
                        PodURL:
                          'api.json?rss_url=https%3A%2F%2Frss.whooshkaa.com%2Frss%2Fpodcast%2Fid%2F1045',
                      },
                    });
                    setGlobalVariableValue({
                      key: 'GooglePod',
                      value:
                        'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cud2hvb3Noa2FhLmNvbS9yc3MvcG9kY2FzdC9pZC8xMDQ1',
                    });
                    setGlobalVariableValue({
                      key: 'SpotifyPod',
                      value:
                        'https://open.spotify.com/show/0mQsdldqYnn2Niare37n69',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Image
                  style={styles.ImageuZ}
                  source={{
                    uri: 'https://images.whooshkaa.com/podcasts/podcast_1045/podcast_media/608928-tbmyns-thumb-option1-fetch-hisense.jpg',
                  }}
                  resizeMode={'cover'}
                />
              </Touchable>
            </View>

            <View
              style={[styles.ViewLJ, { borderRadius: 25 }]}
              pointerEvents={'auto'}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('PodcastSeriesPageScreen', {
                      PodURL:
                        'api.json?rss_url=https%3A%2F%2Frss.whooshkaa.com%2Frss%2Fpodcast%2Fid%2F11663',
                    });
                    setGlobalVariableValue({
                      key: 'SpotifyPod',
                      value:
                        'https://open.spotify.com/show/2ntsCPiGuHh4I6pSkL7fhp',
                    });
                    setGlobalVariableValue({
                      key: 'GooglePod',
                      value:
                        'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3Mud2hvb3Noa2FhLmNvbS9yc3MvcG9kY2FzdC9pZC8xMTY2Mw?sa=X&ved=0CAIQ9sEGahgKEwjY2LLNq7r1AhUAAAAAHQAAAAAQ7AM',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Image
                  style={styles.ImageDv}
                  source={{
                    uri: 'https://images.whooshkaa.com/podcasts/podcast_11663/podcast_media/bd9540-eftm-f1-podcast-artwork-2021.jpg',
                  }}
                  resizeMode={'cover'}
                />
              </Touchable>
            </View>

            <View
              style={[styles.ViewWf, { borderRadius: 25 }]}
              pointerEvents={'auto'}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('HomeArticles', {
                      screen: 'PodcastSeriesPageScreen',
                      params: {
                        PodURL:
                          'api.json?rss_url=https%3A%2F%2Frss.whooshkaa.com%2Frss%2Fpodcast%2Fid%2F904',
                      },
                    });
                    setGlobalVariableValue({
                      key: 'GooglePod',
                      value:
                        'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3Mud2hvb3Noa2FhLmNvbS9yc3MvcG9kY2FzdC9pZC85MDQ',
                    });
                    setGlobalVariableValue({
                      key: 'SpotifyPod',
                      value:
                        'https://open.spotify.com/show/1dyWrsfNO8IxRE7uXjEihQ',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Image
                  style={styles.ImageGb}
                  source={{
                    uri: 'https://images.whooshkaa.com/podcasts/podcast_904/podcast_media/3c471b-tbtt-new-thumb-option2.png',
                  }}
                  resizeMode={'cover'}
                />
              </Touchable>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageVh: {
    width: 180,
    height: 45,
    marginTop: 40,
    marginLeft: 10,
  },
  Text_3w: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 22,
  },
  TextE4: {
    marginTop: 8,
  },
  ViewMX: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  ImageBackground_6L: {
    width: '100%',
    height: 300,
    justifyContent: 'space-between',
  },
  ViewaB: {
    width: '100%',
  },
  ImageBackgroundZK: {
    height: 300,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  FetchCl: {
    minHeight: 40,
  },
  FlatListAt: {
    width: '100%',
  },
  FlatListAtContent: {
    flex: 1,
  },
  FetchAL: {
    minHeight: 40,
  },
  ViewFu: {
    width: '100%',
  },
  TextY0: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 16,
  },
  TextnG: {
    paddingRight: 8,
    paddingLeft: 8,
    fontFamily: 'PoppinsSemiBold',
  },
  TouchableQ9: {
    marginRight: 8,
  },
  Viewld: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextoE: {
    textAlign: 'left',
    fontFamily: 'System',
    fontWeight: '600',
    alignSelf: 'flex-start',
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 10,
    marginBottom: 0,
    paddingBottom: 8,
    paddingTop: 16,
  },
  Textiu: {
    marginLeft: 16,
    marginBottom: 8,
  },
  ViewQr: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    maxWidth: 320,
    minWidth: 320,
  },
  ImageBackgroundnx: {
    height: 230,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  ImageBackgroundue: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    height: 230,
    opacity: 1,
  },
  FetchZT: {
    minHeight: 40,
  },
  Vieway: {
    flexDirection: 'row',
    marginRight: 16,
    overflow: 'hidden',
  },
  FlatListayContent: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  ScrollViewOaContent: {
    marginLeft: 16,
  },
  Fetch_4i: {
    minHeight: 40,
  },
  View_08: {
    marginTop: 8,
  },
  TextL1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  TextVo: {
    paddingRight: 8,
    paddingLeft: 8,
    fontFamily: 'PoppinsSemiBold',
  },
  Touchableck: {
    marginRight: 8,
  },
  Viewzb: {
    alignItems: 'center',
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text_8c: {
    textAlign: 'left',
    fontFamily: 'System',
    fontWeight: '600',
    alignSelf: 'flex-start',
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 10,
    marginBottom: 0,
    paddingBottom: 8,
    paddingTop: 16,
  },
  Textya: {
    marginLeft: 16,
    marginBottom: 8,
  },
  ViewkV: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: 320,
    minWidth: 320,
  },
  ImageBackground_27: {
    height: 230,
    justifyContent: 'flex-end',
    opacity: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  ImageBackgroundO1: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    height: 230,
    opacity: 1,
  },
  Fetch_1z: {
    minHeight: 40,
  },
  ViewoO: {
    flexDirection: 'row',
    marginRight: 16,
    overflow: 'hidden',
  },
  FlatListPeContent: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ScrollViewS6Content: {
    marginLeft: 16,
  },
  Fetchbi: {
    minHeight: 40,
  },
  ViewPR: {
    marginTop: 8,
  },
  TextEj: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  Textbb: {
    paddingRight: 8,
    paddingLeft: 8,
    fontFamily: 'PoppinsSemiBold',
  },
  TouchableRz: {
    marginRight: 8,
  },
  ViewBN: {
    alignItems: 'center',
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextUS: {
    textAlign: 'left',
    fontFamily: 'System',
    fontWeight: '600',
    alignSelf: 'flex-start',
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 10,
    marginBottom: 0,
    paddingBottom: 8,
    paddingTop: 16,
  },
  TextUa: {
    marginLeft: 16,
    marginBottom: 8,
  },
  View_8W: {
    flexWrap: 'wrap',
    maxWidth: 320,
    minWidth: 320,
  },
  ImageBackground_1F: {
    height: 230,
    justifyContent: 'flex-end',
  },
  ImageBackgroundzs: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    height: 230,
    opacity: 1,
  },
  Fetch_6t: {
    minHeight: 40,
  },
  View_2x: {
    flexDirection: 'row',
    marginRight: 16,
    overflow: 'hidden',
  },
  FlatListN6Content: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ScrollViewitContent: {
    marginLeft: 16,
  },
  FetchlH: {
    minHeight: 40,
  },
  ViewAb: {
    marginTop: 8,
    marginBottom: 16,
  },
  TextYs: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  Viewz0: {
    alignItems: 'center',
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageDD: {
    width: 230,
    height: 230,
  },
  ViewAL: {
    height: 230,
    overflow: 'hidden',
    marginRight: 16,
  },
  ImageuZ: {
    width: 230,
    height: 230,
  },
  ViewKB: {
    height: 230,
    overflow: 'hidden',
    marginRight: 16,
  },
  ImageDv: {
    width: 230,
    height: 230,
  },
  ViewLJ: {
    height: 230,
    overflow: 'hidden',
    marginRight: 16,
  },
  ImageGb: {
    width: 230,
    height: 230,
  },
  ViewWf: {
    height: 230,
    overflow: 'hidden',
    marginRight: 16,
  },
  ScrollView_8EContent: {
    marginLeft: 16,
    paddingRight: 8,
  },
  ViewT9: {
    marginBottom: 16,
  },
  ScrollViewsB: {
    width: '100%',
  },
});

export default withTheme(EFTMScreen);
