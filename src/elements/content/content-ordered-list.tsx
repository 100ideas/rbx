import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
import { tuple } from "../../utils";
import { ContentOrderedListItem } from "./content-ordered-list-item";

export const CONTENT_ORDERED_LIST_DEFAULTS = {
  types: tuple("lower-alpha", "lower-roman", "upper-alpha", "upper-roman"),
};

export interface ContentOrderedListVariablesOverrides {}

export interface ContentOrderedListVariablesDefaults {
  types: (typeof CONTENT_ORDERED_LIST_DEFAULTS["types"])[number];
}

export type ContentOrderedListVariables = Prefer<
  ContentOrderedListVariablesOverrides,
  ContentOrderedListVariablesDefaults
>;

export type ContentOrderedListModifierProps = Partial<{
  type: ContentOrderedListVariables["types"]; // tslint:disable-line:no-reserved-keywords
}>;

export type ContentOrderedListProps = HelpersProps &
  ContentOrderedListModifierProps;

export const ContentOrderedList = Object.assign(
  forwardRefAs<ContentOrderedListProps>(
    ({ className, type, ...rest }, ref) => (
      <Generic
        className={classNames({ [`is-${type}`]: type }, className)}
        ref={ref}
        {...rest}
      />
    ),
    { as: "ol" },
  ),
  { Item: ContentOrderedListItem },
);

ContentOrderedList.displayName = "Content.OrderedList";
ContentOrderedList.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
