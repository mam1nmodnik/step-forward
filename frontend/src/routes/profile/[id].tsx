import {  useContext } from "solid-js";
import { Title, useParams } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import { MyContext } from "~/Context/Provider";


const User = () => {
 
  const param = useParams()
  return (
    <>
      <Title>Profile</Title>
      <div class="flex justify-center">
      {
        param.id == param.id 
        ? <h1 class="Text-inter-36px-normal-black " >ID :{param.id}</h1> 
        : <h1 class="Text-inter-36px-normal-black items-center" >В разработке...</h1>
      }
     </div>
    </>
  );
};
export default User;