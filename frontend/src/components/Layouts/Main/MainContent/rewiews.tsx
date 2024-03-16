import { Show } from "solid-js";



let array = [
    {name: 'олег', rewiews: '4', description: 'блин класс круто', date: '10.03.2024'},
    {name: 'мама максима', rewiews: '5', description: 'блин класс круто', date: '10.03.2024'},
    {name: 'папа максима', rewiews: '1', description: 'ну такое', date: '10.03.2024'},
    {name: 'максим', rewiews: '4', description: 'блин класс круто', date: '10.03.2024'},
]
    const content = array.map((item) => (
        <div class="flex flex-col gap-[0.75rem] bg-my-newBlack w-[29.375rem] h-[16.5rem] px-[3rem] py-[3rem] rounded-[3rem] ">
            <div class="flex items-center justify-between ">
                <div class="flex items-center gap-[0.75rem]">
                    <img src="https://avatars.githubusercontent.com/u/105350465?s=400&u=d09c4279f7ad8f44554c44466d32f6a9381ba007&v=4" alt="" class="w-[6rem] h-[6rem] rounded-[16rem]"/>
                    <p class="Text-inter-36px-medium-white">{item.name}</p>
                </div>                            
                <div class="flex items-center justify-center w-[3.375rem] h-[3.375rem] rounded-[5.938rem] box-border border-[0.063rem] border-solid border-[#B0E3F9]" >
                    <p class="Text-inter-24px-rewiews">{item.rewiews}/5</p>
                </div>
            </div>
            <p class="Text-inter-24px-rewiews-opacity-75">{item.description}</p>
            <p class="Text-inter-16px-rewiews-opacity-35">{item.date}</p>
        </div>
    ))

export default function Rewiews(){
    return (
        <div class="mb-[200px] mt-[3rem]">
            <div class="flex items-end justify-between mb-[1.5rem]">
                <h1 class="Text-inter-98px">Отзывы клиентов</h1>
                <a href="">Больше отзывов</a>
            </div>
            <div class="flex flex-wrap gap-[3.688rem]">
                <Show when={content} fallback={<p>Загрузка</p>}>
                    {content}
                </Show>
            </div>
        </div>
    )
}