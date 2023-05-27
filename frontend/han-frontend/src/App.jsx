import './App.css'

import Articles from './pages/Articles/Articles'
import Basket from './comonents/Basket/Basket'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

import ArticleContextProvider from './contexts/articleContext'

// CONTEXTS

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path='/articles' element = { <Articles/> }/>
  </Route>
  )
)

function App() {

  return (
    <>
      <ArticleContextProvider>
        <RouterProvider router={ router }/>
        <Basket />
      </ArticleContextProvider>
    </>
  )
}

export default App
