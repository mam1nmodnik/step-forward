
import { createSignal } from "solid-js";
import MyButton from "../ui/myButton"
import { addClass , toggleFormClose } from "~/lib/utils"


export default function FormModalWindow(){
    const styleBtn = 'w-fit h-fit py-[0.75rem] px-[1.5rem] rounded-[1.5rem]'

 
    const [replase, setReplase] = createSignal<boolean>(false)
    
    let ofer: any;
    let reviewForm: any;
    const swap = (e: Event) => {  
        setReplase(!replase())
        console.log(replase())
    }
    
    const rewiewForm = () => {
        return (
            <form name="reviewForm" class="reviewForm peer-checked/reviews:block flex flex-col gap-[1.5rem]" ref={reviewForm}>
                <div class="flex gap-[2rem]">
                    <input type="text" name="" id="" class="w-full border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0  px-[0.75rem] py-[0.75rem] Text-inter-24px-white " placeholder="Имя"/>
                    <input type="text" name="" id="" class="w-full border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white" placeholder="Фамилия"/>                      
                </div>
                <div>
                    <input type="text" name="" id=""  class="w-full border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white" placeholder="Телеграм для связи"/>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" class="w-full h-[3rem] border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white"></textarea>
                </div>
                <div class="flex justify-around">
                    <input id="1" class="peer/1 hidden" type="radio" name="status" />
                    <label  
                        datatype="1" 
                        for="1" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/1:bg-my-blueRewiews peer-checked/1:text-black peer-checked/1:opacity-100 bg-my-newBlack cursor-pointer`}>
                            1
                    </label>
                    <input id="2" class="peer/2 hidden" type="radio" name="status"  />
                    <label 
                        datatype="2" 
                        for="2" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/2:bg-my-blueRewiews peer-checked/2:text-black peer-checked/2:opacity-100 bg-my-newBlack cursor-pointer`}>
                            2
                    </label>
                    <input id="3" class="peer/3 hidden" type="radio" name="status" />
                    <label  
                        
                        datatype="3" 
                        for="3" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/3:bg-my-blueRewiews peer-checked/3:text-black peer-checked/3:opacity-100 bg-my-newBlack cursor-pointer`}>
                            3
                    </label>
                    <input id="4" class="peer/4 hidden" type="radio" name="status"  />
                    <label 
                       
                        datatype="4" 
                        for="4" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/4:bg-my-blueRewiews peer-checked/4:text-black peer-checked/4:opacity-100 bg-my-newBlack cursor-pointer`}>
                            4
                    </label>
                    <input id="5" class="peer/5 hidden" type="radio" name="status"  />
                    <label 
                        datatype="5" 
                        for="5" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/5:bg-my-blueRewiews peer-checked/5:text-black peer-checked/5:opacity-100 bg-my-newBlack cursor-pointer`}>
                            5
                    </label>
                </div>
                <MyButton width="w-full" description="Отправить"/>
            </form>
        )
    }

    const offer = () => {
        return (
            <form name="ofer" class="block peer-checked/offer:hidden flex flex-col gap-[1.5rem]" ref={ofer}>
                 <div class="flex gap-[2rem]">
                    <input type="text" name="" id="" class="w-full border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0  px-[0.75rem] py-[0.75rem] Text-inter-24px-white" placeholder="Имя"/>
                    <input type="text" name="" id="" class="w-full border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white" placeholder="Фамилия"/>                      
                </div>
                <div>
                    <input type="text" name="" id=""  class="w-full border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white" placeholder="Телеграм для связи"/>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" class="w-full h-[3rem] border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white"></textarea>
                </div>
                <MyButton width="w-fill" description="Отправить" />
            </form>
        )
    }
    
    return (
        <div class={`background-blur fixed inset-0 z-[11] z-[101] h-full w-full bg-[rgba(0,0,0,.8)] backdrop-blur  ${addClass().formModal ? '' : "hidden"}  `}> 
        <div class={` min-w-[50vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${addClass().formModal ? '' : "hidden"}`}>
                <div class="flex flex-col w-auto px-[4rem] py-[4rem] p rounded-[3rem] gap-[3rem] bg-my-newBlack73  ">
                    <div class="flex justify-between">
                        <div class="flex gap-[2rem]">
                            <input id="reviews" class="peer/reviews hidden" type="radio" name="status"  />
                            <label  
                                onClick={swap}
                                datatype="reviews" 
                                for="reviews" 
                                id="reviewForm"
                                class={`${styleBtn} Text-inter-24px bg-my-blueRewiews text-black opacity-100 cursor-pointer`}>
                                    {replase() ? "Отзыв" : "Предложение"}
                            </label>
                            <input id="offer" class="peer/offer hidden" type="radio" name="status"  />
                            <label 
                                onClick={swap}  
                                datatype="offer" 
                                for="offer" 
                                id="ofer"
                                class={`${styleBtn} Text-inter-24px text-white opacity-50 bg-my-newBlack cursor-pointer`}>
                                    {
                                        !replase() ? "Отзыв" : "Предложение"
                                    }
                            </label>
                        </div>
                        <img src="/img/svg/closeIconModelForm.svg" alt="" class="w-[2.313rem] cursor-pointer" onclick={toggleFormClose}/>
                    </div>
                        {
                            replase() ? rewiewForm() : offer()
                        }
                </div>
            </div>
        </div>
        
    )
}   

