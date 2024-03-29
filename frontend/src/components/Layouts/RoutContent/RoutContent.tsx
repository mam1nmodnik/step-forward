import { JSX } from "solid-js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function RoutContent(props: {children: JSX.Element}): JSX.Element{
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
    )
}