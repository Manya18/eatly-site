import { AuthorProps } from "./AuthorProps";
import { CommentsProps } from "./CommentsProps";

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
  comments: CommentsProps;
}
