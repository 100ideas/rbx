import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
import { tuple } from "../../utils";

export const DELETE_DEFAULTS = {
  sizes: tuple("small", "medium", "large"),
};

export interface DeleteVariablesOverrides {}

export interface DeleteVariablesDefaults {
  sizes: (typeof DELETE_DEFAULTS["sizes"])[number];
}

export type DeleteVariables = Prefer<
  DeleteVariablesOverrides,
  DeleteVariablesDefaults
>;

export type DeleteModifierProps = Partial<{
  size: DeleteVariables["sizes"];
}>;

export type DeleteOwnProps = HelpersProps & DeleteModifierProps;
export type DeleteForwardsProps = { className: string };

export const Delete = forwardRefAs<"a", DeleteOwnProps, DeleteForwardsProps>(
  ({ className, size, ...rest }, ref) => (
    <Generic
      className={classNames("delete", { [`is-${size}`]: size }, className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "a" },
);

Delete.displayName = "Delete";
Delete.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
