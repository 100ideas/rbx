import {
  BUTTON_GROUP_POSITIONS,
  ButtonGroup,
} from "src/elements/button/button-group";

import {
  hasProperties,
  makeGenericHOCShallowWrapperInContextConsumer,
  makeNodeFactory,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
  validateBoolPropType,
  validateOneOfPropType,
} from "src/__tests__/testing";

const COMPONENT = ButtonGroup;
const COMPONENT_NAME = "ButtonGroup";
const DEFAULT_ELEMENT = "div";
const BULMA_CLASS_NAME = "buttons";

const makeNode = makeNodeFactory(COMPONENT);

describe(`${COMPONENT_NAME} component`, () => {
  hasProperties(COMPONENT, {
    defaultProps: { as: DEFAULT_ELEMENT },
  });

  testForwardRefAsExoticComponentIntegration(
    makeNode,
    makeGenericHOCShallowWrapperInContextConsumer,
    DEFAULT_ELEMENT,
    BULMA_CLASS_NAME,
  );

  testThemeIntegration(makeNode, makeGenericHOCShallowWrapperInContextConsumer);

  describe("props", () => {
    const { propTypes } = COMPONENT;

    describe("hasAddons", () => {
      validateBoolPropType(propTypes, "hasAddons");

      [false, true].map(hasAddons => {
        it(`should ${hasAddons ? "" : "not "}have addons`, () => {
          const node = makeNode({ hasAddons });
          const wrapper = makeGenericHOCShallowWrapperInContextConsumer(node);
          expect(wrapper.hasClass("has-addons")).toBe(hasAddons);
        });
      });
    });

    describe("position", () => {
      validateOneOfPropType(propTypes, "position", BUTTON_GROUP_POSITIONS);

      BUTTON_GROUP_POSITIONS.map(position => {
        it(`should be ${position}`, () => {
          const node = makeNode({ position });
          const wrapper = makeGenericHOCShallowWrapperInContextConsumer(node);
          expect(wrapper.hasClass(`is-${position}`)).toBe(true);
        });
      });
    });
  });
});