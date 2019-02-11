import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
import { tuple } from "../../utils";

export const TILE_DEFAULTS = {
  kinds: tuple("ancestor", "parent", "child"),
  sizes: tuple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12),
};

export interface TileVariablesOverrides {}

export interface TileVariablesDefaults {
  kinds: (typeof TILE_DEFAULTS["kinds"])[number];
  sizes: (typeof TILE_DEFAULTS["sizes"])[number];
}

export type TileVariables = Prefer<
  TileVariablesOverrides,
  TileVariablesDefaults
>;

export type TileModifierProps = Partial<{
  kind: TileVariables["kinds"];
  size: TileVariables["sizes"];
  vertical: boolean;
}>;

export type TileOwnProps = HelpersProps & TileModifierProps;
export type TileForwardsProps = { className: string };

export const Tile = forwardRefAs<"div", TileOwnProps, TileForwardsProps>(
  ({ className, kind, size, vertical, ...rest }, ref) => (
    <Generic
      className={classNames(
        "tile",
        {
          [`is-${kind}`]: kind,
          [`is-${size}`]: size !== undefined,
          "is-vertical": vertical,
        },
        className,
      )}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

Tile.displayName = "Tile";
Tile.propTypes = {
  kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vertical: PropTypes.bool,
};
