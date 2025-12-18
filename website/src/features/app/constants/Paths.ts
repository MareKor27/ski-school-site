export const Paths = {
  INDEX: { absolute: "/", routerConfig: "/" },
  ABOUT_US: { absolute: "/o-nas", routerConfig: "o-nas" },
  WINTER: { absolute: "/zima2026", routerConfig: "zima2026" },
  PRICE_LIST: { absolute: "/cennik", routerConfig: "cennik" },
  SCHEDULE: {
    INDEX: { absolute: "/harmonogram", routerConfig: "harmonogram" },
    CALENDAR_ADD_RESERVATION: {
      absolute: (date: string) => `/harmonogram/rezerwacja?dnia=${date}`,
      routerConfig: "harmonogram/rezerwacja",
    },
    RESERVATION_SUMMARY: {
      absolute: "/harmonogram/podsumowanie",
      routerConfig: "harmonogram/podsumowanie",
    },
    RESERVATION_VERIFICATION: {
      absolute: "/harmonogram/weryfikacja/:token",
      routerConfig: "harmonogram/weryfikacja/:token",
    },
  },

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
      absolute: (date: string) => `/administrator/rezerwacja?dnia=${date}`,
      routerConfig: "rezerwacja",
    },
    RESERVATION_SUMMARY: {
      absolute: "/administrator/podsumowanie",
      routerConfig: "podsumowanie",
    },
    RESERVATION_VERIFICATION: {
      absolute: "/administrator/weryfikacja/:token",
      routerConfig: "weryfikacja/:token",
    },
    OPTION: {
      INDEX: {
        absolute: "/administrator/opcje",
        routerConfig: "opcje",
      },
      OPTION_ONE: {
        absolute: "/administrator/opcje/one",
        routerConfig: "one",
      },
      OPTION_TWO: {
        absolute: "/administrator/opcje/two",
        routerConfig: "two",
      },
      OPTION_THREE: {
        absolute: "/administrator/opcje/three",
        routerConfig: "three",
      },
    },
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
