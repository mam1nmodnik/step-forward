import MyButton from "~/components/ui/myButton";
import { Skeleton } from "~/components/ui/skeleton"
export default function Contacts(){
    return(
        <div class="flex flex-col mt-[4rem]">
            <h1 class="Text-inter-98px">Контакты</h1>
            <div class="flex items-center gap-[1.5rem]">
                <MyButton width="max-w-[29.063rem] min-w-[19.5rem]" description="Оставить предложение"/>
                <a href="#">
                    <img src="/img/svg/inst.svg" alt="" class="bg-my-newBlack px-[0.836rem] py-[0.836rem] rounded-[1.125rem]"/>
                </a>
                <a href="#">
                    <img src="/img/svg/tg.svg" alt="" class="bg-my-newBlack px-[1.523rem] py-[1.523rem] rounded-[1.125rem]"/>
                </a> 
            </div>
        </div>
    )
}