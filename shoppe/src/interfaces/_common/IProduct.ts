import IComment from "./IComment";

export default interface IProduct {
  id: number;
  productName: string;
  price: number;
  stock: number;
  discount: number;
  rating: number;
  category: string;
  desc: string;
  info: {
    weight: number;
    dimension: string;
    colours: string[];
    material: string;
  };
  image: string;
  reviews: IComment[];
  count?: number;
}
