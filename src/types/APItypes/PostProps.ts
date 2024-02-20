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