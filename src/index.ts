import { useState, useEffect } from "react";
import { Dimensions, ScaledSize as RNScaledSize } from "react-native";

type ScaledSize = RNScaledSize;

/**
 * Use this hook to access the screen dimensions _only_.
 *
 * ```js
 * const { height, width, fontScale, scale } = useScreenDimensions();
 * ```
 *
 * @returns Object containing screen dimensions
 */
export const useScreenDimensions = (): ScaledSize => {
    const [screen, setScreen] = useState(Dimensions.get("screen"));

    useEffect(() => {
        const onChange = (result: {
            window: ScaledSize;
            screen: ScaledSize;
        }): void => {
            setScreen(result.screen);
        };

        Dimensions.addEventListener("change", onChange);

        return () => Dimensions.removeEventListener("change", onChange);
    });

    return {
        ...screen
    };
};

/**
 * Use this hook to access the window dimensions _only_.
 *
 * This can be useful on Android devices, where the [window has different dimensions than the screen](https://stackoverflow.com/a/44979327/11960129).
 *
 * ```js
 * const { height, width, fontScale, scale } = useWindowDimensions();
 * ```
 *
 * @returns Object containing window dimensions
 */
export const useWindowDimensions = (): ScaledSize => {
    const [window, setWindow] = useState(Dimensions.get("window"));

    useEffect(() => {
        const onChange = (result: {
            window: ScaledSize;
            screen: ScaledSize;
        }): void => {
            setWindow(result.window);
        };

        Dimensions.addEventListener("change", onChange);

        return () => Dimensions.removeEventListener("change", onChange);
    });

    return {
        ...window
    };
};

/**
 * Use this hook to access _both the screen and window dimensions_.
 *
 * ```js
 * const { screen, window } = useScreenDimensions();
 * ```
 *
 * @returns Object containing both screen and window dimensions.
 */
const useDimensions = (): { screen: ScaledSize; window: ScaledSize } => {
    const [screen, setScreen] = useState(Dimensions.get("screen"));
    const [window, setWindow] = useState(Dimensions.get("window"));

    useEffect(() => {
        const onChange = (result: {
            window: ScaledSize;
            screen: ScaledSize;
        }): void => {
            setScreen(result.screen);
            setWindow(result.window);
        };

        Dimensions.addEventListener("change", onChange);

        return () => Dimensions.removeEventListener("change", onChange);
    });

    return {
        screen,
        window
    };
};

export default useDimensions;
