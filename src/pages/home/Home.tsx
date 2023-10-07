import Header from './_components/Header'
import ListTitle from './_components/ListTitle'
import RelativesList from './_components/RelativesList'

export default function Home() {
  return (
    <>
      <Header />

      <main className="p-4">
        <ListTitle />
        <RelativesList />
      </main>
    </>
  )
}
