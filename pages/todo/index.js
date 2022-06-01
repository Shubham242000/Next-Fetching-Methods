import { Context } from "../../context/Context";
import { useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
const todo = () => {
  const { data, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);
  console.log(data);
  console.log(status);
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

  if (status === "loading") {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <div style={{ margin: "20px 0" }}>
        <button
          style={{ fontSize: "18px" }}
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>

      <p>
        Uses Next API routes to send request and get response and Context Api to
        manage all the state and functions, next-auth for client side
        authentication.
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
