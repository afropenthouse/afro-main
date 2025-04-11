export function formatBytes(value: any) {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;

  if (value >= megabyte) {
    return `${(value / megabyte).toFixed(2)} MB`;
  } else if (value >= kilobyte) {
    return `${(value / kilobyte).toFixed(2)} KB`;
  } else {
    return `${value} bytes`;
  }
}

export function formatDate(dateString: string): string {
  // Create a new Date object from the input date string
  const date = new Date(dateString);

  // Define options for the toLocaleDateString method
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date using toLocaleDateString
  return date.toLocaleDateString("en-US", options);
}