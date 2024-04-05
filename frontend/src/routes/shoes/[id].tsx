
import {  Context, createEffect, createMemo, createSignal, Match, Switch, useContext } from "solid-js"
import { useParams,  } from "solid-start"

import {  createQuery  } from '@tanstack/solid-query'

import { getPostById  } from "~/api/api"

import NotFound from '../[...404]'
import { MyContext } from "~/Context/Provider"





export default function ShoesId(){
   
    const { addInBascket } = useContext(MyContext);
    
        const params = useParams();
        const [id , setId] = createSignal(params.id)
        const state =  createQuery(() => ({
            queryKey: [`shoes`],
            queryFn: () =>  getPostById(params.id),
            enabled: !!params.id,
            })
        )
        createEffect(()=> {
            console.log(id());
            state.refetch()
        })      
       
              
    return (    
        <div class="flex flex-col gap-[1.5rem] Text-inter-36px-normal-black">     
            <Switch> 
                <Match when={state.isFetching}>
                    <div>Loading....</div>
                </Match>
                <Match when={ state.data.id === undefined}>
                    <NotFound/>
                </Match>
                <Match when={state.error instanceof Error}>
                    <span>Error: {(state.error as Error).message}</span>
                </Match>            
                <Match when={state.data !== undefined}>                     
                    {state.data?.id}
                    {state.data?.title}
                    <button onClick={ () => addInBascket(state.data) }>Добавить в корзину</button>
                </Match>
            </Switch>
        </div> 
    ) 
}