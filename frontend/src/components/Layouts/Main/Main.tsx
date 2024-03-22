import FormModalWindow from "~/components/Widgets/formModalWindow";
import About from "./MainContent/about";
import Contacts from "./MainContent/contacts";
import NewGoods from "./MainContent/newGoods";
import Rewiews from "./MainContent/rewiews";

export default function Main(){
    return (
        <>  
            <NewGoods />
            <About />
            <Rewiews />
            <Contacts />
            <FormModalWindow />
        </>
    )
}