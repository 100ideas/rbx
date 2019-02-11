import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PanelHeadingProps = HelpersProps;

export const PanelHeading = forwardRefAs<"div", PanelHeadingProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("panel-heading", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

PanelHeading.displayName = "Panel.Heading";
