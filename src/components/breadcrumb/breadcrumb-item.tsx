import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export interface BreadcrumbItemModifierProps {
  active?: boolean;
}

export type BreadcrumbItemProps = HelpersProps & BreadcrumbItemModifierProps;

export const BreadcrumbItem = forwardRefAs<"a", BreadcrumbItemProps>(
  ({ active, ...rest }, ref) => (
    <li className={classNames({ "is-active": active })}>
      <Generic ref={ref} {...rest} />
    </li>
  ),
  { as: "a" },
);

BreadcrumbItem.displayName = "Breadcrumb.Item";
BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
};
