import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
import { tuple } from "../../utils";
import { ContentOrderedList } from "./content-ordered-list";

export const CONTENT_DEFAULTS = {
  sizes: tuple("small", "medium", "large"),
};

export interface ContentVariablesOverrides {}

export interface ContentVariablesDefaults {
  sizes: (typeof CONTENT_DEFAULTS["sizes"])[number];
}

export type ContentVariables = Prefer<
  ContentVariablesOverrides,
  ContentVariablesDefaults
>;

export type ContentModifierProps = Partial<{
  size: ContentVariables["sizes"];
}>;

export type ContentOwnProps = HelpersProps & ContentModifierProps;
export type ContentForwardsProps = { className: string };

export const Content = Object.assign(
  forwardRefAs<"div", ContentOwnProps, ContentForwardsProps>(
    ({ className, size, ...rest }, ref) => (
      <Generic
        className={classNames("content", { [`is-${size}`]: size }, className)}
        ref={ref}
        {...rest}
      />
    ),
    { as: "div" },
  ),
  { OrderedList: ContentOrderedList },
);

Content.displayName = "Content";
Content.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
