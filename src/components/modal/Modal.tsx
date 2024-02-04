import { ReactNode } from "react";
import style2 from "~/components/gallery/Gallery.module.css";
import useStyles from "~/hooks/useStyle";

type ModalType = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({ open, children, onClose }: ModalType) => {
  const s2 = useStyles(style2);
  if (!open) {
    return null;
  }
  return (
    <div className={s2(`popup-image`)}>
      <div>
        <span onClick={onClose}>&times;</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
