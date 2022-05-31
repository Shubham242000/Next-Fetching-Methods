import { useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { useContext } from "react";
const todo = () => {
  // const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  // const [id, setId] = useState();
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   loadComment();
  // }, []);

  // const updateComment = async (id) => {
  //   const res = await fetch(`/api/comments/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ text }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   loadComment();
  //   setId("");
  // };

  // const loadComment = async () => {
  //   const res = await fetch("/api/comments");
  //   const data = await res.json();
  //   setComments(data);
  // };
  // const addComment = async () => {
  //   const res = await fetch("/api/comments", {
  //     method: "POST",
  //     body: JSON.stringify({ comment }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   loadComment();
  //   setComment("");
  // };

  // const deleteComment = async (id) => {
  //   const res = await fetch(`/api/comments/${id}`, {
  //     method: "DELETE",
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   loadComment();
  // };
  const {
    comment,
    comments,
    id,
    text,
    setText,
    setComment,
    setComments,
    setId,
    addComment,
    updateComment,
    deleteComment,
    loadComment,
  } = useContext(Context);

  return (
    <div>
      <p>
        Uses Next API routes to send request and get response and Context Api to
        manage all the state and functions
      </p>
      <h1>Todo </h1>
      <input
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      />
      <button disabled={!comment.length} onClick={addComment}>
        Add
      </button>

      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.text}
              <button
                onClick={() => {
                  setId(comment.id);
                }}
              >
                Modify
              </button>
              {comment.id === id ? (
                <>
                  <input
                    type="text"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    value={text}
                  />
                  <button
                    onClick={() => {
                      updateComment(comment.id);
                    }}
                  >
                    Update
                  </button>
                </>
              ) : (
                ""
              )}
              <button onClick={() => deleteComment(comment.id)}>
                Delete Text
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default todo;
