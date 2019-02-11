import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type CardHeaderIconProps = HelpersProps;

export const CardHeaderIcon = forwardRefAs<"div", CardHeaderIconProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("card-header-icon", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

CardHeaderIcon.displayName = "Card.Header.Icon";
