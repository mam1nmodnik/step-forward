import { addClass , toggleMenu } from "~/lib/utils"
import { For, useContext } from "solid-js"
import { A } from "solid-start"
import { Portal } from "solid-js/web"

import header from '~/json/headerLink.json'
import headerIcon from '~/json/headerLinkIcon.json'

import { MyContext } from "~/Context/Provider"

export default function MobileMenu() {
   
    const styletext  = "Text-inter-24px active:text-my-blueRewiews hover:opacity-50"
    const { newBasket } = useContext(MyContext);
    return (
        <>
        <Portal>
            <div class={`w-full absolute top-0 left-0 ${addClass().mobileMenu ? '' : "hidden"}  `}>
                <div class={`background-blur fixed inset-0 z-[11] z-[101] h-full w-full bg-[rgba(0,0,0,.8)] backdrop-blur ${addClass().mobileMenu? '' : "hidden"} `}>  
                    <div class={`flex flex-col justify-between gap-[1.2rem] w-full h-fit px-[3rem] py-[1.5rem] rounded-[2.5rem] bg-my-blueHeader select-none transition-all duration-500 ${addClass().mobileMenu? 'translate-none opacity-1' : "translate-x-[35rem] opacity-0"} `}>
                            <div class="flex items-start justify-between ">
                                <img src="/img/svg/closeIcon.svg" alt="closet" class="w-[3rem] cursor-pointer" draggable="false" onclick={toggleMenu}/>
                                <A href="/" onclick={toggleMenu}>
                                    <img src="/img/svg/logo.svg" alt="StepForwardLogo" class="w-[4rem] cursor-pointer" draggable="false"/>
                                </A>
                            </div>
                            <div class=" flex flex-col items-end gap-[1.2rem]">
                                <div class="flex flex-col items-end gap-[0.75rem] ">
                                    <For each={header} fallback={<div>Загрузка...</div>}>
                                        {(item, index) => (
                                            <A href={item.link} class={styletext} onclick={toggleMenu}>
                                                {item.title}
                                            </A>
                                        )}
                                    </For>
                                </div>
                                <div class="flex gap-[1.5rem] "> 
                                    <For each={headerIcon} fallback={<div>Загрузка...</div>}>
                                        {(item, index) => {
                                                if( item.link === '/basket'){
                                                    return (
                                                        <A  href={item.link} class="relative" onclick={toggleMenu}>
                                                            <img src={item.linkIcon} alt="" class="w-[2rem]" draggable="false"/>
                                                            {
                                                                newBasket.countBasket ? <span class="absolute top-[-0.2rem] right-[-0.4rem] font-sans font-medium text-[1rem] leading-[1.1rem]  text-black px-[0.2rem] bg-red-400 rounded-[1rem]">{newBasket.countBasket}</span> : null
                                                            }
                                                           
                                                        </A>
                                                    )
                                                } else {
                                                    return (
                                                        <A  href={item.link} onclick={toggleMenu}>
                                                            <img src={item.linkIcon} alt="" class="w-[2rem]" draggable="false"/>
                                                        </A> 
                                                    )
                                                }  
                                            }
                                        }   
                                    </For>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Portal>
           
        </>


        
    )
}