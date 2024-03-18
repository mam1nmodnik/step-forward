export default function Footer(){
    return (
        <>
            <div class="flex items-center justify-between w-full px-[3rem] py-[3rem] mb-[1.5rem] mt-[20.313rem]  rounded-[2.5rem] bg-my-blueHeader select-none  ">
                <img src="/img/svg/logo.svg" alt="StepForwardLogo" class="w-[4rem]" draggable="false"/>
                <div class="flex items-center gap-[1.5rem] Text-inter-24px ">
                    <div class="flex gap-[1.5rem] underline decoration-1" >
                        <div class="flex flex-col ">
                            <a href="" >Поддержка</a>
                            <a href="" >Доставка и оплата</a>
                        </div>
                        <div class="flex flex-col ">
                            <a href="" >Возврат и гарантия</a>
                            <a href="" >Подарочные сертификаты</a>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p>Designer <a href="" class="underline decoration-1">Stepan Korovin</a></p>
                        <p>Frontend dev <a href="" class="underline decoration-1">Serebryakov Danil</a></p>
                        <p>Backend dev <a href="" class="underline decoration-1">Davidov Maksim</a></p>
                    </div>   
                </div> 
            </div>
        </>   
    )
}