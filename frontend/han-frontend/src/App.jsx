import './App.css'

// PAGES
import Articles from './pages/Articles/Articles'
import Orders from './pages/Orders/Orders'
import Login from './pages/Login/Login'
import CreateArticle from './pages/CreateArticle/CreateArticle'

// COMPONENTS
import { ToastContainer } from "react-toastify"

// LAYOUTS
import MainRouteLayout from './layouts/MainRouteLayout'

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

import AuthContextProvider from './contexts/authContext'
import ArticleContextProvider from './contexts/articleContext'
import CartContextProvider from './contexts/cartContext'
import OrderContextProvider from './contexts/orderContext'
import Register from './pages/Register/Register'

// CONTEXTS

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route element = { <MainRouteLayout/>}>
    <Route path='/articles' element = { <Articles/> }/>
    <Route path='/orders' element = { <Orders/> }/>
    <Route path='/articles/create' element = { <CreateArticle/> } />
    <Route path='/login' element = { <Login/> } />
    <Route path="/register" element = { <Register/> }/>
  </Route>
  )
)

function App() {

  return (
    <>
      <AuthContextProvider>
        <ArticleContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <RouterProvider router={ router }/>
            </OrderContextProvider>
          </CartContextProvider>
        </ArticleContextProvider>
      </AuthContextProvider>
      <ToastContainer/>
    </>
  )
}

export default App
