import style from "~/components/goToTop/GoToTop.module.scss";

export function GoToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={style["gototop"]} onClick={scrollToTop}>
        <img src="/images/icons/go-to-top.webp" alt={"Ikona GoToTop"} />
      </div>
    </>
  );
}
