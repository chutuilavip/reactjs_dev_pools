import React from "react";
import { Button } from "antd";
import { PackageButtonWrapper } from "./styled";

export default function PackageButton({
  children,
  onClick,
  className,
  type,
  disabled,
}) {
  return (
    <PackageButtonWrapper
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </PackageButtonWrapper>
  );
}
