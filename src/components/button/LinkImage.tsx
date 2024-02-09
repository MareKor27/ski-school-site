import { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "~/components/button/LinkImage.module.scss";
import useStyles from "~/hooks/useStyle";

type LinkImage = {
  to: string;
  className: string;
  children: ReactNode;
};

export function LinkImage({ to, className, children }: LinkImage) {
  const s = useStyles(style);
  return (
    <Link className={s(`${className}`)} to={to}>
      {children}
    </Link>
  );
}

export default LinkImage;
