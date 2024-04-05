import { useContext } from "solid-js";

export const Child = () => {
    const { stringVal, numberVal } = useContext(MyContext); // only access the values you need through destructuring
    return (
      <>
        <h1>{stringVal}</h1>
        <span>{numberVal}</span>
      </>
    );
  }