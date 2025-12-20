import style from "~/components/app/PageConteiner.module.scss";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";
import { Background } from "~/features/app/types/FrontendTypes";

type PageContainerType = {
  children: ReactNode;
  background?: Background;
};

export function PageContainer({ children, background }: PageContainerType) {
  const s = useStyles(style);
  const pageStyle: React.CSSProperties = {};

  if (background) {
    if (background.type === "image") {
      pageStyle.backgroundImage = `url(${background.value})`;
    } else if (background.type === "color") {
      pageStyle.backgroundColor = background.value;
    }
  } else {
    pageStyle.backgroundImage = `url(/images/backgroundsite.webp)`;
  }
  return (
    <div className={s(`page-container`)} style={pageStyle}>
      {children}
    </div>
  );
}
