import { useState } from "react";
import Modal from "~/components/modal/Modal";
import style2 from "~/components/gallery/Gallery.module.scss";
import useStyles from "~/hooks/useStyle";

type GalleryType = {
  images: string[];
};

export function Gallery({ images }: GalleryType) {
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
        {images.map((image) => (
          <div className={s2(`image`)} key={image}>
            <img
              src={image}
              onClick={() => {
                setActiveImage(image);
              }}
              alt={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
