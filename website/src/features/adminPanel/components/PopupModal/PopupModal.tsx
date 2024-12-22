import { ReactNode } from "react";
import style2 from "./PopupModal.module.scss";
import useStyles from "~/hooks/useStyle";

type PopupModalType = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export function PopupModal({ open, children, onClose }: PopupModalType) {
  const s2 = useStyles(style2);
  if (!open) {
    return null;
  }
  return (
    <div className={s2(`popup-modal`)}>
      <div>
        <span onClick={onClose}>&times;</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
