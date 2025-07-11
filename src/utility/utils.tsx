import React from "react";

export function extractText(children: React.ReactNode): string {
  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }
  if (typeof children === "string") return children;
  if (typeof children === "number") return children.toString();
  if (React.isValidElement(children)) {
    return extractText(children.props.children);
  }
  return "";
}
