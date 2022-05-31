import { comments } from "../../../data/comments";
export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find((comment) => {
      return comment.id === parseInt(commentId);
    });
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find((comment) => {
      return comment.id === parseInt(commentId);
    });
    const index = comments.findIndex((comment) => {
      return comment.id === parseInt(commentId);
    });
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  } else if (req.method === "PUT") {
    const newText = req.body.text;
    const index = comments.findIndex((comment) => {
      return parseInt(commentId) === comment.id;
    });
    console.log(index);
    const newComment = {
      id: Date.now(),
      text: newText,
    };
    comments.splice(index, 1, newComment);
    res.status(200).json(newComment);
  }
}
