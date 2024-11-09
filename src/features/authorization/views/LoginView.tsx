import { CSSProperties } from "react";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
import style from "./Login.module.scss";

export function LoginView() {
  return (
    <div className={S(`login`)}>
      <section>
        <div className={S(`color`)}></div>
        <div className={S(`color`)}></div>
        <div className={S(`color`)}></div>
        <div className={S(`box`)}>
          <div className={S(`square`)} style={{ "--i": 0 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 1 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 2 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 3 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 4 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`cointainer`)}>
            <div className={S(`form`)}>
              <h2>Figowski Sport</h2>
              <form action="/administrator">
                <div className={S(`inputBox`)}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Nazwa użytkownika"
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input type="password" name="" id="" placeholder="Hasło" />
                </div>
                <div className={S(`inputBox`)}>
                  <input type="submit" name="" id="" value="Login" />
                </div>
                <p className={S(`forget`)}>
                  {" "}
                  Forgot Password? <a href="#">Click Here</a>
                </p>
                <p className={S(`forget`)}>
                  {" "}
                  Don't have account? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
