import {  createEffect, For, Index, Match, onMount, Suspense, Switch, useContext } from "solid-js";
import { MyContext } from "~/Context/Provider";
import {  newBasketType, ProductType } from "~/typing/typing";



const basket = () =>  {

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
   
    return (
        <div>    
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Match when={newBasket.Error}>
                        <h1>Error: {newBasket.Error.message}</h1>
                    </Match>
                    <Match when={newBasket.Loading}>
                        <h1>Loading..</h1>
                    </Match>
                    <Match when={newBasket.product.length === 0}>
                        <h1>Корзина пуста</h1>
                    </Match>
                    <Match when={newBasket.product.length >= 1}>
                        <For each={newBasket.product}>
                            {
                                (elem: ProductType, index) => 
                                    <div class="flex gap-x-[1.5rem]">
                                        <h2 data-index={index} > 
                                            {elem.id},
                                            {elem.title},
                                        </h2>
                                        {
                                            elem.count >= 2 ?
                                            <button onClick={() => removeProduct(elem.id)}>Удалить из корзины</button>
                                            : <button onClick={() => removeProduct(elem.id)}>Удалить из корзины</button>
                                        }
                                        
                                    </div>
                            }
                        </For>
                    </Match>
                </Switch>
               
            </Suspense> 
        </div>
    )
}

export default basket;

function createQuery(arg0: () => { queryKey: string[]; queryFn: () => any; }) {
    throw new Error("Function not implemented.");
}
