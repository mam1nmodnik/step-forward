import { Title } from "solid-start";
import { ErrorBoundary } from "solid-js"
import "~/root.css";
import "../style/main.css"

import Header from "~/components/Layouts/Header/Header";
import Main from "~/components/Layouts/Main/Main";
import Footer from "~/components/Layouts/Footer/Footer";
import MobileMenu from "~/components/Layouts/Header/HeaderMobileMenu";
import FormModalWindow from "~/components/Widgets/formModalWindow";


export default function Home(){

 
  return (
   
    <main class="flex flex-col my-[1.5rem] mx-[2rem]  lg:mx-[2.5rem] max-w-[95.5rem]">
     
      <Title>Step Forward</Title>
      <Header/>
      <Main/>
      <Footer/>  
      <MobileMenu/>
      <FormModalWindow />  
      
    </main>
   
  )
}
