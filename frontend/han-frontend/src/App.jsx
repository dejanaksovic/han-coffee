import './App.css'

// PAGES
import Articles from './pages/Articles/Articles'

// LAYOUTS
import MainRouteLayout from './layouts/MainRouteLayout'

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

import ArticleContextProvider from './contexts/articleContext'
import CartContextProvider from './contexts/cartContext'
import OrderContextProvider from './contexts/orderContext'

// CONTEXTS

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route element = { <MainRouteLayout/>}>
    <Route path='/articles' element = { <Articles/> }/>
  </Route>
  )
)

function App() {

  return (
    <>
      <ArticleContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <RouterProvider router={ router }/>
          </OrderContextProvider>
        </CartContextProvider>
      </ArticleContextProvider>
    </>
  )
}

export default App
