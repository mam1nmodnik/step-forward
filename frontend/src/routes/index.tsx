import { FileRoutes, Routes, Title } from "solid-start";
import "~/root.css";
import "../style/main.css"
import Home from "~/components/Layouts/Home/Home";

export default function HomePage(){ 
  return (
   <>
      <Title>Step Forward</Title>
      <Home/>
   </>

  )
}
