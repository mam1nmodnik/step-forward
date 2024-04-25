

import {  createQuery } from '@tanstack/solid-query'
import { createEffect, createMemo, createSignal, For,  Match,Switch } from "solid-js";

import CardProduct from "~/components/Layouts/Home/HomeContent/newGoods/cardProduct";

import { GETProductAll } from "~/api/api";

import {
    Pagination,
    PaginationEllipsis,
    PaginationItem,
    PaginationItems,
    PaginationNext,
    PaginationPrevious
} from "~/components/ui/pagination"
import { createMemoryHistory, useParams } from '@solidjs/router';

export default function Shoes(){
    
    const state =  createQuery(() => ({
        queryKey: [`shoes`],
        queryFn: () =>  GETProductAll(),
    })
    )
    const interpretLength = (): number => {
        const length = state.data?.length;   
        let pages: number = 0;
        if(length) pages = Math.ceil(length / 12);
        return pages
    }
    
    const [page, setPage] = createSignal(1);
    const [array , setArray] = createSignal(state.data)
    let addContent = 12;
    
    createMemo(() => {
        console.log(page())
        setArray(state.data?.slice((page() - 1) * addContent, (page() * addContent) ))
        console.log(array())
    })
    return (
        <div class="lg:mt-[3rem] w-full">
            <div class="rounded-xl ">
            
                <div class=" grid grid-cols-4 gap-[3rem] ">
                        <Switch>
                            <Match when={state.isPending}>
                                <div>Loading....</div>
                            </Match>
                            <Match when={state && state.error instanceof Error}>
                                <span>Error: {(state.error as Error).message}</span>
                            </Match>
                            <Match when={state && state.data !== undefined}>
                                <For each={array()}>
                                    {(todo) => 
                                        <CardProduct {...todo} /> 
                                    }
                                </For>
                            </Match>
                        </Switch>
                </div>
                <Pagination class='flex justify-center mt-[3rem]'
                    onPageChange={setPage}
                    count={interpretLength()}
                    itemComponent={(props) => (
                    <PaginationItem 
                        page={props.page}          
                        >    
                            {props.page}
                        </PaginationItem>
                    )}
                    ellipsisComponent={() => <PaginationEllipsis  />}
                >
                    <PaginationPrevious />
                    <PaginationItems />
                    <PaginationNext />
                </Pagination>
            </div>
        </div>
    );
}



