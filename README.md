# EFTM React Native app (Android focused)


## Requirements
- [Node.js LTS release](https://nodejs.org/en/). As of 07/21 this is 14.17+
- [Expo CLI](https://docs.expo.io/get-started/installation)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS users
- [Yarn](https://classic.yarnpkg.com/en/docs/install) use this over `npm install` when installing dependencies

> Only Node.js LTS releases (even-numbered) are recommended. As Node.js [officially states](https://nodejs.org/en/about/releases/), "Production applications should only use Active LTS or Maintenance LTS releases."


## Installing Expo CLI

You can install the Expo CLI using the following command. *This is the one spot where npm install is required!*

```
$ npm install -g expo-cli
```

Verify that the installation was successful by running `expo whoami`. You're not logged in yet, so you will see "Not logged in". You can create an account by running `expo register` if you like, or if you have one already run `expo login`, but you also don't need an account to get started.

[Learn more about Expo CLI here](https://docs.expo.io/get-started/installation/#installing-expo-cli)


## Install Project Dependencies

First, navigate to the project directory. The .zip will likely be in your
downloads folder, so extract the .zip and move it to the desired location
before proceeding.

Now, run the following commands to install the project dependencies (note that
you'll need an internet connection to do so).

```
$ cd Desktop/New-App
$ yarn
```

> The `cd` command above takes you into the project directory so you can install
> the correct dependencies. You should replace `Desktop/New-App` with the actual
> path to your unzipped project folder.

## Running

To start your project, simply run: `yarn start` inside of the project directory
(make sure you've [installed the dependencies
locally](#install-local-dependencies) first). This should open the Expo
developer tools in a browser tab.


## File Structure

```
.
    ├── assets                 # Static assets like images and fonts.
    ├── config                 # JS representation of fonts, images, themes, and more
        └── Themes.js          # Example file for your app's themes
    ├── screens                # React Native code for the screens you built.
    │   └── MyFirstScreen.js   # Example file for the screen named "My First Screen"
    ├── components.js          # All your custom components
    ├── .gitignore             # List of files to ignore when comitting with Git
    ├── App.js                 # Entry point for your app
    ├── app.json               # Configuration file for your app, used by Expo
    ├── AppNavigator.js        # Code for your app's navigators
    ├── package.json           # The metadata for your project, including dependencies
    └── README.md              # This file!
```


