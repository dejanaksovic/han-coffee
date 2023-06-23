import './App.css'

//MATERIAL UI
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

// PAGES
import Articles from './pages/Articles/Articles'
import Orders from './pages/Orders/Orders'
import Login from './pages/Login/Login'
import CreateArticle from './pages/CreateArticle/CreateArticle'
import Register from './pages/Register/Register'

// LAYOUTS
import MainRouteLayout from './layouts/MainRouteLayout'

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

// CONTEXTS
import AuthContextProvider from './contexts/authContext'
import ArticleContextProvider from './contexts/articleContext'
import CartContextProvider from './contexts/cartContext'
import OrderContextProvider from './contexts/orderContext'
import GlobalNotificationsContextProvider from './contexts/globalNotificationsContext'
import Home from './pages/Home/Home'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import { getGoogleURL } from './utilities/getGoogleUrl'

// ROUTER
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route element = { <MainRouteLayout/>}>
    <Route path='/articles' element = { <Articles/> }/>
    <Route path='/orders' element = { <Orders/> }/>
    <Route path='/articles/:id' element = {<ArticlePage/>}/>
    <Route path='/articles/create' element = { <CreateArticle/> } />
    <Route path='/login' element = { <Login/> } />
    <Route path="/register" element = { <Register/> }/>
    <Route path='/' element = { <Home/> }/> 
  </Route>
  )
)

// THEME
const theme = createTheme( {
  typography: {
    fontFamily:[
      'Itim', 'cursive'
    ].join(','),
    h1: {
      fontSize: '32',
    },
    h2: {
      fontSize: '24',
    }
  } ,
  palette: {
    primary: {
      main: "#112C19"
    },
    secondary: {
      main: "#FF9900"
    },
    neutral: {
      main: '#FFFF'
    }
  }
 } )

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <ArticleContextProvider>
            <CartContextProvider>
              <OrderContextProvider>
                <GlobalNotificationsContextProvider >
                  <RouterProvider router={ router }/>
                </GlobalNotificationsContextProvider>
              </OrderContextProvider>
            </CartContextProvider>
          </ArticleContextProvider>
        </AuthContextProvider>  
      </ThemeProvider>
    </>
  )
}

export default App
