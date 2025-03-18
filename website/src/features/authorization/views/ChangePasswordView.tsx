import { CSSProperties } from "react";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
import style from "./Login.module.scss";
import { useChangePassword } from "../hooks/useChangePassword";
import { Navigate, useParams } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";

export function ChangePasswordView() {
  const params = useParams();
  const token = String(params.token);

  const { onChangePasswords, changePasswordOnSubmit, passwords } =
    useChangePassword(token);

  if (!token) {
    return <Navigate to={Paths.ADMIN.LOGIN.absolute} replace />;
  }

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
              <h2>Figowski Sport Zmiana Hasła</h2>
              <form onSubmit={changePasswordOnSubmit}>
                <div className={S(`inputBox`)}>
                  <input
                    type="password"
                    name="firstPassword"
                    id="firstPassword"
                    placeholder="Wpisz Hasło"
                    onChange={onChangePasswords}
                    value={passwords.firstPassword}
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input
                    type="password"
                    name="secondPassword"
                    id="secondPassword"
                    placeholder="Powtórz Hasło"
                    onChange={onChangePasswords}
                    value={passwords.secondPassword}
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input
                    type="submit"
                    name=""
                    id="login"
                    value={"Zmień hasło"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
