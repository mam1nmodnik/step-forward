

import {  createQuery, QueryClient  } from '@tanstack/solid-query'
import { For,  Match,Switch, Suspense, onMount, createMemo } from "solid-js";

import CardProduct from "~/components/Layouts/Home/HomeContent/newGoods/cardProduct";

import { GETProductAll } from "~/api/api";


export default function Shoes(){
    
    const state =  createQuery(() => ({
        queryKey: [`shoes`],
        queryFn: () =>  GETProductAll(),
      })
    )
    createMemo(()=> {
        console.log(state.data)
    })
    return (
        <div class="lg:mt-[3rem] w-full">
            <div class="rounded-xl ">
                <div class=" flex flex-wrap justify-between gap-[3rem] ">
                        <Switch>
                            <Match when={state.isPending}>
                                <div>Loading....</div>
                            </Match>
                            <Match when={state && state.error instanceof Error}>
                                <span>Error: {(state.error as Error).message}</span>
                            </Match>
                            <Match when={state && state.data !== undefined}>
                                <For each={state.data}>
                                    {(todo) => 
                                        <CardProduct {...todo} /> 
                                    }
                                </For>
                            </Match>
                        </Switch>
                </div>
            </div>
        </div>
    );
}



