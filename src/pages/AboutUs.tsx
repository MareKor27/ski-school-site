import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.scss";
import { TextBox } from "~/components/textbox/TextBox";
import useStyles from "~/hooks/useStyle";

export function AboutUs() {
  const s = useStyles(style);
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Poznaj nas | Nasza historia, misja i zespół - FigowSki</title>
        <meta
          name="description"
          content="Poznaj FigowSki - profesjonalną szkołę narciarską z Warszawy. Zapraszamy na Górkę Szczęśliwicką, gdzie uczymy jazdy na nartach i snowboardzie."
        />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"O nas"} />
        <TextBox>
          <h1>
            Poznaj Szkołę Narciarską FigowSki Sport na Górce Szczęśliwickiej
          </h1>
          <h2>Nasz Zespół</h2>
          <img
            className={s(`contentimg imgRight`)}
            src="images/content/content-cennik.webp"
            alt={"Górka Szczęśliwicka z rana"}
          />
          <p>
            Od kilkunastu lat nasza kadra instruktorów z licencją SITN PZN oraz
            SITS z zaangażowaniem uczy <b>narciarstwa i snowboardu</b> dzieci,
            młodzież oraz dorosłych.
          </p>
          <p>
            Nasz zespół tworzą doświadczeni instruktorzy oraz młodsza kadra,
            której świeży entuzjazm łączy się z wiedzą i doświadczeniem
            starszych kolegów. Dzięki temu zapewniamy profesjonalizm i{" "}
            <Link to="/galeria">przyjazną atmosferę na stoku</Link>, sprzyjającą
            skutecznej nauce i dobrej zabawie.
          </p>
          <p>
            Michał Jaśkiewicz, kierownik szkoły, zdobywał doświadczenie
            instruktorskie już jako student wychowania fizycznego, dzięki czemu
            od kilkunastu lat skutecznie dzieli się swoją wiedzą i pasją,
            pomagając każdemu stać się wspaniałym narciarzem. Na co dzień
            pracuje jako nauczyciel wychowania fizycznego w szkole podstawowej,
            co pozwala mu doskonale rozumieć potrzeby każdego, mocne i słabe
            strony dzieci i młodzieży. Dzięki temu umiejętnie łączy narciarską
            zabawę z profesjonalnym podejściem sportowym.
          </p>
          <h2>Nasza misja, nasze motto – „Od zabawy do sportu”</h2>
          <p>
            Misją <b> FigowSki Sport</b> jest nie tylko nauka techniki jazdy,
            ale także inspirowanie i integrowanie narciarskiej społeczności.
            Zależy nam, aby każdy kursant poczuł radość i satysfakcję podczas
            lekcji i treningów na stoku.
          </p>
          <p>
            Realizujemy Sitnusiowy Program Szkolenia Narciarskiego, składający
            się z ośmiu poziomów, uszeregowanych zgodnie z zasadą trudności.
            Każdy etap jest dostosowany do indywidualnych możliwości i potrzeb
            kursanta, bez żadnej presji – liczy się postęp we własnym tempie i
            czerpanie przyjemności z każdego zjazdu. Bazując na zabawie, uczymy
            podstawowych umiejętności narciarskich i płynnie przechodzimy do
            jazdy sportowej (slalom GS i SL), tak aby nauka była przyjemna, a
            jednocześnie prowadziła do doskonałości technicznej.
          </p>
          <h2>Bezpieczeństwo i Profesjonalizm</h2>
          <p>
            Naszym priorytetem jest nie tylko wspieranie postępów w nauce, ale
            przede wszystkim zapewnienie bezpieczeństwa kursantom na stoku.
            Doskonale wiemy, że im wyższe umiejętności, tym większa pewność i
            komfort jazdy. Dlatego każdy kurs rozpoczynamy od lekcji
            indywidualnej, w której instruktor poświęca 100% uwagi uczniowi. W
            kolejnej fazie nauki, oferujemy możliwość wyboru kontynuacji
            szkolenia w grupie lub dalszych lekcji indywidualnych, dostosowując
            tempo i styl nauczania do indywidualnych potrzeb kursanta.
          </p>
          <h2>Gdzie nas znajdziesz?</h2>
          <p>
            Nasza szkoła znajduje się przy stoku narciarskim w głównym budynku
            Aktywnej Warszawy (poziom -1) przy ul. Drawskiej 22, w Warszawie (w
            dzielnicy Ochota). Wokół stoku otacza nas malowniczy krajobraz Parku
            Szczęśliwice, z którego nawet podczas spaceru również będziesz mógł
            nas dostrzec.
          </p>
          <h2>
            <Link to="/kontakt">
              Zapraszamy do kontaktu i do zobaczenia na stoku!{" "}
            </Link>
          </h2>
        </TextBox>
      </Content>
    </Contener>
  );
}
