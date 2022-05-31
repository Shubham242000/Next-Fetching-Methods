import React from "react";
const Context = React.createContext();
import { useEffect, useState } from "react";
const ContextFunction = (props) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [id, setId] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    loadComment();
  }, []);

  const updateComment = async (id) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "PUT",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    loadComment();
    setId("");
  };

  const loadComment = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  const addComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    loadComment();
    setComment("");
  };

  const deleteComment = async (id) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    loadComment();
  };
  return (
    <Context.Provider
      value={{
        comment,
        comments,
        id,
        setId,
        text,
        setText,
        updateComment,
        loadComment,
        deleteComment,
        addComment,
        setComment,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { Context, ContextFunction };
