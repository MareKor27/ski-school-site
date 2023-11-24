import { ReactNode } from "react";
import style from "~/components/textbox/TextBox.module.css";
import useStyles from "~/hooks/useStyle";

type TextBoxType = {
  children: ReactNode;
  type?: string;
};

export function TextBox({ children, type = "text-left" }: TextBoxType) {
  const s = useStyles(style);
  return <div className={s(`text-box ${type}`)}>{children}</div>;
}
