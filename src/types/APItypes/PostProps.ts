import { AuthorProps } from "./AuthorProps";

export interface IPostProps {
  id: number;
  title: string;
  tags: string[];
  reactions: number;
  body: string;
  userId: number;
}

export interface PostProps {
  total: number;
  skip: number;
  limit: number;
  posts: IPostProps[];
}

export interface SinglePostProps {
  postContent: IPostProps;
  author: AuthorProps;
}
