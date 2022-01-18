import React from 'react';
import * as EFTMPodcastsRSSToJSONApi from '../apis/EFTMPodcastsRSSToJSONApi.js';
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

const PodcastHostProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={false}>
      <ImageBackground style={styles.ImageBackgroundgA} resizeMode={'cover'}>
        <ScrollView
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <EFTMPodcastsRSSToJSONApi.FetchGetEFTMPodcastEpisodesGET>
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
                <View style={styles.Viewii}>
                  <View style={styles.Viewbe}>
                    <Image
                      style={[
                        styles.Imageaf,
                        { borderRadius: theme.roundness },
                      ]}
                      resizeMode={'contain'}
                      source={{ uri: `${fetchData?.feed?.image}}` }}
                    />
                    <View style={styles.ViewAQ}>
                      <Text style={[theme.typography.headline5, styles.Textuk]}>
                        {fetchData?.feed?.title}
                      </Text>

                      <Text style={[theme.typography.body1, styles.TextS9]}>
                        {fetchData?.feed?.author}
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
                          style={styles.IconButtonDg}
                          icon={'Entypo/spotify'}
                          size={32}
                          color={theme.colors.custom_rgb27_215_96}
                        />
                        <Touchable
                          onPress={() => {
                            try {
                              Linking.openURL(
                                'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3Mud2hvb3Noa2FhLmNvbS9yc3MvcG9kY2FzdC9pZC85MDI'
                              );
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
                    style={[
                      theme.typography.headline4,
                      styles.Text_3w,
                      { color: theme.colors.strong },
                    ]}
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
            <Text
              style={[
                theme.typography.headline4,
                styles.TextMq,
                { color: theme.colors.strong },
              ]}
            >
              {'Episodes'}
            </Text>
          </View>

          <EFTMPodcastsRSSToJSONApi.FetchGetEFTMPodcastEpisodesGET>
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
                            theme.typography.subtitle1,
                            styles.TextyM,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {listData?.title}
                        </Text>

                        <View style={styles.Viewhd}>
                          <AudioPlayer
                            style={styles.AudioPlayerr2}
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
  Imageaf: {
    height: 155,
    width: 155,
  },
  Textuk: {
    width: '100%',
    textAlign: 'left',
    marginLeft: 16,
    alignSelf: 'flex-start',
  },
  TextS9: {
    width: '100%',
    textAlign: 'left',
    marginLeft: 16,
  },
  IconButtonDg: {
    marginLeft: 16,
    marginTop: 30,
  },
  Imagerb: {
    width: 32,
    height: 32,
  },
  TouchableZv: {
    width: 32,
    height: 32,
    marginTop: 30,
    marginLeft: 16,
  },
  ViewM1: {
    flexDirection: 'row',
  },
  ViewAQ: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: 200,
  },
  Viewbe: {
    flexDirection: 'row',
  },
  Text_3w: {
    marginTop: 30,
  },
  TextI8: {
    marginTop: 10,
  },
  Viewii: {
    marginLeft: 20,
    marginTop: 20,
  },
  TextMq: {
    marginTop: 30,
  },
  ViewR9: {
    marginLeft: 20,
  },
  TextyM: {
    marginTop: 10,
    textAlign: 'left',
  },
  AudioPlayerr2: {
    alignItems: 'center',
  },
  Viewhd: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
  },
  ViewxZ: {
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
  },
  ImageBackgroundgA: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(PodcastHostProfileScreen);
