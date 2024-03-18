import { Title, } from "solid-start";
import "~/root.css";
import "../style/main.css"

import Header from "~/components/Layouts/Header/Header";
import Main from "~/components/Layouts/Main/Main";
import Footer from "~/components/Layouts/Footer/Footer";

export default function Home(){
  return (
    <main class="mt-[1.5rem] mb-[1.5rem]">
      <Title>Step Forward</Title>
      <div class="flex flex-col w-[95.5rem]  ">   
        <Header/>
        <Main/>
        <Footer/>
      </div> 
    </main>
  )
}
