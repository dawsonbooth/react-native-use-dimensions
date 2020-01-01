import { useState, useEffect } from "react";
import { Dimensions, ScaledSize } from "react-native";

export const useScreenDimensions = () => {
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

export const useWindowDimensions = () => {
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

const useDimensions = () => {
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
