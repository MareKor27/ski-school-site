import useStyles from "~/hooks/useStyle";
import style from "./OfferBoxCategoryInformation.module.scss";
import { ReactNode } from "react";
const s = useStyles(style);

type CategoryBoxesContenerProps = {
  children: ReactNode;
};

export function CategoryBoxesContener({
  children,
}: CategoryBoxesContenerProps) {
  return <div className={s(`offer-contener`)}>{children}</div>;
}

type SingleCategoryProps = {
  children: ReactNode;
};

export function CategoryBox({ children }: SingleCategoryProps) {
  return <div className={s(`offer-box`)}>{children}</div>;
}

type CategoryIconProps = {
  children: ReactNode;
};

export function CategoryIcon({ children }: CategoryIconProps) {
  return <div className={s(`offer-box-icon`)}>{children}</div>;
}

type CategoryDescriptionProps = {
  title: string;
  children: ReactNode;
};

export function CategoryDescription({
  title,
  children,
}: CategoryDescriptionProps) {
  return (
    <div>
      <h4>{title}</h4>
      <div className={s(`offer-box-content`)}>{children}</div>
    </div>
  );
}

export function SitnLogos() {
  return (
    <div className={s(`offer-sitn-logos`)}>
      <img
        className={s(`offer-sitn-logo`)}
        src="/images/licenses/sitnus-logo.png"
        alt=""
      />
      <img
        className={s(`offer-sitn-logo`)}
        src="/images/licenses/sitn-25-26.png"
        alt=""
      />
      <img
        className={s(`offer-sitn-logo`)}
        src="/images/licenses/sitn-logo.png"
        alt=""
      />
    </div>
  );
}
