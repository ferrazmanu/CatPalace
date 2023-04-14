import moment from "moment";
import "moment/locale/pt";

export const formatToPTBR = (date) => {
  return moment(date).locale("pt").format("LL");
};

export const formatCurrency = (price) => {
  const formattedNumber = price.toFixed(2).replace(".", ",");
  return formattedNumber;
};
