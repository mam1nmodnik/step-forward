
import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { createSignal } from "solid-js"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// toggle mobile menu
interface addClassType {
  formModal: boolean;
  contentFormModal: boolean;
  mobileMenu: boolean;
}

export const [addClass, setAddClass] = createSignal<addClassType>({
  formModal: false,
  contentFormModal: false,
  mobileMenu: false,
});

export const toggleMenu = () => {
  const body = document.getElementsByTagName("body");
  if(!body){
    return;
  }
  body[0].style.overflow = addClass().mobileMenu ? '' : 'hidden'
  setAddClass( {...addClass(), mobileMenu: !addClass().mobileMenu})
}

export const toggleForm = (e: Event) => {
  const body = document.getElementsByTagName("body");
  if(!body){
    return;
  }
  body[0].style.overflow = addClass().formModal ? '' : 'hidden'
  setAddClass({...addClass(), formModal: !addClass().formModal})
  if (e.target instanceof HTMLElement) {
    const id = e.target.id 
    if(!id){ 
     return;
    }
    if(id === 'offerBtn' ){
      setAddClass({...addClass(), contentFormModal: false})
    } else if(id === 'rewiews'){
      setAddClass({...addClass(), contentFormModal: true})
    }
  }
}

export const swipe = () => {
  setAddClass({...addClass(), contentFormModal: !addClass().contentFormModal})
}

