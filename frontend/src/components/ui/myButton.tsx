import { JSX, children } from "solid-js";

interface myButtonType {
    class: string;
    description: string;
    id?: string;
    onClick?: (e: Event) => void;
}

export default function MyButton({...props}: myButtonType): JSX.Element{
    const child = children(() => props.description)
    return(
        <button 
            type="submit"
            class={`bg-my-newBlack ${props.class} px-[1.5rem] py-[1.5rem] rounded-[1.5rem] cursor-pointer Text-inter-36px-normal active:bg-my-blueRewiews hover:bg-opacity-50`} 
            onClick={props.onClick}
            id={props.id}
        >
            { child() }
        </button>
    )
}