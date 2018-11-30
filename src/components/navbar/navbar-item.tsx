import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/components/exotic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type NavbarItemModifierProps = Partial<{
  active: boolean;
  dropdown: boolean;
  dropdownUp: boolean;
  hoverable: boolean;
}>;

export type NavbarItemProps = ModifierProps & NavbarItemModifierProps;

export const NavbarItem = forwardRefAs<NavbarItemProps, "a">((props, ref) => {
  const {
    as,
    active,
    dropdown,
    dropdownUp,
    hoverable,
    ...rest
  } = transformModifiers(props);
  rest.className = cx("navbar-item", rest.className, {
    "has-dropdown": dropdown,
    "has-dropdown-up": dropdownUp,
    "is-active": active,
    "is-hoverable": hoverable,
  });

  const asOverride = dropdown && as === "a" ? "span" : as;
  return React.createElement(asOverride!, { ref, ...rest });
}, "a");

NavbarItem.defaultProps = Object.assign(
  {
    active: false,
    dropdown: false,
    dropdownUp: false,
    hoverable: false,
  },
  NavbarItem.defaultProps,
);
