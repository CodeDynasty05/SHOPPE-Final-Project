import IProduct from "./_common/IProduct";

export default interface IOrder {
  id: String;
  basket: IProduct[];
  status: String;
  date: String;
  totalPrice: Number;
  discount: Number;
  shipPrice: Number;
  city: String;
  zip: String;
  country: String;
}
