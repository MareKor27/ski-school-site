import useStyles from "~/hooks/useStyle";
import style from "./Loading.module.scss";

export function Loading() {
  const S = useStyles(style);
  return (
    <div className={S(`loading-page-container`)}>
      <div className={S(`loader`)}>
        <img
          src="/images/logo-biale-2.webp"
          alt={"Logo FigowSki Sport"}
          className={S(`loading-logo`)}
        />
        <svg>
          <rect>x</rect>
        </svg>
        <p className={S(`loading-text`)}>ŁADOWANIE</p>
      </div>
    </div>
  );
}
