export function generateGroupLink(length?: number) {
  const stringLength = length || 10;
  let id = '';
  const characters = '0123456789abcdefghijlmnopqrstuvwxyz';
  while (id.length < stringLength) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const char = characters.charAt(randomIndex);

      id += char;
  }
  return `vibeazy-${id}`;
}