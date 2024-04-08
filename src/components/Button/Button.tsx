import { FC, PropsWithChildren } from "react";

type ButtonProps = {
  /** スタイル */
  style: "filled" | "outlined";
  /** 角丸にするか */
  rounded: boolean;
};

const BUTTON_COLOR = "#30F5C6";

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  style,
  rounded,
  children,
}) => {
  return (
    <button
      style={{
        backgroundColor: style === "filled" ? BUTTON_COLOR : "#fff",
        color: "black",
        padding: "10px",
        width: "80px",
        border: style === "outlined" ? `1px solid ${BUTTON_COLOR}` : "none",
        borderRadius: rounded ? "16px" : "0",
      }}
    >
      {children}
    </button>
  );
};
