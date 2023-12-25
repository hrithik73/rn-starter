## React-Native Starter

![NPM Downloads](https://img.shields.io/npm/dw/@hrithik73/rn-starter)

![Logo](./template/src/assets/images/logo.png)

An opinionated React Native template with commonly used libraries to kickstart your app development.

### Usages

To create a new app using this template, run the following command:

```
npx react-native init MyApp --template @hrithik73/rn-starter
```

Make sure to replace the `MyApp` with your App Name

### Features and Libraries inluded

- React Navigation (V6): Includes Stack and Tab navigation.
- React Native Paper: A Material Design library for React Native
- Redux Toolkit with Thunk: For state management.
- Redux Persist: For persisting data.
- Axios + React Query: For data fetching.
- react-native-vector-icon: Provides a wide range of icons
- React-Hook-Form: For handling forms.
- Absolute Imports for clean code organization.

### Folder Structure

    android                         # android project directory
    ios                             # ios project directory
    src                             # source dirctory
    ├── assets                      # assests used in apps
    ├── components                  # components
    ├── config                      # configuration files
    ├── constants                   # constants used in app
    ├── navigations                 # navigation
    ├── redux                       # redux
    │   └── slice                   # toolkit slices
    │   └── reducer.ts              # root reducer
    │   └── actions.ts              # all the actions are defined here
    │   └── store.ts                # store configuration
    ├── screens                     # screens
    ├── theme                       # theme related stuffs
    ├── types                       # types are defined here
    └── tsconfig.json               # typescript configuration
    └── ...                         # other configuration related files

### Screens

- Login Screen
- SigUp Screen

### TODOs

- [ ] Internationalization (i18n)
