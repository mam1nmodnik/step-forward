

export default function Footer(){
    const styleText = 'active:text-my-blueRewiews hover:opacity-50 underline decoration-1 active:decoration-my-blueRewiews hover:decoration-opacity-50 text-balance'
    return (
        <>
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-[3rem] py-[3rem] mt-[2.313rem] mb-[1.5rem] rounded-[2.5rem] bg-my-blueHeader select-none  ">        
                    <img src="/img/svg/logo.svg" alt="StepForwardLogo" class="w-[4rem]" draggable="false" />
                    <div class="flex md:flex-row flex-col md:items-center items-start  gap-[1.5rem] Text-inter-24px ">
                        <div class="inline-flex flex-col lg:flex-row  gap-[1.5rem] " >
                            <div class="inline-flex flex-col">
                                <a href=""  class={styleText}>Поддержка</a>
                                <a href="" class={styleText}>Доставка и оплата</a>
                            </div>
                            <div class="flex flex-col ">
                                <a href="" class={styleText}>Возврат и гарантия</a>
                                <a href="" class={styleText}>Подарочные сертификаты</a>
                            </div>
                        </div>
                        <div class="inline-flex flex-col">
                            <p>Designer <a href="" class={styleText}>Stepan Korovin</a></p>
                            <p>Frontend dev <a href="" class={styleText}>Serebryakov Danil</a></p>
                            <p>Backend dev <a href="" class={styleText}>Davydov Maxim</a></p>
                        </div>   
                    </div> 
                </div>
        </>   
    )
}