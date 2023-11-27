import { ReactNode } from "react";
import style from "~/components/textbox/TextBox.module.css";
import useStyles from "~/hooks/useStyle";

type TextBoxType = {
  children: ReactNode;
  className?: string;
};

export function TextBox({ children, className = "text-left" }: TextBoxType) {
  const s = useStyles(style);
  return <div className={s(`text-box ${className}`)}>{children}</div>;
}
