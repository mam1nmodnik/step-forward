export default function Header(){
    const styletext = "Text-inter-24px active:text-my-blueRewiews hover:opacity-50 "
    return (
        <>
            <div class="lg:flex items-center justify-between lg:w-full h-[5rem] px-[3rem] py-[1.5rem] rounded-[2.5rem]  bg-my-blueHeader hidden select-none">
                <img src="/img/svg/logo.svg" alt="StepForwardLogo" class="w-[4rem]" draggable="false"/>
                
                    <div class="flex items-center gap-[1.5rem] ">
                        <a href="" class={styletext}>Новинки</a>
                        <a href="" class={styletext}>Мужское</a>
                        <a href="" class={styletext}>Женское</a>
                        <a href="" class={styletext}>Бренды</a>
                        <a href="" class={styletext}>Sale</a>
                    </div>
                    <div class="flex gap-[1.5rem]">
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
        </>
    )
}