import { Link, Navigate } from 'react-router-dom'
import CogWheelIcon from '../../components/icons/CogWheelIcon'
import ButtonLink from '../../components/inputs/ButtonLink'
import Header from '../../components/layout/Header'
import { useUserData } from '../../hooks/userData/useUserData'
import RelativesList from './_components/RelativesList'

export default function Home() {
  const { userData, isLoading } = useUserData()

  if (!isLoading && !userData?.name) {
    return <Navigate to="/beginning" />
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header className="fixed left-0 right-0 top-0 z-10 mx-4 flex justify-between border-b border-solid border-slate-200 bg-amber-50 px-0 pb-4">
        <h1 className="mb-0 font-normal">
          Hello <span className="text-teal-500">{userData?.name}</span> ✌️
        </h1>

        <div>
          <Link to="/settings" title="Settings">
            <CogWheelIcon className="h-6 w-6 fill-slate-800" />
          </Link>
        </div>
      </Header>

      <main className="p-4 pb-20 pt-24">
        <RelativesList />
      </main>

      <footer className="border-grey-200 fixed bottom-0 left-0 right-0 mx-4 border-t border-solid bg-amber-50 p-4 px-0">
        <ButtonLink
          to="/add-relative"
          className="w-full justify-center font-medium">
          Add a relative
        </ButtonLink>
      </footer>
    </div>
  )
}
