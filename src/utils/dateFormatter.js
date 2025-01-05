import { format, parseISO } from "date-fns";

function dateFormatter(dateString) {
  const date = parseISO(dateString);
  return format(date, "dd/MM/yyyy hh:mm a");
}

export default dateFormatter;
