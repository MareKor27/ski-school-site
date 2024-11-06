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
        <svg width="100px" height="300px" transform="scale(1)">
          <image
            xlinkHref="/images/icons/arrow.svg"
            width="60px"
            height="60px"
          />
        </svg>
      </div>
    </>
  );
}
