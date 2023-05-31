import './App.css'

// PAGES
import Articles from './pages/Articles/Articles'
import Orders from './pages/Orders/Orders'

// LAYOUTS
import MainRouteLayout from './layouts/MainRouteLayout'

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

import ArticleContextProvider from './contexts/articleContext'
import CartContextProvider from './contexts/cartContext'
import OrderContextProvider from './contexts/orderContext'
import CreateArticle from './pages/CreateArticle/CreateArticle'

// CONTEXTS

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route element = { <MainRouteLayout/>}>
    <Route path='/articles' element = { <Articles/> }/>
    <Route path='/orders' element = { <Orders/> }/>
    <Route path='/articles/create' element = { <CreateArticle/> } />
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
