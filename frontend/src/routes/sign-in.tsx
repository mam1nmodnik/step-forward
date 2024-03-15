import { createSignal } from "solid-js"
import { json } from "solid-start";

export default function Signin(){


    interface formContentType {
        email: string;
        password: string;
    }   

    const [formContent, setFormContent] = createSignal<formContentType>({
        email: "",
        password: ""
    });

    async function tobeckendfetch(email: string, password: string){
        const link = '' //Сюда введи линк на бэк
        const data = {
            email: email,
            password: password 
        }
        const response = await fetch(link, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
       
        return response.json();
    }

     const submitSigIn = (e: Event) =>{
        e.preventDefault();
        try{
            tobeckendfetch(formContent().email, formContent().password)
        }catch(error){
            console.log(error);
        }finally{
            console.log('Запрос на сервер был отправлен')
        }
    }

    return (
        <main class="flex items-center justify-center h-screen">
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" >
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required 
                                    class="block w-full rounded-md border-0 py-1.5 pl-[12px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formContent().email}
                                    onInput={ e => setFormContent({...formContent(), email: e.target.value}) }
                                />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required 
                                    class="block w-full rounded-md border-0 py-1.5 pl-[12px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formContent().password}
                                    onInput={ e => setFormContent({...formContent(), password: e.target.value}) }
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" 
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={submitSigIn}    
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}