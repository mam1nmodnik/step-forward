import { addClass , toggleMenuClose } from "~/lib/utils"

export default function MobileMenu() {
   
    const styletext  = "Text-inter-24px active:text-my-blueRewiews hover:opacity-50"
    
    return (
        <>
            <div class={`w-full absolute top-0 left-0 ${addClass() ? '' : "hidden"}`}>
                <div class={`background-blur fixed inset-0 z-[11] z-[101] h-full w-full bg-[rgba(0,0,0,.8)] backdrop-blur ${addClass()? '' : "hidden"} `}>  
                    <div class="flex flex-col  justify-between gap-[1.2rem] w-full h-fit px-[3rem] py-[1.5rem] rounded-[2.5rem] bg-my-blueHeader select-none">
                            <div class="flex items-start justify-between ">
                                <img src="/img/svg/closeIcon.svg" alt="closet" class="w-[3rem]" draggable="false" onclick={toggleMenuClose}/>
                                <img src="/img/svg/logo.svg" alt="StepForwardLogo" class="w-[4rem]" draggable="false"/>
                            </div>
                            
                            <div class=" flex flex-col items-end gap-[1.2rem]">
                                <div class="flex flex-col items-end gap-[0.75rem] ">
                                    <a href="" class={styletext}>Новинки</a>
                                    <a href="" class={styletext}>Мужское</a>
                                    <a href="" class={styletext}>Женское</a>
                                    <a href="" class={styletext}>Бренды</a>
                                    <a href="" class={styletext}>Sale</a>
                                </div>
                                <div class="flex gap-[1.5rem] ">
                                    <a href="">
                                        <img src="/img/svg/search.svg" alt="" class="w-[2rem]" draggable="false"/>
                                    </a>
                                    <a href="">
                                        <img src="/img/svg/profile.svg" alt="" class="w-[2rem]" draggable="false"/>
                                    </a>
                                    <a href="">
                                        <img src="/img/svg/heart.svg" alt="" class="w-[2rem]" draggable="false"/>
                                    </a>
                                    <a href="">
                                        <img src="/img/svg/bag.svg" alt="" class="w-[2rem]" draggable="false"/>
                                    </a>
                                </div>
                            </div>
                           
                    </div>
                </div>
            </div>
        </>


        
    )
}