



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

interface categoryType {
    creationAt: string;
    updatedAt: string;
    id: number;
    name: string;
    image: string;
}
export type ImgesType = string;

export interface ProductType {
    id: string;
    title: string;
    body: string;
    price: number;
    count: number;
    gender: string;
    description: string;
    images: ImgesType[];
    category: categoryType;
}
export interface BasketType {
    countBasket: number;
    product: ProductType[];
}

