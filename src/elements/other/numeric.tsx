import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type NumericProps = HelpersProps;

export const Numeric = forwardRefAs<"p", NumericProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("number", className)} ref={ref} {...rest} />
  ),
  { as: "p" },
);

Numeric.displayName = "Numeric";
