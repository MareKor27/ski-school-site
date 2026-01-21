import useStyles from "~/hooks/useStyle";
import style from "./OfferIntroImage.module.scss";

type OfferIntroProps = {
  srcImage: string;
  altImage: string;
  title: string;
  srcFlagImage: string;
  altFlagImage: string;
  dateOfTheTrip: string;
  description?: string;
};

export function OfferIntroImage({
  srcImage,
  altImage,
  title,
  srcFlagImage,
  altFlagImage,
  dateOfTheTrip,
  description,
}: OfferIntroProps) {
  const s = useStyles(style);
  return (
    <div className={s(`offer-intro`)}>
      <img className={s(`offer-intro-image`)} src={srcImage} alt={altImage} />
      <div className={s(`offer-intro-text`)}>
        <h2>{title}</h2>
        <img className={s(`flag`)} src={srcFlagImage} alt={altFlagImage} />
        <h3>
          Termin: <span>{dateOfTheTrip}</span>
        </h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
