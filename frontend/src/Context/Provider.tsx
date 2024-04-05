import { createStore } from "solid-js/store";
import { createContext, createEffect, onMount, useContext} from "solid-js";

import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'

import { newBasketType, ProductType } from "~/typing/typing";



const queryClient = new QueryClient()
export const MyContext = createContext<any>();

export const Provider = (props: any) => {

  const [newBasket, setNewBasket] = createStore<newBasketType>({
    countBasket: 0,
    product: [],
  });
 
  const updateLocalstorageBasket = ()  => {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      const product = JSON.parse(storedBasket);
      console.log(product)
       setNewBasket(product)
    }
  }
  onMount(()=> {
    console.log(updateLocalstorageBasket())
   return updateLocalstorageBasket()
  })

  const addInBascket = (data: any) =>  {
    const updatedBasket = [...newBasket.product, data];
    setNewBasket("product" , updatedBasket);
    setNewBasket('countBasket', updatedBasket.length);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    console.log(updatedBasket);
  } 

  return (
    <QueryClientProvider  client={queryClient}>
      <MyContext.Provider value={{
        addInBascket, newBasket , setNewBasket
      }}>
        {props.children}    
        
      </MyContext.Provider>
      <SolidQueryDevtools/>
    </QueryClientProvider>
  );
};  


