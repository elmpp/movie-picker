/**
 * This is kinda Next's version of RN's App Component.
 *
 *  - Next docs for _app - https://tinyurl.com/tp9urzc
 */

import React from 'react'
import { AppContext, AppInitialProps } from "next/app"

const App = ({ Component, pageProps }: AppContext & AppInitialProps) => <Component {...pageProps} />

export default App