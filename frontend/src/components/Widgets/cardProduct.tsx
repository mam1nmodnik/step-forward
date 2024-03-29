interface itemType {    
    link: string; 
    title: string;
    price: string;
}


export default function CardProduct({...props}: itemType){

    return (
        // <a href={props.link}>
            <div class="flex flex-col gap-[3rem] w-[19.5rem] sm3:max-w-[22.938rem] xl:max-w-[20.875rem] 2xl:max-w-[22.75rem] min-w-[20.875rem] h-[38.938rem] p-[1.5rem] bg-my-newBlack  rounded-[1.5rem]">
                <img src="/img/image.png" alt="" class="w-[19.75rem] h-[28.375rem] " draggable="false"/> 
                <div>
                        <p class="Text-inter-24px-card">{props.title}</p>
                        <div class="flex justify-between items-center">
                            <p class="Text-inter-36px">{props.price}</p>
                            <p class="w-[1.5em] text-center bg-white rounded-[0.75rem] px-[0.5rem] py-[4px] Text-inter-24px-price active:bg-my-blueRewiews hover:bg-opacity-50">₽</p>
                        </div>
                </div>
            </div>
        // </a>
    )
}