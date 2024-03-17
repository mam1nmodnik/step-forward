

  export async function getOrders(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url, {
      method: 'GET',
    })
    return response.json();
  }

  

export class auth {
  private linkToServer = "https://jsonplaceholder.typicode.com/";
  link: string;
  username: string;
  email: string;
  description: string;
  
  constructor(username: string, email: string, description: string, link: string) {  
    this.username = username,
    this.email = email,
    this.description = description;
    this.link = link;
  }

  async submitMissing(){
    const response = await fetch(`${this.linkToServer}${this.link}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.username,
        email: this.email, 
        description: this.description
      })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}