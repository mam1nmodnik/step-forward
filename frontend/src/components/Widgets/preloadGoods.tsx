import { Skeleton } from "~/components/ui/skeleton";
import { JSXElement } from "solid-js"

  
export default function PreloadGoods(): JSXElement{
    return (
        <Skeleton class="flex flex-col gap-[3rem] w-[22.75rem] h-[38.938rem] p-[1.5rem] rounded-[1.5rem]">
            <Skeleton class="w-[19.75rem] h-[28.375rem] "/>
            <div class="flex flex-col gap-[1rem]">
                <Skeleton class="w-[13rem] h-[2rem]"/>
                <div class="flex justify-between items-center">
                    <Skeleton class="w-[13rem] h-[2rem]"/>
                    <Skeleton class="w-[1.5em] h-[2rem]  text-center  rounded-[0.75rem] px-[0.5rem] py-[4px] Text-inter-24px-price "/>
                </div>
            </div>
        </Skeleton>  
    )
}