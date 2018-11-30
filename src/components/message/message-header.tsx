import { cx } from "emotion";
import React from "react";

import { asExoticComponent } from "@/components/exotic";
import { ModifierProps, modify } from "@/modifiers";

export type MessageHeaderProps = ModifierProps;

export const MessageHeader = asExoticComponent<MessageHeaderProps, "div">(
  (props, ref) => {
    const { as, ...rest } = modify(props);
    rest.className = cx("message-header", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  "div",
);
