import React, { useCallback } from "react";

export default function Card({ post, onDelete }) {
  const deleteCard = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Delete error");
        onDelete(post.id);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [post.id, onDelete]);

  return (
    <div className="card">
      <div className="card-header">
        <h2>{post.title}</h2>
      </div>
      <div className="card-body">
        
        <ul class="list-group">
  <li class="list-group-item">{post.userId}</li>
  <li class="list-group-item">{post.id}</li>
  <li class="list-group-item">{post.title}</li>
  <li class="list-group-item">{post.body}</li>
 
</ul>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteCard();
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
