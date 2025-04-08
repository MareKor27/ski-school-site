import { CSSProperties } from "react";
import useStyles from "~/hooks/useStyle";
import style from "./Login.module.scss";
import { Paths } from "~/features/app/constants/Paths";
import { useForm } from "react-hook-form";
import { RegistretionType } from "../api/type/authorization-type";
import { useLogin } from "../hooks/useLogin";

export function LoginView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegistretionType>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { loginToSystem, sending } = useLogin(setError);

  const S = useStyles(style);
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
              <h2>Figowski Sport Logowanie</h2>

              <form
                onSubmit={handleSubmit((e) => {
                  loginToSystem(e.email, e.password);
                })}
              >
                <div className={S(`inputBox`)}>
                  <input
                    {...register("email", {
                      required: "Pole wymagane",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Nieprawidłowy email",
                      },
                    })}
                    placeholder="Adres E-mail"
                  />
                </div>
                <div className={S(`errors`)}>
                  {errors.email && errors.email.message}
                </div>
                <div className={S(`inputBox`)}>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Pole wymagane",
                      minLength: {
                        value: 2,
                        message: "Hasło musi mieć conajmneij 2 znaków",
                      },
                    })}
                    placeholder="Hasło"
                  />
                </div>

                <div className={S(`errors`)}>
                  {errors.password && errors.password.message}
                </div>

                <div className={S(`inputBox login-button`)}>
                  <input type="submit" name="" id="login" value={"Login"} />
                  <div className={S(`sending`)}>
                    {sending ? "Przetwarzanie" : " "}
                  </div>
                </div>
                <div className={S(`errors`)}>
                  {errors.root && errors.root.message}
                </div>

                <p className={S(`forget`)}>
                  {" "}
                  Zapomniałeś hasła?{" "}
                  <a href={Paths.ADMIN.FORGOT_PASSWORD.absolute}>
                    Kliknij tutaj
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
