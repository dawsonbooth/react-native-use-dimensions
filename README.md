# `react-native-use-dimensions`

[![npm version](http://img.shields.io/npm/v/react-native-use-dimensions.svg?style=flat)](https://npmjs.org/package/react-native-use-dimensions)
[![downloads](http://img.shields.io/npm/dt/react-native-use-dimensions.svg?style=flat)](https://npmjs.org/package/react-native-use-dimensions)

# Description

This Node.js package is a collection of React hooks for using the dimensions of the screen, window, or both.

# Installation

With Node.js installed (https://nodejs.org/en/download/), simply run the following command to add the package to your project.

```bash
npm install react-native-use-dimensions
```

# Usage

The package comes with three hooks:

1. <b>useScreenDimensions</b> - screen dimensions
2. <b>useWindowDimensions</b> - window dimensions, which can be <a href="https://stackoverflow.com/a/44979327/11960129">separate from screen on Android</a>
3. <b>useDimensions</b> - screen and window dimensions

```js
import React from "react";
import { Text } from "react-native";
import useDimensions, {
    useScreenDimensions,
    useWindowDimensions
} from "react-native-use-dimensions";

const ScreenDimensions = () => {
    const { height, width } = useScreenDimensions();
    const isLandscape = width > height;
    return (
        <Text>
            {width}x{height}
            Orientation: {isLandscape ? "Landscape" : "Portrait"}
        </Text>
    );
};

const WindowDimensions = () => {
    const { height, width } = useWindowDimensions();
    const isLandscape = width > height;
    return (
        <Text>
            {width}x{height}
            Orientation: {isLandscape ? "Landscape" : "Portrait"}
        </Text>
    );
};

const BothDimensions = () => {
    const { screen, window } = useDimensions();
    return (
        <Text>
            Screen: {width}x{height}
            Window: {width}x{height}
        </Text>
    );
};
```
