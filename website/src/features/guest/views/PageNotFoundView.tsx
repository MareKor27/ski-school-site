import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import { TextBox } from "~/components/textbox/TextBox";
import style from "~/components/content/Content.module.scss";
import useStyles from "~/hooks/useStyle";
import { OwnButton } from "~/components/button/OwnButton";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";

const PageNotFoundView = () => {
  const s = useStyles(style);
  return (
    <Contener className="body-arranged-md">
      <Content className={"content"}>
        <Breadcrums namePage={"404"} />
        <TextBox>
          <h1>404 strona nie istnieje</h1>
          <p>Możliwe, że nie możesz zobaczyć tej strony, ponieważ</p>

          <ul>
            <li>Użyta zakładka jest nieaktualna</li>
            <li>
              Twoja wyszukiwarka nie odświeżyła jeszcze mapy naszej witryny
            </li>
            <li>Adres został wpisany z błędem</li>
            <li>Nie masz uprawnień do obejrzenia tej strony</li>
            <li>System nie może zlokalizować wskazanego zasobu.</li>
            <li>Wystąpił błąd podczas wykonywania powierzonego zadania.</li>
          </ul>

          <p className={s(`margin-bottom`)}>
            Spróbuj jednej z następujących stron:
          </p>
          <OwnButton to="/" text={"Strona Główna"} />
          <p className={s(`margin-top`)}>
            Jeśli problem się powtarza, skontaktuj się z administratorem
            witryny.
          </p>
        </TextBox>
      </Content>
    </Contener>
  );
};

export default PageNotFoundView;
