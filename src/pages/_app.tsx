import { AppProps } from "next/app"

import '../styles/slides.scss'
import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
