// This file is meant to set GLOBAL styles that are loaded by ALL pages
// This is the ONLY place to set global styles
import '../styles/global.scss'

// This App component is the top-level component which will be common across all the different pages.
// You can use this App component to keep state when navigating between pages, for example.

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
