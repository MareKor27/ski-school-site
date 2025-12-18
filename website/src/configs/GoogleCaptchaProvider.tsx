import { ReactNode, useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

type GoogleCaptchaProviderProps = {
  children: ReactNode;
};

const GoogleCaptchaProvider = (props: GoogleCaptchaProviderProps) => {
  const { children } = props;
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");

  useEffect(() => {
    fetch("/env.json")
      .then((res) => res.json())
      .then((config) => {
        setRecaptchaToken(config.RECAPTCHA_PUBLIC_KEY);
      })
      .catch((err) => {
        console.log("Wrong Recaptcha key", err);
      });
  }, []);

  if (!recaptchaToken) return null;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaToken}
      scriptProps={
        {
          async: true,
          defer: true,
          appendTo: "body",
          // kluczowa opcja:
          "data-badge": "inline",
        } as any
      }
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default GoogleCaptchaProvider;
