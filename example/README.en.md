# React Native - First project

[React Native](https://facebook.github.io/react-native) is a framework for building native mobile apps using [React](https://facebook.github.io/react)

## Prerequisites
As React Native builds truly native apps, you will need to install the SDKs and Tools required by each environment (iOS/Android) you want to use.

**Don't worry!**
React Native docs have a detailed step-by-step guide you can follow to get started.

**_Start with the [Required Prerequisites](https://facebook.github.io/react-native/docs/getting-started.html#required-prerequisites)_** for your very first project and once you got it running then go for the _**[Recommended Installs](https://facebook.github.io/react-native/docs/getting-started.html#highly-recommended-installs)**_.

## Demo
### Step 1 - Init
Assuming you followed the above mentioned steps, run from your terminal
```
react-native init MeetupBA
```
This command generates the project folder structure inside **MeetupBA** folder and installs **react** and **react-native** as project dependencies from npm.

> **Hint:** see the folder structure and will notice one folder for the **Android** project and another for the **iOS** project.
Both are functional projects that can be imported and built from Android Studio and XCode.

### Step 2 - Run
Once successfully created, you should see this in your terminal. Just follow the instructions to run the project.

![Post Init](./doc-images/post-init.png)

What `react-native run-ios` (or `run-android`) command does are three things:
- Launches in a new terminal a **packager** that will bundle all the JS files and serve that bundle to the app
- Builds the native project into an installable app
- Installs that app in your device/emulator

Notice that the first time you build the app it will take much more time than subsequents builds.

### Step 3 - Code
Now we now the project is working we can start coding.
[Enable Live Reload](#enabling-live-reload) and then edit the file `index.ios.js` (or `index.android.js` for Android) to see how the app is reloaded automatically.

### Step 4 - Using an existing project
You already know how to create, build, install and edit a React Native project from scratch.
Now you should try cloning and running an existing project.

First clone this repo which has a simple example app
```
git clone git@github.com:ReactJS-BA/meetup-2016-06-08.git MeetupReact
```

Then move to the project folder and install the project dependencies
```
cd MeetupReact/example
npm install
```

Now run the app
```
react-native run-ios
# or for Android
react-native run-android
```

## Notes
#### Enabling Live Reload
1. Access to the **_Dev menu_**
  - On iOS press **⌘+D**
  - On Android device shake it or press the menu button
  - On Android simulator press **F2** or **Page Up**
  - On Genymotion press **⌘+M**
2. Then select **_Enable Live Reload_** option

#### What React Native differs from React?
React Native **uses** React
- **Target**: Obviously, the target is mobile and not web. This way the result is an installable mobile app and not a web app.
- **Rendering**: React Native render its own components instead of html elements (`<View>`, `<Text>`, `<Image>` instead of `<div>`, `<span>`, `<img>`)
- **Bundling**: React Native bundles the JS code using its own [**Packager**](#packager). You don't need to use any external tool like grunt, gulp, webpack or browserify.
- **Multi-platform**: Thanks to the packager React Native allows to have different files for each platform but sharing the rest of the codebase.


#### Packager
React Native has a Packager that bundles and serves the JS code depending on the following variables
- `platform`: it will bundle only the **.ios.js** or **.android.js** (altogether with the shared **.js**) files depending on this parameter
- `dev`: if **true** will show the warning and error messages
- `hot`: must be **true** to support Hot Reloading
- `minify`: if **true** the code will be minified

The best part is React Native apps take advantage of the Packager enabling features like **Live Reload** and **Hot Reloading**.
