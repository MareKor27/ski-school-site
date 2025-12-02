import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { CAPTCHA_SITE_KEY } from "~/features/app/constants/Captcha";

type GoogleCaptchaProviderProps = {
  children: ReactNode;
};

const GoogleCaptchaProvider = (props: GoogleCaptchaProviderProps) => {
  const { children } = props;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={CAPTCHA_SITE_KEY}
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
