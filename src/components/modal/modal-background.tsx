import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { ModalContext, ModalContextValue } from "./modal-context";

export type ModalBackgroundModifierProps = Partial<{
  onClick: React.MouseEventHandler;
}>;

export type ModalBackgroundProps = HelpersProps & ModalBackgroundModifierProps;

const onClickHandler = (
  onClick: ModalBackgroundProps["onClick"],
  ctx: ModalContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  if (ctx.closeOnBlur) {
    ctx.close();
  }
};

export const ModalBackground = forwardRefAs<ModalBackgroundProps>(
  ({ className, onClick, ...rest }, ref) => (
    <ModalContext.Consumer>
      {ctx => {
        const htmlProps = {
          onClick: onClickHandler(onClick, ctx),
          role: "presentation",
        };

        return (
          <Generic
            className={classNames("modal-background", className)}
            ref={ref}
            {...htmlProps}
            {...rest}
          />
        );
      }}
    </ModalContext.Consumer>
  ),
  { as: "div" },
);

ModalBackground.displayName = "Modal.Background";
ModalBackground.propTypes = {
  onClick: PropTypes.func,
};
