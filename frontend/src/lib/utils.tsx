
import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { createSignal } from "solid-js"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// toggle mobile menu
export const [addClass, setAddClass] = createSignal<boolean>(false);
export const toggleMenuClose = () => {
    const body = document.getElementsByTagName("body");
    if(!body){
      return;
    }
    body[0].style.overflow = addClass() ? 'auto' : 'hidden'
    setAddClass(!addClass())
} 

export const toggleMenuOpen = () => {
  const body = document.getElementsByTagName("body");
  if(!body){
    return;
  }
  body[0].style.overflow = !addClass() ? 'hidden' : 'auto'
  setAddClass(!addClass())
} 
