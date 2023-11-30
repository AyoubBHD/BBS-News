import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import news from '@/reducers/news'
import {Link} from "next/link"

const store = configureStore({
  reducer: { news }
})

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
