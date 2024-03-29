import { Show } from "solid-js";
import MyButton from "~/components/ui/myButton";
import { Skeleton } from "~/components/ui/skeleton";
import { toggleForm } from "~/lib/utils"


let array:any = []
    

const content = array.map(({item, index}: any) => {
    if(index < 6){
        return (
            <div class="flex flex-col gap-[0.75rem] bg-my-newBlack  2xl:max-w-[29.375rem] h-[16.5rem] px-[1.5rem] 2xl:px-[3rem] py-[3rem] rounded-[3rem] ">
                <div class="flex items-center justify-between ">
                    <div class="flex items-center gap-[0.75rem]">
                        <img src="https://avatars.githubusercontent.com/u/105350465?s=400&u=d09c4279f7ad8f44554c44466d32f6a9381ba007&v=4" alt="" class="w-[6rem] h-[6rem] rounded-[16rem]" draggable="false"/>
                        <p class="Text-inter-36px-medium-white">{item.name}</p>
                    </div>                            
                    <div class="flex items-center justify-center min-w-[3.375rem] h-[3.375rem] rounded-[5.938rem] box-border border-[0.063rem] border-solid border-[#B0E3F9]" >
                        <p class="Text-inter-24px-rewiews">{item.rewiews}/5</p>
                    </div>
                </div>
                <p class="Text-inter-24px-rewiews-opacity-75">{item.description}</p>
                <p class="Text-inter-16px-rewiews-opacity-35">{item.date}</p>
            </div>
        )
    } 
})

    const skelet = array.map(({item, index}: any) => {
        if(index < 6){
            return (
                <Skeleton class="flex flex-col gap-[0.75rem]  w-[29.375rem] h-[16.5rem] px-[3rem] py-[3rem] rounded-[3rem] ">
                    <div class="flex items-center justify-between ">
                        <div class="flex items-center gap-[0.75rem]">
                            <Skeleton class="w-[6rem] h-[6rem] rounded-[16rem]"/>
                            <Skeleton class="Text-inter-36px-medium-white  w-[9.375rem] h-[2.375rem]"/>
                        </div>                            
                        <Skeleton class="Text-inter-24px-rewiews min-w-[3.375rem] h-[3.375rem] rounded-[5.938rem]"/> 
                    </div>
                    <Skeleton class="Text-inter-24px-rewiews-opacity-75 w-[15.375rem] h-[2.375rem]  "/>
                    <Skeleton class="Text-inter-16px-rewiews-opacity-35 w-[5.375rem] h-[2.375rem]"/>
                </Skeleton>
            )   
        }
    })

export default function Rewiews(){
    return (
        <div class="mt-[3rem] select-none w-full">
            <div class="flex flex-col sm2:flex-row items-start sm2:items-end justify-between mb-[1.5rem]">
                <h1 class="Text-inter-98px">Отзывы клиентов</h1>
                <Show when={content.length > 0}>
                    <a href="" class="Text-inter-24px active:text-my-blueRewiews hover:opacity-50">Больше отзывов</a>
                </Show>  
            </div>
            <Show when={content.length > 0} 
                fallback={
                    <p class="Text-inter-36px-normal-black text-center mt-[2rem] mb-[2rem]">
                        Будьте первым, кто оставит отзыв! Ваше мнение важно для нас.
                    </p>
                }  
            >
                <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-x-[3.688rem] gap-y-[1.5rem] mb-[2rem]">
                    <Show when={content} fallback={skelet}>
                        {content}
                    </Show>
                </div>
            </Show>
            <MyButton 
                class="w-full" 
                description="Оставить отзыв" 
                onClick={(e: Event) => toggleForm(e)}
                id="rewiews"
            />
        </div>
    )
}