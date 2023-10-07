import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserDataContext } from '../../contexts/UserDataContext'
import Header from './_components/Header'
import ListTitle from './_components/ListTitle'
import RelativesList from './_components/RelativesList'

export default function Home() {
  const { userData, isLoading } = useContext(UserDataContext)

  if (!isLoading && !userData?.name) {
    return <Navigate to="/beginning" />
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />

      <main className="p-4">
        <ListTitle />
        <RelativesList />
      </main>
    </div>
  )
}
