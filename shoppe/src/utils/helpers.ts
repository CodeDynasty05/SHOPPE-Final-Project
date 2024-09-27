import IProduct from "@/interfaces/_common/IProduct";

export const getDate = () => {
  const date = new Date().toDateString().split(" ");
  return `${date[2]} ${date[1]}, ${date[3]}`;
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const totalPriceCalculator = (basket: IProduct[]) => {
  let totalPrice = 0;
  basket.forEach((item) => {
    totalPrice += item.price * (item.count || 0);
  });

  return totalPrice;
};
