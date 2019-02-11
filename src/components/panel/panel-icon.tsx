import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PanelIconProps = HelpersProps;

export const PanelIcon = forwardRefAs<"span", PanelIconProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("panel-icon", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "span" },
);

PanelIcon.displayName = "Panel.Icon";
