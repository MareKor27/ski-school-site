import { useState } from "react";
import Modal from "~/components/modal/Modal";
import style2 from "~/components/gallery/Gallery.module.scss";
import useStyles from "~/hooks/useStyle";
import gallery from "~/data/gallery.json";

type GalleryType = {
  galeryName: string;
};

type PhotosType = {
  url: string;
  alt: string;
}[];

export function Gallery({ galeryName }: GalleryType) {
  const s2 = useStyles(style2);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const photos: PhotosType = gallery.filter(
    (img) => img.gallery === galeryName
  );
  const closeModal = () => {
    setActiveImage(null);
  };

  return (
    <div className={s2(`gallery-conteiner`)}>
      <Modal open={activeImage !== null} onClose={closeModal}>
        {!!activeImage && <img src={activeImage} />}
      </Modal>
      <div className={s2(`image-container`)}>
        {photos.map((image) => (
          <div className={s2(`image`)} key={image.url}>
            <img
              src={image.url}
              loading="lazy"
              onClick={() => {
                setActiveImage(image.url);
              }}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
