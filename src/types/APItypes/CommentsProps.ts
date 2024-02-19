export interface ICommentsProps {
  body: string;
  id: number;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export type CommentsProps = {
    comments: ICommentsProps[]
}
