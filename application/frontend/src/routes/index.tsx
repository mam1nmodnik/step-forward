import { Title, A } from "solid-start";
import "~/root.css";
import { getOrders } from "~/api/auth";
import { createEffect, createSignal } from "solid-js";

export default function Home(){

  
  getOrders()


return (
  <>
    <Title>Step Forward</Title>
    <main class="flex items-center justify-center">   
        <h1 class="flex">ТУТ скоро будут подкрадули</h1>
    </main>
    </>
  );
}
