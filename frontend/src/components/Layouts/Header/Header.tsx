import { A } from "@solidjs/router"
import { For, useContext } from "solid-js";
import {  toggleMenu } from "~/lib/utils"

import MobileMenu from "./HeaderMobileMenu"
import header from '~/json/headerLink.json'
import headerIcon from '~/json/headerLinkIcon.json'
import { MyContext } from "~/Context/Provider";

export default function Header(){
    const styletext = "Text-inter-24px active:text-my-blueRewiews hover:opacity-50 "
    const { newBasket } = useContext(MyContext);
   
    return (
        <>
            <img src="/img/svg/mobButton.svg" alt="" class={` block lg:hidden  w-[4.875rem] cursor-pointer`} onClick={toggleMenu}/>
            <MobileMenu/>
            <div class="lg:flex items-center justify-between lg:w-full h-[5rem] px-[3rem] py-[1.5rem] rounded-[2.5rem]  bg-my-blueHeader hidden select-none">
               <A href="/"><img src="/img/svg/logo.svg" alt="StepForwardLogo" class="w-[4rem] cursor-pointer " draggable="false"/></A>
                
                    <div class="flex items-center gap-[1.5rem] ">
                        <For each={header} fallback={<div>Загрузка...</div>}>
                            {(item, index) => (
                                <A href={item.link} class={styletext}>
                                    {item.title}
                                </A>
                            )}
                        </For>
                    </div>

                    <div class="flex gap-[1.5rem]">
                        <For each={headerIcon} fallback={<div>Загрузка...</div>}>
                            {(item, index) => {
                                if( item.link === '/basket'){
                                    return (
                                        <A  href={item.link} class="relative">
                                            <img src={item.linkIcon} alt="" class="w-[2rem]" draggable="false"/>
                                            {
                                                newBasket.countBasket ? <span class="absolute top-[-0.2rem] right-[-0.4rem] font-sans font-medium text-[1rem] leading-[1.1rem]  text-black px-[0.2rem] bg-red-400 rounded-[1rem]">{newBasket.countBasket}</span> : null
                                            }
                                           
                                        </A>
                                    )
                                }  else{
                                    return (
                                        <A  href={item.link}>
                                            <img src={item.linkIcon} alt="" class="w-[2rem]" draggable="false"/>
                                        </A> 
                                    )
                                } 
                            }}
                        </For>
                    </div>
            </div>
        </>
    )
}