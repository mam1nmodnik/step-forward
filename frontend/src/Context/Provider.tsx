import { createStore } from "solid-js/store";
import { createContext, onMount } from "solid-js";

import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'

import { BasketType, ProductType } from "~/typing/typing";



const queryClient = new QueryClient()
export const MyContext = createContext<any>();

export const Provider = (props: any) => {

  const [newBasket, setNewBasket] = createStore<BasketType>({
    countBasket: 0,
    product: [],
  });

  const [product , setProduct] = createStore<ProductType[]>([]);

  const updateLocalstorageBasket = ()  => {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      const product = JSON.parse(storedBasket); 
      setNewBasket(product)
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
    alert('Товар добавлен в корзину')

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


