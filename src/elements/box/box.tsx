import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type BoxProps = HelpersProps;

export const Box = forwardRefAs<"div", BoxProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("box", className)} ref={ref} {...rest} />
  ),
  { as: "div" },
);

Box.displayName = "Box";
