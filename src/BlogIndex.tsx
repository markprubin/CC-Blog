import React from "react";
import { useState } from "react";

export function BlogIndex() {


  type Post = {
    id: number;
    title: string;
    body: string;
    image?: string;
  }
  
  
  const blogPost: Post[] = [
    {
    id: 1,
    title: "First Blog Post", 
    body: "This is the first blog post on this blog", 
    image: "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
    id: 2,
    title: "Second Blog Post", 
    body: "This is the second blog post on this blog", 
    image: "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
    id: 3,
    title: "Third Blog Post", 
    body: "This is the second blog post on this blog"
    }
  ]

  
  
  const [posts, setPosts] = useState(blogPost)

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image}/>
        </div>    
      ))}
    </div>
  )



}