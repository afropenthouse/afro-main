// Function to convert string to array of objects
export function parseMessageToArray(message: any) {
  // Remove surrounding quotes and split by '},{'
  const entries = message.slice(1, -1).split("},{");

  // Convert each entry into an object
  const result = entries.map((entry: any) => {
    // Remove any additional curly braces and trim
    entry = entry.replace(/[{}]/g, "").trim();

    // Split key-value pairs by ','
    const pairs = entry.split(", ");

    // Create an object from key-value pairs
    const obj: any = {};
    pairs?.forEach((pair: any) => {
      const [key, value] = pair?.split(" = ");
      obj[key.trim()] = value.trim();
    });

    return obj;
  });

  return result;
}
