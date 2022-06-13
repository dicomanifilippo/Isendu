

import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";

function List() {
  const [listaPost, setListaPost] = useState();

  // fetch del json
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => {
        if (!response.ok) throw new Error("Chiamata fallita");
        response.json().then((body) => {
          setListaPost(body);
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []); 



  const deleteCard = useCallback(
    (id) => {
      const newListaPost = listaPost.filter((post) => post.id !== id);
      setListaPost(newListaPost);
    },
    [listaPost]
  );

  if (!listaPost) return null; 

  return (
    <div class="lista row row-cols-1 row-cols-md-2 g-4">
      {listaPost.map((post, index) => {
        return (
         
          <div className="col">
            <Card
              key={post.id || index}
              post={post}
              onDelete={(id) => {
                deleteCard(id);
              }}
            />
          </div>
        );
      })}
    </div>
   
  );
}

export default List;
