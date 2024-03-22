
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
  mobileMenu: boolean;
}

export const [addClass, setAddClass] = createSignal<addClassType>({
  formModal: false,
  mobileMenu: false,
});

export const toggleMenuClose = () => {
    const body = document.getElementsByTagName("body");
    if(!body){
      return;
    }
    body[0].style.overflow = addClass() ? '' : 'hidden'
    setAddClass( {...addClass(), mobileMenu: !addClass().mobileMenu})
} 

export const toggleMenuOpen = () => {
  const body = document.getElementsByTagName("body");
  if(!body){
    return;
  }
  body[0].style.overflow = !addClass() ? 'hidden' : ''
  setAddClass({...addClass(), mobileMenu: !addClass().mobileMenu})
} 


export const toggleFormClose = () => {
  const body = document.getElementsByTagName("body");
  if(!body){
    return;
  }
  body[0].style.overflow = addClass() ? '' : 'hidden'
  setAddClass( {...addClass(), formModal: !addClass().formModal})
} 

export const toggleFormOpen = () => {
const body = document.getElementsByTagName("body");
if(!body){
  return;
}
body[0].style.overflow = !addClass() ? 'hidden' : ''
setAddClass({...addClass(), formModal: !addClass().formModal})
} 
