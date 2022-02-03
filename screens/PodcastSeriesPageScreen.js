import React from 'react';
import * as EFTMPodcastsRSSToJSONApi from '../apis/EFTMPodcastsRSSToJSONApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  AudioPlayer,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Linking from 'expo-linking';
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

const PodcastSeriesPageScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const convertHTML = copy => {
    {
      return CustomCode.decode(copy).toString();
    }
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <ImageBackground style={styles.ImageBackgroundgA} resizeMode={'cover'}>
        <ScrollView
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <EFTMPodcastsRSSToJSONApi.FetchGetEFTMPodcastEpisodesGET
            whooska={
              props.route?.params?.PodURL ??
              'api.json?rss_url=https%3A%2F%2Frss.whooshkaa.com%2Frss%2Fpodcast%2Fid%2F11663'
            }
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
                  <View style={styles.View_0Q} pointerEvents={'auto'}>
                    <IconButton
                      onPress={() => {
                        try {
                          navigation.goBack();
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      icon={'Ionicons/chevron-back'}
                      size={32}
                      color={theme.colors.strong}
                    />
                  </View>

                  <View style={styles.Viewii}>
                    <View style={styles.Viewbe}>
                      <Image
                        style={[
                          styles.Imageaf,
                          { borderRadius: theme.roundness },
                        ]}
                        resizeMode={'cover'}
                        source={{ uri: `${fetchData?.feed?.image}` }}
                      />
                      <View style={styles.ViewAQ}>
                        <Text style={styles.Textuk}>
                          {fetchData?.feed?.title}
                        </Text>

                        <Text style={styles.TextS9}>
                          {convertHTML(fetchData?.feed?.author)}
                        </Text>

                        <View style={styles.ViewM1} pointerEvents={'auto'}>
                          <IconButton
                            onPress={() => {
                              try {
                                Linking.openURL(`${Constants['SpotifyPod']}`);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            icon={'Entypo/spotify'}
                            size={32}
                            color={theme.colors.custom_rgb27_215_96}
                          />
                          <Touchable
                            onPress={() => {
                              try {
                                Linking.openURL(`${Constants['GooglePod']}`);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.TouchableZv}
                          >
                            <Image
                              style={styles.Imagerb}
                              source={Images.GooglePodcastsIcon}
                              resizeMode={'contain'}
                            />
                          </Touchable>
                        </View>
                      </View>
                    </View>

                    <Text
                      style={[styles.Text_3w, { color: theme.colors.strong }]}
                    >
                      {'Description'}
                    </Text>

                    <Text
                      style={[
                        theme.typography.subtitle1,
                        styles.TextI8,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {fetchData?.feed?.description}
                    </Text>
                  </View>
                </>
              );
            }}
          </EFTMPodcastsRSSToJSONApi.FetchGetEFTMPodcastEpisodesGET>
        </ScrollView>

        <ScrollView
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewR9}>
            <Text style={[styles.TextMq, { color: theme.colors.strong }]}>
              {'Episodes'}
            </Text>
          </View>

          <EFTMPodcastsRSSToJSONApi.FetchGetEFTMPodcastEpisodesGET
            whooska={
              props.route?.params?.PodURL ??
              'api.json?rss_url=https%3A%2F%2Frss.whooshkaa.com%2Frss%2Fpodcast%2Fid%2F11663'
            }
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
                  data={fetchData?.items}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles.ViewxZ}>
                        <Text
                          style={[
                            styles.TextyM,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {listData?.title}
                        </Text>

                        <View style={styles.Viewhd}>
                          <AudioPlayer
                            source={{ uri: `${listData?.enclosure?.link}` }}
                          />
                        </View>
                      </View>
                    );
                  }}
                  numColumns={1}
                />
              );
            }}
          </EFTMPodcastsRSSToJSONApi.FetchGetEFTMPodcastEpisodesGET>
        </ScrollView>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_0Q: {
    alignContent: 'center',
    marginLeft: 16,
    flexDirection: 'row',
  },
  Imageaf: {
    height: 150,
    width: 150,
  },
  Textuk: {
    width: '100%',
    textAlign: 'left',
    marginLeft: 16,
    alignSelf: 'flex-start',
    fontFamily: 'PoppinsBold',
    fontSize: 18,
  },
  TextS9: {
    width: '100%',
    textAlign: 'left',
    marginLeft: 16,
    fontSize: 14,
    fontFamily: 'PoppinsSemiBold',
  },
  Imagerb: {
    width: 32,
    height: 32,
  },
  TouchableZv: {
    width: 32,
    height: 32,
    marginLeft: 16,
  },
  ViewM1: {
    flexDirection: 'row',
    marginLeft: 16,
    marginTop: 16,
  },
  ViewAQ: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: 190,
  },
  Viewbe: {
    flexDirection: 'row',
    marginRight: 20,
  },
  Text_3w: {
    marginTop: 16,
    marginRight: 20,
    fontFamily: 'PoppinsBold',
    fontSize: 20,
  },
  TextI8: {
    marginTop: 10,
    marginRight: 16,
  },
  Viewii: {
    marginLeft: 20,
    marginTop: 20,
  },
  TextMq: {
    marginTop: 16,
    fontFamily: 'PoppinsBold',
    fontSize: 18,
  },
  ViewR9: {
    marginLeft: 20,
  },
  TextyM: {
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'PoppinsSemiBold',
  },
  Viewhd: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
  },
  ViewxZ: {
    marginLeft: 20,
    marginRight: 20,
  },
  ImageBackgroundgA: {
    width: '100%',
    height: '100%',
    marginTop: 16,
  },
});

export default withTheme(PodcastSeriesPageScreen);
