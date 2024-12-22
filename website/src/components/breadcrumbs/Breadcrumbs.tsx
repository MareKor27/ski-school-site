import useStyles from "~/hooks/useStyle";
import style from "~/components/breadcrumbs/Breadcrumbs.module.scss";

type BreadcrumsType = {
  // children: ReactNode;
  // className: string;
  namePage: string;
};

export function Breadcrums({ namePage }: BreadcrumsType) {
  const s = useStyles(style);
  return (
    <div
      className={s(`breadcrumbs`)}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <span
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        <a className={s(`breadcrumbs-links`)} itemProp="item" href="/">
          <span itemProp="name">Strona główna</span>
        </a>
        <meta itemProp="position" content="1" />
      </span>
      <span className={s(`divider`)}> / </span>
      <span itemProp="name">{namePage}</span>
    </div>
  );
}
