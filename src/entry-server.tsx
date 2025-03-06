// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
          <title>个性二维码生成 - 基于代码的QR代码设计师</title>
          <meta
            name="description"
            content="使用此可自定义的QR码生成器使用JavaScript代码创建漂亮的QR码。"
          />
          {assets}
        </head>
        <body class="bg-back-base text-fore-base [--un-default-border-color:fg-subtle]">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
