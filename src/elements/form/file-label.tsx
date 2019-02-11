import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FileLabelProps = HelpersProps;

export const FileLabel = forwardRefAs<"label", FileLabelProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("file-label", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "label" },
);

FileLabel.displayName = "File.Label";
