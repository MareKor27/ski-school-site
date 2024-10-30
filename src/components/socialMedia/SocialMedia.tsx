import style from "~/components/socialMedia/SocialMedia.module.scss";
import useStyles from "~/hooks/useStyle";
import LinkImage from "../button/LinkImage";

export function SocialMedia() {
  const s = useStyles(style);
  return (
    <div className={s(`social-media`)}>
      <LinkImage
        to={"https://www.facebook.com/"}
        className={""}
        target={"_blank"}
      >
        <img src="/images/icons/icon-facebook.webp" alt={"Ikona Facebook"} />
      </LinkImage>
      <LinkImage
        to={"https://www.instagram.com/"}
        className={""}
        target={"_blank"}
      >
        <img src="/images/icons/icon-ig.webp" alt={"Ikona Instagram"} />
      </LinkImage>
    </div>
  );
}
