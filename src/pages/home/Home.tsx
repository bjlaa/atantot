import { Link, Navigate } from 'react-router-dom'
import CogWheelIcon from '../../components/icons/CogWheelIcon'
import ButtonLink from '../../components/inputs/ButtonLink'
import Header from '../../components/layout/Header'
import { useUserData } from '../../hooks/userData/useUserData'
import ListTitle from './_components/ListTitle'
import RelativesList from './_components/RelativesList'

export default function Home() {
  const { userData, isLoading } = useUserData()

  if (!isLoading && !userData?.name) {
    return <Navigate to="/beginning" />
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header className="flex justify-between">
        <h1 className="mb-0">
          Hi <span className="text-teal-500">{userData?.name}</span> 👋
        </h1>

        <div>
          <Link to="/settings" title="Settings">
            <CogWheelIcon className="h-6 w-6 fill-slate-800" />
          </Link>
        </div>
      </Header>

      <main className="mb-20 p-4">
        <ListTitle />
        <RelativesList />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4">
        <ButtonLink
          to="/add-relative"
          className="w-full justify-center font-medium">
          Add a relative
        </ButtonLink>
      </footer>
    </div>
  )
}
