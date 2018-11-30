import { cx } from "emotion";
import React from "react";

import { asExoticComponent } from "@/components/exotic";
import { ModifierProps, modify } from "@/modifiers";
import { PanelTabsTab } from "./panel-tabs-tab";

export type PanelTabsProps = ModifierProps;

export const PanelTabs = Object.assign(
  asExoticComponent<PanelTabsProps, "div">((props, ref) => {
    const { as, ...rest } = modify(props);
    rest.className = cx("panel-tabs", rest.className);
    return React.createElement(as!, { ref, ...rest });
  }, "div"),
  { Tab: PanelTabsTab },
);
