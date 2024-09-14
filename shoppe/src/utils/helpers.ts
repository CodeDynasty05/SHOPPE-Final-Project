export const getDate = () => {
  const date = new Date().toDateString().split(" ");
  return `${date[2]} ${date[1]}, ${date[3]}`;
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
