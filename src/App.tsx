import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserDataProvider } from './contexts/UserDataContext'
import FormFirstStep from './pages/add-relative/_components/FormFirstStep'
import FormSecondStep from './pages/add-relative/_components/FormSecondStep'
import FormThirdStep from './pages/add-relative/_components/FormThirdStep'
import AddRelative from './pages/add-relative/AddRelative'
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
  {
    path: '/add-relative',
    element: <AddRelative />,
    children: [
      {
        path: '/add-relative/',
        element: <FormFirstStep />,
      },
      {
        path: '/add-relative/meetup',
        element: <FormSecondStep />,
      },
      {
        path: '/add-relative/phone-call',
        element: <FormThirdStep />,
      },
    ],
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
