import { useState } from "react";
import Modal from "~/components/modal/Modal";
import style2 from "~/components/gallery/Gallery.module.scss";
import useStyles from "~/hooks/useStyle";

type GalleryType = {
  photos: {
    url: string;
    alt: string;
  }[];
};

export function Gallery({ photos }: GalleryType) {
  const s2 = useStyles(style2);
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
