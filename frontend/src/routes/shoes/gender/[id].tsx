

import { createQuery } from '@tanstack/solid-query'
import { createMemo, createSignal, For, Match, Switch } from "solid-js";

import CardProduct from "~/components/Layouts/Home/HomeContent/newGoods/cardProduct";

import { GETProductAll } from "~/api/api";

import { ProductType } from '~/typing/typing';
import { useParams } from 'solid-start';
import NotFound from '~/routes/[...404]';


export default function GenderId(){
    
    const state =  createQuery(() => ({
        queryKey: [`shoes`],
        queryFn: () =>  GETProductAll(),
    }))
    const params = useParams();
    
    const [array , setArray] = createSignal<ProductType[]>()

    const id = createMemo(() => {
        console.log(params.id)
        return params.id
    })
    

    return (
        <div class="lg:mt-[3rem] w-full">
            <div class="rounded-xl ">
                <div class=" grid grid-cols-4 gap-[3rem] ">
                        <Switch> 
                            <Match when={state.isPending}>
                                <div>Loading....</div>
                            </Match>  
                            <Match when={id() === 'female'}>
                                <NotFound/>
                            </Match>
                            <Match when={id() === 'male'}>
                                <NotFound/>
                            </Match>
                            <Match when={id() === 'all'}>
                                <Match when={state && state.error instanceof Error}>
                                    <h1>{(state.error as Error).message}</h1>
                                </Match>
                                <Match when={state && state.data !== undefined}>
                                    <For each={state.data}>
                                        {(todo) => 
                                            <CardProduct {...todo} /> 
                                        }
                                    </For>
                                </Match>
                            </Match>
                        </Switch>
                </div>
                
            </div>
        </div>
    );
}



