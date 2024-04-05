import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

import "../root.css";

export default function NotFound(){

  return (
   <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />    
      <div>
        Страница не найдена 
      </div>  
    </main>
  );
}
