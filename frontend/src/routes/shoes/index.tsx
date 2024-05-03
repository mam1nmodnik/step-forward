
import { createEffect, createMemo, createResource, createSignal, For,  Match,Switch } from "solid-js";

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

import { ProductType } from '~/typing/typing';


export default function Shoes(){
    
    
    const [data, { mutate, refetch }] = createResource<ProductType[]>(() =>  GETProductAll())
    const interpretLength = (): number => {
        const length = data()?.length ?? 0;   
        let pages: number = 0;
        if(length) pages = Math.ceil(length / 12);
        return pages
    }
    const returnInterpret = createMemo(()=> {
        return interpretLength()
    })
    if(data.length === undefined){
        () =>  refetch()
    }

    const [page, setPage] = createSignal(1);
    const [array, setArray] = createSignal<ProductType[] | undefined>()

    let addContent = 12;

    const mer = createMemo(() => {
        setArray(data()?.slice((page() - 1) * addContent, (page() * addContent)))
    })

    const nextOrPrevios = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }
    createEffect(()=> {
        mer()
        returnInterpret()
    })

    return (
        <div class="lg:mt-[3rem] w-full">
            <div class="rounded-xl ">
                <div class="flex flex-col items-center gap-[3rem] ">
                        <Switch>
                            <Match when={data.loading}>
                                <div>Loading...</div>
                            </Match>
                            <Match when={data.error}>
                                <span>{(data.error as Error).message}</span>
                            </Match>
                            <Match when={data.latest}>
                                <div class='grid grid-cols-4 gap-[3rem]'>
                                    <For each={array()}>
                                        {(todo) => 
                                        <>
                                            <CardProduct {...todo} /> 
                                        </>
                                        }
                                    </For>
                                </div>
                                <Pagination class='flex justify-center mt-[3rem]' 
                                    onPageChange={setPage}
                                    count={interpretLength()}
                                    onClick={nextOrPrevios}
                                    page={page()}
                                    itemComponent={(props) => (
                                    <PaginationItem 
                                        page={props.page} 
                                        onClick={nextOrPrevios}                                                       
                                        >    
                                        {props.page}
                                        </PaginationItem>
                                    )}
                                    ellipsisComponent={() => <PaginationEllipsis />}
                                >
                                    <PaginationPrevious />
                                    <PaginationItems />
                                    <PaginationNext  />
                                </Pagination>
                            </Match>
                        </Switch>
                </div>
                
            </div>
        </div>
    );
    
}



