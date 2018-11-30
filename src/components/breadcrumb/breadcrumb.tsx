import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/components/exotic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export interface BreadcrumbItemProps {
  url: string;
  active?: boolean;
  name?: React.ReactNode;
}

export type BreadcrumbModifierProps = Partial<{
  align: "right" | "center";
  className: string;
  hrefAttr: string;
  items: BreadcrumbItemProps[];
  separator: "arrow" | "bullet" | "dot" | "succeeds";
  size: "small" | "medium" | "large";
}>;

export type BreadcrumbProps = Prefer<
  ModifierProps & BreadcrumbModifierProps,
  React.HTMLAttributes<HTMLElement>
>;

// TODO: should split up Breadcrumb -> Breadcrumb & BreadcrumbItem
// this is because the `ref` is passed down to the breadcrumb container
// but the `as` is passed to the bredcrumb item.
// Ergo: the type system expects `as` to be compatible with the `Ref<type>`,
// but it won't be. (the item defaults to an <a>, and the container is fixed as
// a<nav>)
export const Breadcrumb = forwardRefAs<BreadcrumbProps, "a">((props, ref) => {
  const {
    align,
    as,
    hrefAttr,
    items,
    separator,
    size,
    ...rest
  } = transformModifiers(props);
  rest.className = cx("breadcrumb", rest.className, {
    [`has-${separator}-separator`]: separator,
    [`is-${align}`]: align,
    [`is-${size}`]: size,
  });

  return (
    <nav {...rest} ref={ref}>
      <ul>
        {items!.map(item => {
          const itemProps: { [s: string]: BreadcrumbItemProps["url"] } = {};
          if (as === "a") {
            itemProps.href = item.url;
          } else if (typeof hrefAttr === "string") {
            itemProps[hrefAttr] = item.url;
          }
          return (
            <li key={item.url} className={cx({ "is-active": item.active })}>
              {React.createElement(as!, itemProps, item.name)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}, "a");

Breadcrumb.defaultProps = Object.assign({ items: [] }, Breadcrumb.defaultProps);
