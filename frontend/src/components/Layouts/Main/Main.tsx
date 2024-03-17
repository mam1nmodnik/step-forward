import About from "./MainContent/about";
import Contacts from "./MainContent/contacts";
import NewGoods from "./MainContent/newGoods";
import Rewiews from "./MainContent/rewiews";

export default function Main(){
    return (
        <div>
            <NewGoods />
            <About/>
            <Rewiews/>
            <Contacts/>
        </div>
    )
}