import { cx } from "emotion";
import React from "react";

import { asExoticComponent } from "@/components/exotic";
import { ModifierProps, modify } from "@/modifiers";

export type MediaContentProps = ModifierProps;

export const MediaContent = asExoticComponent<MediaContentProps, "div">(
  (props, ref) => {
    const { as, ...rest } = modify(props);
    rest.className = cx("content", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  "div",
);
