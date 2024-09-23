export default interface IComment {
  name: string;
  date: string;
  comment: string;
  website?: string;
  replies: IComment[];
  star?: number;
}
