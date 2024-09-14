export default interface IFilter {
  category: string;
  sort: string;
  range: number[] | number;
  onSale: boolean;
  inStock: boolean;
  search: string;
}
