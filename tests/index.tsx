import React from "react";
import { Text } from "react-native";
import useDimensions, {
  useScreenDimensions,
  useWindowDimensions,
} from "../src";

import renderer from "react-test-renderer";

jest.useFakeTimers();

const ScreenDimensions: React.FC = () => {
  const { height, width } = useScreenDimensions();
  const isLandscape = width > height;
  return (
    <Text>
      {width}x{height}
      Orientation: {isLandscape ? "Landscape" : "Portrait"}
    </Text>
  );
};

const WindowDimensions: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <Text>
      {width}x{height}
      Orientation: {isLandscape ? "Landscape" : "Portrait"}
    </Text>
  );
};

const BothDimensions: React.FC = () => {
  const { screen, window } = useDimensions();
  return (
    <Text>
      Screen: {screen.width}x{screen.height}
      Window: {window.width}x{window.height}
    </Text>
  );
};

beforeAll(() => {
  // For accurrate test times
  const Fragment: React.FC = () => (
    <>
      <ScreenDimensions />
      <WindowDimensions />
      <BothDimensions />
    </>
  );
  renderer.create(<Fragment />).toJSON();
});

test("Screen", () => {
  const tree = renderer.create(<ScreenDimensions />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
        <Text>
          750
          x
          1334
          Orientation: 
          Portrait
        </Text>
    `);
});

test("Window", () => {
  const tree = renderer.create(<WindowDimensions />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
        <Text>
          750
          x
          1334
          Orientation: 
          Portrait
        </Text>
    `);
});

test("Both", () => {
  const tree = renderer.create(<BothDimensions />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
        <Text>
          Screen: 
          750
          x
          1334
          Window: 
          750
          x
          1334
        </Text>
    `);
});
