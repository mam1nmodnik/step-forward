import { createContext } from "solid-js";

export interface ContextValue {
  id: number;
  name: string;
}

export const MyContext = createContext<ContextValue>();

export const Provider = (props: any) => {
  const params: ContextValue = 
  { 
    id: 5,
    name: 'Danil'
  };
  return (
    <MyContext.Provider
      value={
        params
      }
    >
      {props.children}
    </MyContext.Provider>
  );
};