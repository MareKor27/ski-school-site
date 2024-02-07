import { HelmetProvider } from "react-helmet-async";

type GlobalConfigProps = {
  children: JSX.Element;
};

const GlobalConfig = (props: GlobalConfigProps) => {
  const { children } = props;

  return <HelmetProvider>{children}</HelmetProvider>;
};

export default GlobalConfig;
