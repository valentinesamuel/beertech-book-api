export type TBase = {
  created_at: Date;
  updated_at: Date;
  id: string;
};

export type TBook = {
  id: string;
  title: string;
  authors: string[];
  quantityAvailable: number;
  price: number;
  averageRating: number;
  ISBN: string;
  publishers: string[];
  genres: string[];
  reviews: string[];
  summary: string;
} & TBase;

// export type TPublisher = {
//   name: string;
//   dateOfEstablishment: string;
//   address: string;
//   email: string;
//   phone: string;
//   website: string;
//   books: TBook[];
// } & TBase;

// export type TAuthor = {
//   id: string;
//   first_name: string;
//   last_name: string;
//   biography: string;
//   birthDate: string;
//   nationality: string;
//   photo_url: string;
//   books: TBook[];
// } & TBase;

// export type TGenre = {
//   id: string;
//   name: string;
//   description: string;
// } & TBase;

// export type TReview = {
//   id: string;
//   book_id: string;
//   user_id: string;
//   rating: number;
//   title: string;
//   content: string;
// } & TBase;
