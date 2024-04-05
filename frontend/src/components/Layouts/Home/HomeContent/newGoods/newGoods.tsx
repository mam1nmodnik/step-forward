import { For, Match,  Switch,  createEffect,  createMemo,  onMount, } from "solid-js";
import {  createQuery } from '@tanstack/solid-query'

import CardProduct from "./cardProduct";
import PreloadGoods from "~/components/Widgets/preloadGoods";

import {  GETProductAll } from "~/api/api";


export default function NewGoods() {
    
    const state = createQuery(() => ({
        queryKey: ['shoes'],
        queryFn: () =>  GETProductAll(),
      })
    )
    const array = [1, 2, 3, 4];

    return (
        <div class="lg:mt-[3rem] select-none w-full">
            <div class="flex justify-between mb-[1.5rem]">
                <h1 class="Text-inter-98px" id="newGoods">Новинки</h1>   
            </div> 
            <div class="not-prose rounded-xl overflow-hidden">
                <div class="rounded-xl overflow-auto">
                    <div class="max-w-md sm:max-w-[38.5rem] md:max-w-[51rem] lg:min-w-[62rem] lg:max-w-[64.8rem] xl:max-w-[71.875rem] 2xl:max-w-[88rem] 3xl:max-w-[95.5rem] mx-auto shadow-xl min-w-0">
                        <div class=" h-fit flex justify-between flexgap:gap-x-[1.5rem] gap-x-[0.8rem]">
                            <Switch>
                                <Match when={state.isPending}>
                                    <For each={array}>
                                        {(elem) => (   
                                            <PreloadGoods /> 
                                        )}
                                    </For>  
                                </Match>
                                <Match when={state.isError}>
                                    <p>Error: {state.error?.message}</p>
                                </Match>
                                <Match when={state.data}>
                                    <For each={state.data}>
                                        {(elem, index) => (   
                                        index() <= 3 ? <CardProduct {...elem} /> : null
                                        )}
                                    </For>      
                                </Match>
                            </Switch> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
