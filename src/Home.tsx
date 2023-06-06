import React from "react";
import { Header } from "./Header";
import { BlogIndex } from "./BlogIndex";




export function Home() {
  return(
    <div>
    <Header />
    <h1>The Blog</h1>
    <BlogIndex />
    </div>
  )
}