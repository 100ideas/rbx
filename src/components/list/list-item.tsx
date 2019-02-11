import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ListItemModifierProps = Partial<{
  active: boolean;
}>;

export type ListItemOwnProps = HelpersProps & ListItemModifierProps;
export type ListItemForwardsProps = {
  className: string;
};

export const ListItem = forwardRefAs<
  "a",
  ListItemOwnProps,
  ListItemForwardsProps
>(
  ({ active, className, ...rest }, ref) => (
    <Generic
      className={classNames("list-item", { "is-active": active }, className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "a" },
);

ListItem.displayName = "List.Item";
ListItem.propTypes = {
  active: PropTypes.bool,
};
