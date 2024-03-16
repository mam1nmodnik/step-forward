import About from "./MainContent/about";
import NewGoods from "./MainContent/newGoods";
import Rewiews from "./MainContent/rewiews";

export default function Main(){
    return (
        <div>
            <NewGoods />
            <About/>
            <Rewiews/>
        </div>
    )
}