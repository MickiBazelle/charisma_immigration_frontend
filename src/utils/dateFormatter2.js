function dateFormatter2(dateString) {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0"); // Pads with zero if only one digit
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours.toString().padStart(2, "0") : "12"; // the hour '0' should be '12'

  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}

export default dateFormatter2;
