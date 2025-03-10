import { CSSProperties, useState } from "react";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
import style from "./Login.module.scss";

export function LoginView() {
  type RegistretionType = {
    email: string;
    password: string;
  };

  const [account, setAccount] = useState<RegistretionType>({
    email: "",
    password: "",
  });

  const onChangeAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAccount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginToSystem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(account);
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
                  Zapomniałeś hasła? <a href="#">Kliknij tutaj</a>
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
