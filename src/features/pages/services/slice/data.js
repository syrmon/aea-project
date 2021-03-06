import homeSvg from "./../clearence/assets/icon/haushaltsaufloesung-bielefeld.svg";
import garageSvg from "./../clearence/assets/icon/kelleraufloesung-bielefeld.svg";
import officeSvg from "./../clearence/assets/icon/firmenaufloesung-bielefeld.svg";
import apartmentSvg from "./../clearence/assets/icon/wohnungaufloesung-bielefeld.svg";

export const serviceData = {
  ids: ["home", "garage", "office", "apartment"],
  entities: {
    home: {
      id: "home",
      icon: homeSvg,
      title: "Haushaltsauflösung",
      link: "/haushaltsaufloesung",
      imageAlt: "Haushaltlösung AEA Dienstleistungen Bielefeld",
    },
    garage: {
      id: "garage",
      icon: garageSvg,
      title: "Kellerauflösung",
      link: "/kelleraufloesung",
      imageAlt: "Kellerauflösung AEA Dienstleistungen Bielefeld",
    },
    office: {
      id: "office",
      icon: officeSvg,
      title: "Firmensauflösung",
      link: "/firmenaufloesung",
      imageAlt: "Firmensauflösung AEA Dienstleistungen Bielefeld",
    },
    apartment: {
      id: "apartment",
      icon: apartmentSvg,
      title: "Wohnungsauflösung",
      link: "/wohnungsaufloesung",
      imageAlt: "Wohnungsauflösung AEA Dienstleistungen Bielefeld",
    },
  },
};
