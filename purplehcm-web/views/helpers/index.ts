export function findNameById(data?: any, id?: any) {
  const result = data?.find((item: any) => item.id === id || item.code === id);
  return result ? result.name : null; // Return the name or null if not found
}

export function filterByArrayIds(idsArray?: any, dataArray?: any) {
  // Filter the dataArray based on whether the id exists in idsArray
  return dataArray?.filter((item: any) => idsArray?.includes(item.id));
}
