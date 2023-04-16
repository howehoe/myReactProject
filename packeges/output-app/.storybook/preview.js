import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { addDecorator } from "@storybook/react"
import { withScreenshot } from "storycap"
import Image from "next/legacy/image"
import { DeviceMap } from "./const/DeviceMap"
import { ScreenshotDeviceMap } from "./const/ScreenshotDeviceMap"
import { GlobalStyle } from "../src/modules/GlobalStyle"
import { RecoilRoot } from "../src/modules/RecoilRoot"
import { worker as bffWorker } from "../mock/bff/worker"
/**
下記参照
next/legacy/image で画像が表示されない問題の打ち手
https://chuckwebtips.hatenablog.com/entry/2022/08/15/190337
https://dev.to/burdiuz/comment/1p5fa
*/
Image.defaultProps = {
  unoptimized: true,
}
// Node 環境ではなくブラウザ環境にいることをチェック
if (typeof global.process === "undefined") {
  bffWorker.start()
}
export const decorators = [withScreenshot]
export const parameters = {
  actions: { argTypesRegex: "^(?:handle|on)[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  layout: "fullscreen",
  viewport: {
    viewports: {
      ...DeviceMap,
      ...INITIAL_VIEWPORTS,
    },
  },
  screenshot: {
    viewport: ScreenshotDeviceMap.PC,
    delay: 1000,
  },
}
// web fontは pages/_document.page.tsx に直接配置するためここで同じfontを読み込む必要有
addDecorator((storyFn) => (
  <RecoilRoot>
    <div id="__next">
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      {storyFn()}
    </div>
  </RecoilRoot>
))
