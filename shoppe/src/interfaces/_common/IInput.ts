export default interface IInput {
  type: string;
  placeholder: string;
  w: number;
  value?: string;
  onChange?: (e: any) => void;
}
