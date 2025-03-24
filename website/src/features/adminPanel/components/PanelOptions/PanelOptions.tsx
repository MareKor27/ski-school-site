import { useEffect, useState } from "react";
import style from "./PanelOptions.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
export function PanelOptions() {
  const [toggleOptionState, setToggleOptionState] = useState(1);

  const toggleOptionTab = (tabIndex: number) => {
    setToggleOptionState(tabIndex);
  };
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    setDate(newDate);
  }, []);

  return (
    <div className={S(`option`)}>
      <div className={S(`title-tabs`)}>
        <h2 className={S(`title-page`)}>Opcje</h2>
        <div
          className={toggleOptionState === 1 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleOptionTab(1)}
        >
          Opcja 1
        </div>
        <div
          className={toggleOptionState === 2 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleOptionTab(2)}
        >
          Opcja 2
        </div>
        <div
          className={toggleOptionState === 3 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleOptionTab(3)}
        >
          Opcja 3
        </div>
      </div>
      <div className={S(`content-tabs`)}>
        <div
          className={
            toggleOptionState === 1
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          {/* {new Date().toISOString()} */}
          {date.toISOString()}
          {date.toLocaleString()}
        </div>
        <div
          className={
            toggleOptionState === 2
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores nisi voluptas, earum eveniet a magni nulla ex mollitia
          voluptate quas illo saepe, necessitatibus, incidunt commodi fuga totam
          vero dolorem. Dicta quis dolor repellendus. Facilis sit veritatis ad
          placeat ducimus eaque minima, nobis voluptates, similique nesciunt
          voluptatibus cum sequi. Sit autem reprehenderit rem dolorem eum animi
          iusto ipsum repellendus atque. A dolores veritatis repellendus ipsa id
          architecto. Incidunt sapiente aspernatur ipsum neque fugiat commodi,
          ad saepe, veritatis, iste ducimus animi consequuntur corporis ipsa!
          Ducimus, quod! Iusto vitae qui eveniet pariatur.
        </div>
        <div
          className={
            toggleOptionState === 3
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          A dolores veritatis repellendus ipsa id architecto. Incidunt sapiente
          aspernatur ipsum neque fugiat commodi, ad saepe, veritatis, iste
          ducimus animi consequuntur corporis ipsa! Ducimus, quod! Iusto vitae
          qui eveniet pariatur.
        </div>
      </div>
    </div>
  );
}
