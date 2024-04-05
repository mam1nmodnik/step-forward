import { createContext, useContext, createSignal } from "solid-js";

const MyContext = createContext();

const Provider = (props: any) => {
  const stringVal = "new value";
  const numberVal = 3;
  const objVal = {
    foo: "bar",
    obj: true,
  };
  const [signal, setSignal] = createSignal("example signal");
  return (
    <MyContext.Provider
      value={{
        stringVal,
        numberVal,
        objVal,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
