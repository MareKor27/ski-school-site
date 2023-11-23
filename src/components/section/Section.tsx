import style from "~/components/section/Section.module.css";
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
    <div className={s(`section section-type${type}`)}>
      <div className={s(`section-bg-overlay`)}>
        <Contener size={size}>{children}</Contener>
      </div>
    </div>
  );
}
