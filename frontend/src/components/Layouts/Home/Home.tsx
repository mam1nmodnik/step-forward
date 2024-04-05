import About from "./HomeContent/about";
import Contacts from "./HomeContent/contacts";
import NewGoods from "./HomeContent/newGoods/newGoods";
import Rewiews from "./HomeContent/rewiews";
import FormModalWindow from "~/components/Layouts/Home/HomeContent/formModalWindow";

export default function Home(){

    return (
        <>  
            <FormModalWindow /> 
            <NewGoods />
            <About />
            <Rewiews />
            <Contacts />
        </>
    )
}