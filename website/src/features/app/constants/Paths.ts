export const Paths = {
  INDEX: { absolute: "/", routerConfig: "/" },
  ABOUT_US: { absolute: "/o-nas", routerConfig: "o-nas" },
  PRICE_LIST: { absolute: "/cennik", routerConfig: "cennik" },
  GALLERY: { absolute: "/galeria", routerConfig: "galeria" },
  CONTACT: { absolute: "/kontakt", routerConfig: "kontakt" },
  ADMIN: {
    INDEX: { absolute: "/administrator", routerConfig: "administrator" },
    LOGIN: { absolute: "/administrator/login", routerConfig: "login" },
    CHANGE_PASSWORD: {
      absolute: "/administrator/zmien-haslo/:token",
      routerConfig: "zmien-haslo/:token",
    },
    FORGOT_PASSWORD: {
      absolute: "/administrator/zapomnialem-hasla",
      routerConfig: "zapomnialem-hasla",
    },
    SCHEDULE: {
      INDEX: {
        absolute: "/administrator/harmonogram",
        routerConfig: "harmonogram",
      },
      CALENDAR: {
        absolute: "/administrator/harmonogram/kalendarz",
        routerConfig: "kalendarz",
      },
      RESERVATION: {
        absolute: "/administrator/harmonogram/rezerwacje",
        routerConfig: "rezerwacje",
      },
      TIMETABLE: {
        absolute: "/administrator/harmonogram/grafik",
        routerConfig: "grafik",
      },
    },
    CALENDAR_ADD_RESERVATION: {
      absolute: "/administrator/rezerwacja",
      routerConfig: "rezerwacja",
    },
    OPTION: { absolute: "/administrator/opcje", routerConfig: "opcje" },
    STAFF: {
      INDEX: {
        absolute: "/administrator/instruktorzy",
        routerConfig: "instruktorzy",
      },
      CREATE: {
        absolute: "/administrator/instruktorzy/nowy",
        routerConfig: "nowy",
      },
      EDIT: {
        absolute: (id: number) => `/administrator/instruktorzy/${id}`,
        routerConfig: ":id",
      },
    },
  },
};
