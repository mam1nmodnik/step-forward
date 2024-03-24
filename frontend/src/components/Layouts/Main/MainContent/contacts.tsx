import MyButton from "~/components/ui/myButton";
import { toggleForm } from "~/lib/utils"
export default function Contacts(){
    return(
        <div class=" mt-[4rem] select-none w-full">
            <div class="flex flex-col">
                <h1 class="Text-inter-98px">Контакты</h1>
                <div class="flex flex-col md:flex-row items-start md:items-center  gap-[1.5rem] w-full ">
                    <MyButton 
                        class="w-full md:max-w-[29.063rem] md:min-w-[19.5rem]" 
                        description="Оставить предложение" 
                        onClick={(e: Event) => toggleForm(e)} 
                        id="offerBtn"
                    />
                    <div class="inline-flex flex-row gap-[1.5rem]">
                        <a href="#">
                            <img src="/img/svg/inst.svg" alt="" draggable="false" 
                                class="bg-my-newBlack w-[6rem] h-[6rem] px-[0.836rem] py-[0.836rem] rounded-[1.125rem] active:bg-my-blueRewiews  hover:px-[1.1rem] hover:py-[1.1rem] hover:rounded-[2.1rem] transition-all  duration-500 delay-400"
                            />
                        </a>
                        <a href="#">
                            <img src="/img/svg/tg.svg" alt="" draggable="false" 
                                class="overflow-visible bg-my-newBlack  w-[6rem] h-[6rem] px-[1.2rem] py-[1.2rem] rounded-[1.125rem] active:bg-my-blueRewiews  hover:px-[1.3rem] hover:py-[1.3rem] hover:rounded-[2.1rem] transition-all duration-500 delay-400" 
                            />
                        </a> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}