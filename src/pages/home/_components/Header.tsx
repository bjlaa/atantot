import { Link } from 'react-router-dom'
import CogWheelIcon from '../../../components/icons/CogWheelIcon'
import { useGetName } from '../../../hooks/userData/useGetName'

export default function Header() {
  const userName = useGetName()
  return (
    <header className="flex items-center justify-between px-4 py-8">
      <h1 className="mb-0">Hi {userName}!</h1>

      <div>
        <Link to="/settings" title="Settings">
          <CogWheelIcon className="h-6 w-6 fill-slate-800" />
        </Link>
      </div>
    </header>
  )
}
