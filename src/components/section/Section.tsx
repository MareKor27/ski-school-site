import style from "~/components/section/Section.module.scss";
import { Contener } from "../contener/Contener";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type SectionType = {
  children: ReactNode;
  size: string;
  type: string;
};

export function Section({ children, size, type }: SectionType) {
  const s = useStyles(style);
  return (
    <div className={s(`section`)}>
      <Contener className={size}>
        <div className={s(`section-type${type}`)}>{children}</div>
      </Contener>
    </div>
  );
}
