interface itemType {    
    link: string; 
    title: string;
    price: string;
}


export default function CardProduct({...item}: itemType){

    return (
        <a href={item.link}>
            <div class="flex flex-col gap-[3rem] w-[22.75rem] h-[38.938rem] p-[1.5rem] bg-my-newBlack  rounded-[1.5rem]">
                <img src="/img/image.png" alt="" class="w-[19.75rem] h-[28.375rem] "/> 
                <div>
                        <p class="Text-inter-24px-card">{item.title}</p>
                        <div class="flex justify-between items-center">
                            <p class="Text-inter-36px">{item.price}</p>
                            <p class="w-[1.5em] text-center bg-white rounded-[0.75rem] px-[0.5rem] py-[4px] active:bg-active-btnPrice   Text-inter-24px-price ">₽</p>
                        </div>
                </div>
            </div>
        </a>
    )
}