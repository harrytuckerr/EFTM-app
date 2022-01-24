# EFTM Android (React Native) app

## Requirements
- [Node.js LTS release](https://nodejs.org/en/). As of 07/21 this is 14.17+
- [Expo CLI](https://docs.expo.io/get-started/installation)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS users
- [Yarn](https://classic.yarnpkg.com/en/docs/install) use this over `npm install` when installing dependencies


## Installing Node.js

You can install Node by going to the [website directly](https://nodejs.org/en/) and clicking the side that says "Recommended For Most Users". This will guide you through the process. 

Once Node has been installed, run the following on the command line to make sure
it's been installed correctly:

```
$ node -v
```

If you see the current version of Node in response, you've successfully
installed Node on your machine.

For example,

```
$ node -v
v14.17.3
```

## Installing Expo CLI

You can install the Expo CLI using the following command. *This is the one spot where npm install is required!*

```
$ npm install -g expo-cli
```


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

