import { CSSProperties, useState } from "react";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
import style from "./Login.module.scss";
import { useLogin } from "../hooks/useLogin";
import { useSessionStore } from "../store/useSessionStore";

export function LoginView() {
  const { onChangeAccount, loginToSystem, account } = useLogin();
  const token = useSessionStore((state) => state.token);

  const showToken = () => {
    console.log(token);
  };

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
              <form onSubmit={loginToSystem}>
                <div className={S(`inputBox`)}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Adres E-mail"
                    onChange={onChangeAccount}
                    value={account.email}
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Hasło"
                    onChange={onChangeAccount}
                    value={account.password}
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input type="submit" name="" id="login" value={"Login"} />
                </div>
                <p className={S(`forget`)}>
                  {" "}
                  Zapomniałeś hasła?{" "}
                  <a href="#" onClick={showToken}>
                    Kliknij tutaj
                  </a>
                </p>
                <p className={S(`forget`)}>
                  {" "}
                  Nie mawsz konta? <a href="#">Zarejestruj się</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
