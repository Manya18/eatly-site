export const addComment = async (
  commentBody: string,
  postId: number,
  userId: number
) => {
  if (!commentBody.trim()) {
    throw new Error("Comment body cannot be empty.");
  } else {
    const response = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: commentBody.trim(),
        postId: postId,
        userId: userId,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const res = await response.json();
    return res;
  }
};
