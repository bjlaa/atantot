import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserDataProvider } from './contexts/UserDataContext'
import Home from './pages/home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

function App() {
  return (
    <UserDataProvider>
      <RouterProvider router={router} />
    </UserDataProvider>
  )
}

export default App
