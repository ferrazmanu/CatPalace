import moment from "moment";
import "moment/locale/pt";

export const formatToPTBR = (date) => {
  return moment(date).locale("pt").format("LL");
};

export const formatCurrency = (price) => {
  const realBRLocale = Intl.NumberFormat("pt-BR");

  return realBRLocale.format(price);
};
