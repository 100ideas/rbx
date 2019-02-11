import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PaginationListProps = HelpersProps;

export const PaginationList = forwardRefAs<"ul", PaginationListProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("pagination-list", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "ul" },
);

PaginationList.displayName = "Pagination.List";
