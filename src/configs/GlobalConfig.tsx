import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

type GlobalConfigProps = {
  children: ReactNode;
};

const GlobalConfig = (props: GlobalConfigProps) => {
  const { children } = props;

  return <HelmetProvider>{children}</HelmetProvider>;
};

export default GlobalConfig;
