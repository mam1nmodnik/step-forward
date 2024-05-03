
import {  createEffect, createResource, For, Match, Switch, useContext } from "solid-js"
import { useParams,  } from "solid-start"

import {  createQuery , QueryCache  } from '@tanstack/solid-query'

import { getPostById  } from "~/api/api"

import NotFound from '../[...404]'
import { MyContext } from "~/Context/Provider"
import { createStore } from "solid-js/store"
import { ProductType } from "~/typing/typing"





export default function ShoesId(){
        const { addInBascket } = useContext(MyContext);
        const params = useParams();
        const [data, { mutate, refetch }] = createResource<ProductType>(() => getPostById(params.id))
        if(data.length === undefined){
            () =>  refetch()
        }
    return (    
        <div class="flex flex-col gap-[1.5rem] Text-inter-36px-normal-black">     
            <Switch> 
                <Match when={data.loading}>
                    <div>Loading...</div>
                </Match>
                <Match when={data.error}>
                    <div>Error: {data.error.message}</div>
                </Match>
                <Match when={data.latest}>   
                    <div>
                        <h1>Наименование: 
                            {data()?.title}
                        </h1>
                        <h3>Описание: <span class="Text-inter-16px-rewiews-opacity-35"> {data()?.description}</span></h3>
                        <p>Пол: {data()?.gender}</p>
                        <p>Цена: {data()?.price}$</p>
                        <p>Наименование категории: {data()?.category?.name}</p>
                        <div class="flex gap-[1.5rem] px-[1.5rem] py-[1.5rem] "> 
                            {data()?.images.map(el =>
                                <img src={el} alt="" class="w-[10.75rem] h-[17.375rem] " draggable="false"/>)
                            }
                        </div>
                        <button onClick={ () => addInBascket(data()) } class="bg-my-newBlack px-[1.5rem] py-[1.5rem] rounded-[1.5rem] cursor-pointer Text-inter-36px-normal active:bg-my-blueRewiews hover:bg-opacity-50">Добавить в корзину</button>
                    </div>   
                </Match>
            </Switch>
        </div> 
    ) 
}