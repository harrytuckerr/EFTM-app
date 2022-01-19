import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import ArticleListScreen from './screens/ArticleListScreen';
import EFTMIDScreen from './screens/EFTMIDScreen';
import EFTMScreen from './screens/EFTMScreen';
import MagicLinkConfirmationScreen from './screens/MagicLinkConfirmationScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PodcastSeriesPageScreen from './screens/PodcastSeriesPageScreen';
import WidgetsScreen from './screens/WidgetsScreen';
import WinScreen from './screens/WinScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PlaceholderScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ textAlign: 'center' }}>
        Your navigator is missing screens! Add some from the navigators tab on
        the left.
      </Text>
    </View>
  );
}

function HomeArticles() {
  return (
    <Stack.Navigator
      mode="card"
      headerMode="none"
      initialRouteName="EFTMScreen"
      screenOptions={{
        headerTransparent: true,
        gestureEnabled: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen
        name="EFTMScreen"
        component={EFTMScreen}
        options={{ headerTransparent: true, title: 'EFTM' }}
      />
      <Stack.Screen
        name="ArticleListScreen"
        component={ArticleListScreen}
        options={{ headerTransparent: true, title: 'ArticleList' }}
      />
      <Stack.Screen
        name="PodcastSeriesPageScreen"
        component={PodcastSeriesPageScreen}
        options={{ headerTransparent: true, title: 'PodcastSeriesPage' }}
      />
    </Stack.Navigator>
  );
}

function EFTMIDNav() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="EFTMIDScreen"
      screenOptions={{
        headerTransparent: true,
        animationEnabled: true,
      }}
    >
      <Stack.Screen
        name="EFTMIDScreen"
        component={EFTMIDScreen}
        options={{ headerTransparent: true, title: 'EFTM ID' }}
      />
      <Stack.Screen
        name="MagicLinkConfirmationScreen"
        component={MagicLinkConfirmationScreen}
        options={{ headerTransparent: true, title: 'Magic Link Confirmation' }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeArticles"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.strong,
        activeBackgroundColor: theme.colors.background,
        style: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.divider,
        },
      }}
    >
      <Tab.Screen
        name="HomeArticles"
        component={HomeArticles}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/home"
              size={25}
              color={focused ? theme.colors.strong : theme.colors.light}
            />
          ),
          title: 'HomeArticles',
        }}
      />
      <Tab.Screen
        name="EFTMIDNav"
        component={EFTMIDNav}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/happy"
              size={25}
              color={focused ? theme.colors.strong : theme.colors.light}
            />
          ),
          title: 'EFTMIDNav',
        }}
      />
      <Tab.Screen
        name="WidgetsScreen"
        component={WidgetsScreen}
        options={{
          title: 'Widgets',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/widgets"
              size={25}
              color={focused ? theme.colors.strong : theme.colors.light}
            />
          ),
          tabBarLabel: 'Widgets',
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/notification"
              size={25}
              color={focused ? theme.colors.strong : theme.colors.light}
            />
          ),
          tabBarLabel: 'Notifications',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="BottomTabNavigator"
        screenOptions={{
          headerTintColor: theme.colors.strong,
          headerTransparent: true,
          animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="WinScreen"
          component={WinScreen}
          options={{ title: 'Win' }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
