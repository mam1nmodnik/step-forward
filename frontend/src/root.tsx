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

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Step Forward</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta/>
      </Head>
      <Body class="flex w-full" style=''>
        <Suspense>  
          <ErrorBoundary fallback={(err) => <p>Error: {err.message}</p>} >
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>    
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
