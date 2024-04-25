import {  For, Match,  Suspense, Switch, useContext } from "solid-js";
import { MyContext } from "~/Context/Provider";
import { ProductType } from "~/typing/typing";



const basket = () =>  {
    const stbtn = 'hover:bg-gray-900 bg-gray-200 hover:text-white rounded-[0.75rem] px-[1.5rem] py-[0.5rem] Text-inter-24px-price'
    const { newBasket, setNewBasket } = useContext(MyContext);
    const updateBasket = (updatedProducts: ProductType[]) => {
        const updatedBasket = { ...newBasket, countBasket: updatedProducts.length,  product: updatedProducts };
        setNewBasket(updatedBasket);
        setNewBasket('countBasket', updatedProducts.length);
        localStorage.removeItem('basket');
        localStorage.setItem('basket', JSON.stringify(updatedBasket));
    }

    const removeProduct = (id: string): void => {
        const updatedProducts = newBasket.product.filter((elem: ProductType) => elem.id !== id);
        updateBasket(updatedProducts);
    }

    const addOneToCart = (id: string): void => {      
    }
    const removeOneFromTheCart = (id: string) => {
        setNewBasket( "product", (elem: ProductType[]) => {
        elem.forEach((el: ProductType) => {
            if(el.id === id){
                if(Number(el.id) > 1) {
                    Number(el.id) + 1;
                } else if (Number(el.id) === 1) {
                    Number(el.id);
                }
            }       
        })
        })
    }

    return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Match when={newBasket.Error}>
                        <h1>Error: {newBasket.Error.message}</h1>
                    </Match>
                    <Match when={newBasket.product === undefined}>
                        <h1>Loading...</h1>
                    </Match>
                    <Match when={newBasket.product.length === 0}>
                        <h1>Корзина пуста</h1>
                    </Match>
                    <Match when={newBasket.product.length >= 1}>
                        <div class="flex flex-col gap-[1.5rem]">
                            <For each={newBasket.product} >
                                {
                                    (elem: ProductType, index) => (
                                    
                                            <div class="flex items-center">
                                                <h1 data-index={index} > 
                                                    id: {elem.id},
                                                </h1>
                                                <p>Количество: {elem.count}</p>
                                                <div class="flex flex-col ">
                                                    {
                                                        elem.count >= 2 
                                                        ?
                                                            <div class="flex flex-col gap-[1.5rem] ">
                                                                <button onClick={() => addOneToCart(elem.id)}
                                                                    class={stbtn}
                                                                >
                                                                    Добавить 1 шт. в корзину
                                                                </button>
                                                                <button 
                                                                    onClick={() => removeOneFromTheCart(elem.id)}
                                                                    class={stbtn}
                                                                >
                                                                    Удалить 1 шт. из корзины
                                                                </button>
                                                            </div>
                                                        : 
                                                            <div class="flex flex-col gap-[1.5rem]">
                                                                <button 
                                                                    onClick={() => addOneToCart(elem.id)}
                                                                    class={stbtn}
                                                                >
                                                                    Добавить 1 шт. в корзину
                                                                </button>
                                                                <button 
                                                                    onClick={() => removeProduct(elem.id)}
                                                                    class={stbtn}
                                                                >
                                                                    Удалить из корзины
                                                                </button>
                                                            </div>       
                                                    }
                                                </div>
                                            </div>
                                    )  
                                }
                            </For>
                        </div>
                    </Match>
                </Switch>  
            </Suspense> 
    )
}

export default basket;
