import { Show } from "solid-js";
import CardProduct from "../../../../components/Widgets/cardProduct";

let array = [
    {link: '#', title: 'Название товара', price: 'цена товара'},
    
]
    const content = array.map((item) => (
        <CardProduct {...item} />
    ))

export default function NewGoods(){
    return (
        <div class="mt-[3rem] select-none">
            <h1 class="Text-inter-98px">Новинки</h1>
            <div class="flex justify-between">
                <Show when={content} fallback='Загрузка'>
                    {content}
                </Show>
            </div>
        </div>
    )
}


