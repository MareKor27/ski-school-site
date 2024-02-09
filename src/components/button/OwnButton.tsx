import { Link } from "react-router-dom";
import style from "~/components/button/OwnButton.module.scss";

type OwnButton = {
  to: string;
  text: string;
};

export function OwnButton({ to, text }: OwnButton) {
  return (
    <Link className={style["linked-button"]} to={to}>
      {text}
    </Link>
  );
}
