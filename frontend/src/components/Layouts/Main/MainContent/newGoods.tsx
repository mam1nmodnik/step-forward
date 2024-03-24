import { Show } from "solid-js";
import CardProduct from "../../../../components/Widgets/cardProduct";
import { Skeleton } from "~/components/ui/skeleton";
import { addClass, toggleMenu } from "~/lib/utils";


let array = [
    {link: '#', title: 'Название товара', price: 'цена товара'},
    {link: '#', title: 'Название товара', price: 'цена товара'}, 
    {link: '#', title: 'Название товара', price: 'цена товара'}, 
    {link: '#', title: 'Название товара', price: 'цена товара'}, 
]
    const content = array.map((item) => (
        <CardProduct {...item} />
    ))

    const skelet =  array.map(() => (
        <Skeleton class=" flex flex-col gap-[3rem] w-[22.75rem] h-[38.938rem] p-[1.5rem] rounded-[1.5rem]">
            <Skeleton class="w-[19.75rem] h-[28.375rem] "/>
            <div class="flex flex-col gap-[1rem]">
                <Skeleton class="w-[13rem] h-[2rem]"/>
                <div class="flex justify-between items-center">
                    <Skeleton class="w-[13rem] h-[2rem]"/>
                    <Skeleton class="w-[1.5em] h-[2rem]  text-center  rounded-[0.75rem] px-[0.5rem] py-[4px] Text-inter-24px-price active:bg-my-blueRewiews hover:bg-opacity-50"/>
                </div>
            </div>
        </Skeleton>
    ))

export default function NewGoods(){
    return (
        <div class="lg:mt-[3rem] select-none w-full ">
            <div class="flex justify-between mb-[1.5rem]">
                <h1 class="Text-inter-98px">Новинки</h1>
                <img src="/img/svg/mobButton.svg" alt="" class={` block lg:hidden  w-[4.875rem] ${addClass().mobileMenu ? "hidden" : ""}`} onClick={toggleMenu}/>
            </div> 
            <div class="not-prose   rounded-xl overflow-hidden ">
                <div class=" rounded-xl overflow-auto">
                    <div class="max-w-md sm:max-w-[38.5rem] md:max-w-[51rem] lg:min-w-[62rem] lg:max-w-[64.8rem] xl:max-w-[71.875rem] 2xl:max-w-[88rem] 3xl:max-w-[95.5rem] mx-auto  shadow-xl min-w-0">
                        <div class="flex flexgap:gap-x-[1.5rem] gap-x-[0.8rem]">
                            <Show when={content} fallback={skelet}>
                                {content}
                            </Show>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


