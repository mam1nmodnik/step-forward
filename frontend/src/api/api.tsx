import { Card, Post, ProductType } from "~/typing/typing";

export async function GETProductAll(): Promise<Card[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

export const getPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return await response.json()
}


export async function postReviewForm(
  rated: number, 
  lastName: string, 
  firstName: string, 
  telegram: string, 
  customerКeview: string
){
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const data = {
    rated: rated,
    lastName: lastName, 
    firstName: firstName, 
    telegram: telegram, 
    customerКeview: customerКeview
  }
  const response = await fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json();
}

export async function postOfferForm( 
  lastName: string, 
  firstName: string, 
  telegram: string, 
  customerКeview: string
){
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const data = {
    lastName: lastName, 
    firstName: firstName, 
    telegram: telegram, 
    customerКeview: customerКeview
  }
  const response = await fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.json();
}

// export class auth {
//   private linkToServer = "https://jsonplaceholder.typicode.com/";
//   link: string;
//   username: string | undefined;
//   email: string;
//   description: string;
  
//   constructor( email: string, description: string, link: string, username: string | undefined,) {  
//     this.email = email,
//     this.description = description,
//     this.link = link,
//     this.username = username
//   }

//   async submitMissing(){
//     const response = await fetch(`${this.linkToServer}${this.link}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username: this.username,
//         email: this.email, 
//         description: this.description
//       })
//     });

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   }
// }