import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ModalContentProps = HelpersProps;

export const ModalContent = forwardRefAs<"div", ModalContentProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("modal-content", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

ModalContent.displayName = "Modal.Content";
