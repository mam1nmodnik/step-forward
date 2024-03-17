import MyButton from "~/components/ui/myButton";
import { Skeleton } from "~/components/ui/skeleton"
export default function Contacts(){
    return(
        <div class="flex flex-col">
            <h1 class="Text-inter-98px">Контакты</h1>
            <div class="flex">
                <MyButton width="max-w-[29.063rem] min-w-[19.5rem]" description="Оставить предложение"/>
            </div>
        </div>
    )
}