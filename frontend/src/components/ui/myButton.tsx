import { JSX } from "solid-js";

 interface myButtonType{
    width: string;
    description: string;
    onClick?: ()=> void;
 }


export default function MyButton({...props}: myButtonType): JSX.Element{
    return(
        <button type="submit" class={`bg-my-newBlack ${props.width} px-[1.5rem] py-[1.5rem] rounded-[1.5rem] cursor-pointer Text-inter-36px-normal active:bg-my-blueRewiews hover:bg-opacity-50`} onClick={props.onClick}>
            {props.description}
        </button>
    )
}