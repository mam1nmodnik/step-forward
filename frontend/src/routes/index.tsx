import { Title, } from "solid-start";
import "~/root.css";
import "../style/main.css"

import Header from "~/components/Layouts/Header/Header";
import Main from "~/components/Layouts/Main/Main";

export default function Home(){
  return (
    <>
      <Title>Step Forward</Title>
      <div class="flex flex-col w-[95.5rem]">   
        <Header/>
        <Main/>
      </div> 
    </>
  )
}
