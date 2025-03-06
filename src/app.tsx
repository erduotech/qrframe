import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./app.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

export default function App() {
  return (
    <>
      <Router root={(props) => <Suspense>{props.children}</Suspense>}>
        <FileRoutes />
      </Router>
      <footer class="text-sm flex justify-center gap-4 px-4 py-8">
        <a
          class="font-semibold hover:text-fore-base/80 focus-visible:(outline-none ring-2 ring-fore-base ring-offset-2 ring-offset-back-base)"
          href="https://www.yes.al/"
          target="_blank"
        >
          狼狗跨域追踪
        </a>
        <a
          class="font-semibold hover:text-fore-base/80 focus-visible:(outline-none ring-2 ring-fore-base ring-offset-2 ring-offset-back-base)"
          href="https://whois.yes.al"
          target="_blank"
        >
          whois查询
        </a>
        <a
          class="font-semibold hover:text-fore-base/80 focus-visible:(outline-none ring-2 ring-fore-base ring-offset-2 ring-offset-back-base)"
          href="https://mogu.im"
          target="_blank"
        >
          蘑菇文件速递
        </a>
        
      </footer>
    </>
  );
}
