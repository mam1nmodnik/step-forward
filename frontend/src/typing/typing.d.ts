


export interface Card { 
    id: number;
    title: string;
    body: string;
    price: number;
    count: number;
}
export interface offerFormType {
    lastName: string;
    firstName: string;
    telegram: string;
    customerКeview: string;
}
export interface reviewFormType {
    rated: number;
    lastName: string;
    firstName: string;
    telegram: string;
    customerКeview: string;
}


export interface addClassType {
    formModal: boolean;
    contentFormModal: boolean;
    mobileMenu: boolean;
}

export interface ContextValue {
    id: number;
    name: string;
}

export type Post = {
    id: number
    title: string
    body: string
}



// context basket 
export interface ProductType {
    id: string;
    title: string;
    body: string;
    price: number;
    count: number;
}
export interface newBasketType {
    countBasket: number;
    product: ProductType[];
}
  
  
