import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserDataProvider } from './contexts/UserDataContext'
import Beginning from './pages/beginning/Beginning'
import Home from './pages/home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/beginning',
    element: <Beginning />,
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
