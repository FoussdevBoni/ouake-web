export function formatDate(dateString: string | Date, withTime = false): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    ...(withTime && { hour: "2-digit", minute: "2-digit" }),
  };

  return date.toLocaleDateString("fr-FR", options);
}
