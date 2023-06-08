import { BlogIndex } from "./BlogIndex"


export function Users() {

  type Users = {
    id: number,
    first_name: string,
    last_name: string,
    email: string
    favorite_id: number
  }

  const user: Users = {
    id: 1,
    first_name: "Mark",
    last_name: "Rubin",
    email: "mark@example.com",
    favorite_id: 1
  }


  return <></>
}