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
      setNewBasket(product)
      // console.log(product)
    }
  }
  
  onMount( ()=> {
    return updateLocalstorageBasket()
  })

  const addInBascket = (data: any) =>  {
    const updatedBasket = [...newBasket.product, data];

    setNewBasket({ 
      product: updatedBasket, 
      countBasket: updatedBasket.length
    });
    
    localStorage.setItem(
      'basket',
    JSON.stringify(newBasket)
    );
    // console.log(newBasket);
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


