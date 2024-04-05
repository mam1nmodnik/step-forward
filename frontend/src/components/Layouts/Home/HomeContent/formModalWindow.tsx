import { Match, Switch, createMemo, createSignal } from "solid-js";
import { Portal } from "solid-js/web";
import MyButton from "../../../ui/myButton"
import { addClass , toggleForm,  swipe } from "~/lib/utils"
import { postReviewForm, postOfferForm } from "~/api/api";

import { offerFormType, reviewFormType} from "~/typing/typing";

export default function FormModalWindow(){

    const styleInp = 'w-full border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white'
    const styleBtn = 'w-fit h-fit py-[0.75rem] px-[1.5rem] rounded-[1.5rem]';
    

    
    const [reviewFormContent, setReviewForm] = createSignal<reviewFormType>({
        rated: 0,
        lastName: '',
        firstName: '',
        telegram: '',
        customerКeview: '',
    })
    const updateRated = (e: Event) => {
        if(e.target instanceof HTMLElement){
            const number = Number(e.target.dataset.type);
            setReviewForm({...reviewFormContent(), rated: number});
        }
    }
    createMemo(()=>{
        reviewFormContent()
    })
    const rewiewFormSubmit = (e: Event) => {
        e.preventDefault()
        try{
            postReviewForm( 
                reviewFormContent().rated, 
                reviewFormContent().lastName, 
                reviewFormContent().firstName, 
                reviewFormContent().telegram,
                reviewFormContent().customerКeview
            )
        }catch(error){
            console.log(error);
        }
    }

    const rewiewForm = () => {
        return (
            <form name="reviewForm" class="flex flex-col gap-[1.5rem]">
                <div class="flex gap-[2rem]">
                    <input 
                        type="text" 
                        name="" id="" 
                        class={`${styleInp}`} 
                        placeholder="Имя"
                        value={reviewFormContent().lastName}
                        onInput={ e => setReviewForm({...reviewFormContent(), lastName: e.target.value})}
                        />
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        class={`${styleInp}`} 
                        placeholder="Фамилия"
                        value={reviewFormContent().firstName}
                        onInput={ e => setReviewForm({...reviewFormContent(), firstName: e.target.value})}
                    />                      
                </div>
                <div>
                    <input 
                        type="text" 
                        name="" 
                        id=""  
                        class={`${styleInp}`} 
                        placeholder="Телеграм для связи"
                        value={reviewFormContent().telegram}
                        onInput={ e => setReviewForm({...reviewFormContent(), telegram: e.target.value})}
                    />
                </div>
                <div>
                    <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Ваш отзыв" 
                        class="w-full h-[3rem] border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white"
                        value={reviewFormContent().customerКeview}
                        onInput={ e => setReviewForm({...reviewFormContent(), customerКeview: e.target.value})}
                    ></textarea>
                </div>
                <div class="flex justify-around">
                    <input id="1" class="peer/1 hidden" type="radio" name="status" />
                    <label 
                        onClick={(e: Event) => updateRated(e)}
                        data-type={1} 
                        for="1" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/1:bg-my-blueRewiews peer-checked/1:text-black peer-checked/1:opacity-100 bg-my-newBlack cursor-pointer`}>
                            1
                    </label>
                    <input id="2" class="peer/2 hidden" type="radio" name="status"  />
                    <label 
                        onClick={(e: Event) => updateRated(e)}
                        data-type={2} 
                        for="2" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/2:bg-my-blueRewiews peer-checked/2:text-black peer-checked/2:opacity-100 bg-my-newBlack cursor-pointer`}>
                            2
                    </label>
                    <input id="3" class="peer/3 hidden" type="radio" name="status" />
                    <label 
                        onClick={(e: Event) => updateRated(e)} 
                        data-type={3} 
                        for="3" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/3:bg-my-blueRewiews peer-checked/3:text-black peer-checked/3:opacity-100 bg-my-newBlack cursor-pointer`}>
                            3
                    </label>
                    <input id="4" class="peer/4 hidden" type="radio" name="status"  />
                    <label
                         onClick={(e: Event) => updateRated(e)} 
                         data-type={4} 
                        for="4" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/4:bg-my-blueRewiews peer-checked/4:text-black peer-checked/4:opacity-100 bg-my-newBlack cursor-pointer`}>
                            4
                    </label>
                    <input id="5" class="peer/5 hidden" type="radio" name="status"  />
                    <label
                        onClick={(e: Event) => updateRated(e)} 
                        data-type={5} 
                        for="5" 
                        class={`${styleBtn} Text-inter-24px text-white opacity-50 peer-checked/5:bg-my-blueRewiews peer-checked/5:text-black peer-checked/5:opacity-100 bg-my-newBlack cursor-pointer`}>
                            5
                    </label>
                </div>
                <MyButton class="w-full" description="Отправить" onClick={rewiewFormSubmit}/>
            </form>
        )
    }


    

    const [offerFormContent, setOfferForm] = createSignal<offerFormType>({
        lastName: '',
        firstName: '',
        telegram: '',
        customerКeview: '',
    })
    
    const offerFormSubmit = (e: Event) => {
        e.preventDefault()
        try{
            postOfferForm( 
                offerFormContent().lastName, 
                offerFormContent().firstName, 
                offerFormContent().telegram,
                offerFormContent().customerКeview
            )
        }catch(error){
            console.log(error);
        }
    }

    const offer = () => {
        return (
            <form name="ofer" class="flex flex-col gap-[1.5rem]">
                 <div class="flex gap-[2rem]">
                    <input 
                        type="text" 
                        name="" id="" 
                        class={`${styleInp}`} 
                        placeholder="Имя"
                        value={offerFormContent().lastName}
                        onInput={ e => setOfferForm({...offerFormContent(), lastName: e.target.value})}
                    />
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        class={`${styleInp}`} 
                        placeholder="Фамилия"
                        value={offerFormContent().firstName}
                        onInput={ e => setOfferForm({...offerFormContent(), firstName: e.target.value})}
                    />                      
                </div>
                <div>
                    <input 
                        type="text" 
                        name="" 
                        id=""  
                        class={`${styleInp}`} 
                        placeholder="Телеграм для связи"
                        value={offerFormContent().telegram}
                        onInput={ e => setOfferForm({...offerFormContent(), telegram: e.target.value})}
                    />
                </div>
                <div>
                    <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Ваше предложение" 
                        class="w-full h-[3rem] border-solid border-b-2 border-white bg-my-newBlack73 focus:ring-0 outline-0 px-[0.75rem] py-[0.75rem] Text-inter-24px-white"
                        value={offerFormContent().customerКeview}
                        onInput={ e => setOfferForm({...offerFormContent(), customerКeview: e.target.value})}
                    ></textarea>
                </div>
                <MyButton class="w-full" description="Отправить" onClick={offerFormSubmit}/>
            </form>
        )
    }
    
    return (
        <Portal>

            <div class={`background-blur fixed inset-0 z-[11] z-[101] h-full w-full bg-[rgba(0,0,0,.8)] backdrop-blur  ${addClass().formModal ? '' : "hidden"}  `}> 
                <div class={` min-w-[50vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] select-none ${addClass().formModal ? '' : "hidden"} `}>
                    <div class="flex flex-col w-auto px-[4rem] py-[4rem] p rounded-[3rem] gap-[3rem] bg-my-newBlack73">
                        <div class="flex justify-between">
                            <div class="flex gap-[2rem]">
                                <input id="reviews" class="peer/reviews hidden" type="radio" name="status"  />
                                <label  
                                    datatype="reviews" 
                                    for="reviews" 
                                    id="reviewForm"
                                    class={`${styleBtn} Text-inter-24px bg-my-blueRewiews text-black opacity-100 cursor-pointer`}>
                                        {
                                        addClass().contentFormModal ? 'Отзыв' : "Предложение"
                                        }
                                </label>
                                <input id="offer" class="peer/offer hidden" type="radio" name="status"  />
                                <label 
                                    onClick={swipe}  
                                    datatype="offer" 
                                    for="offer" 
                                    id="ofer"
                                    class={`${styleBtn} Text-inter-24px text-white opacity-50 bg-my-newBlack cursor-pointer hover:opacity-35 active:bg-my-blueRewiews active:opacity-100 active:text-black`}>
                                        {
                                            !addClass().contentFormModal ? 'Отзыв' : "Предложение"
                                        }
                                </label>
                            </div>
                            <img src="/img/svg/closeIconModelForm.svg" alt="" class="w-[2.313rem] cursor-pointer" onclick={toggleForm}/>
                        </div>
                        <Switch fallback={<div>Загрузка...</div>}>
                            <Match when={addClass().contentFormModal}>
                                {rewiewForm()}
                            </Match>
                            <Match when={!addClass().contentFormModal }>
                                {offer()}
                            </Match>
                        </Switch>
                    </div>
                </div>
            </div>

        </Portal>
            
    )
}   

