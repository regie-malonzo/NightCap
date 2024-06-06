import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import { Alcoholic } from './components/Alcoholic'
import { NonAlcoholic } from './components/NonAlcoholic'
import { DrinkDetail } from './components/DrinkDetail'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Alcoholic />} />
    <Route path="/non-alcoholic" element={<NonAlcoholic />} />
    <Route path="drink/:id" element={<DrinkDetail />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
