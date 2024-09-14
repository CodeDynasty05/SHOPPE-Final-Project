export default interface IInput {
  type: string;
  placeholder: string;
  pr: number;
  value?: string;
  onChange?: (e: any) => void;
}
