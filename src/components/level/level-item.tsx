import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
import { tuple } from "../../utils";

export const LEVEL_ITEM_DEFAULTS = {
  alignments: tuple("left", "right"),
};

export interface LevelItemVariablesOverrides {}

export interface LevelItemVariablesDefaults {
  alignments: (typeof LEVEL_ITEM_DEFAULTS["alignments"])[number];
}

export type LevelItemVariables = Prefer<
  LevelItemVariablesOverrides,
  LevelItemVariablesDefaults
>;

export type LevelItemModifierProps = Partial<{
  align: LevelItemVariables["alignments"];
}>;

export type LevelItemOwnProps = HelpersProps & LevelItemModifierProps;
export type LevelItemForwardsProps = {
  className: string;
};

export const LevelItem = forwardRefAs<
  "div",
  LevelItemOwnProps,
  LevelItemForwardsProps
>(
  ({ align, className, ...rest }, ref) => (
    <Generic
      className={classNames(
        {
          "level-item": align === undefined,
          [`level-${align}`]: align,
        },
        className,
      )}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

LevelItem.displayName = "Level.Item";
LevelItem.propTypes = {
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
