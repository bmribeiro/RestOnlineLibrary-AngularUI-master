import { BookDetail } from "../../bookDetails";

export interface Book {

  id: number;
  title: string;
  category: string;
  copies: number;
  available: boolean;
  rentedByUser: boolean;

  bookDetail?: BookDetail;
}
