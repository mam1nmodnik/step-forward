// @refresh reload

import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import { Provider } from "./Context/Provider";
import RoutContent from "./components/Layouts/RoutContent/RoutContent";


export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Step Forward</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta/>
      </Head>
      <Body class="flex w-full">
        <Provider>
          <main class="flex flex-col my-[1.5rem] mx-[2rem]  lg:mx-[2.5rem] max-w-[95.5rem]">
            <RoutContent>
              <Suspense>  
                <ErrorBoundary fallback={(err, reset) => <div onClick={reset}>Error: {err.toString()}</div>} >
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </ErrorBoundary>    
              </Suspense>
            </RoutContent>
          </main>
        </Provider>
        <Scripts />
      </Body>
    </Html>
  );
}
