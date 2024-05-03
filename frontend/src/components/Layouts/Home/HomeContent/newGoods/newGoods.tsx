import { For, Match,  Switch,  createResource, } from "solid-js";

import CardProduct from "./cardProduct";
import PreloadCard from "~/components/Widgets/preloadCard";

import {  GETProductAll } from "~/api/api";

import { ProductType } from "~/typing/typing";


export default function NewGoods() {
    
    const [data, { mutate, refetch }] = createResource<ProductType[]>(() =>  GETProductAll())

    return (
        <div class="lg:mt-[3rem] select-none w-full">
            <div class="flex justify-between mb-[1.5rem]">
                <h1 class="Text-inter-98px" id="newGoods">Новинки</h1>   
            </div> 
            <div class="not-prose rounded-xl overflow-hidden">
                <div class="rounded-xl overflow-auto">
                    <div class="max-w-md sm:max-w-[38.5rem] md:max-w-[51rem] lg:min-w-[62rem] lg:max-w-[64.8rem] xl:max-w-[71.875rem] 2xl:max-w-[88rem] 3xl:max-w-[95.5rem] mx-auto shadow-xl min-w-0">
                        <div class=" h-fit flex justify-between gap:gap-x-[1.5rem] gap-x-[0.8rem]">
                            <Switch>
                                <Match when={data.loading}>
                                    <PreloadCard /> 
                                    <PreloadCard /> 
                                    <PreloadCard /> 
                                    <PreloadCard />   
                                </Match>
                                <Match when={data.error}>
                                    <p>Error: {data.error?.message}</p>
                                </Match>
                                <Match when={data.latest}>
                                    <For each={data()}>
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
