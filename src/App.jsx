import Main from "./sections/Main"
import Sidebar from "./sections/Sidebar"

export default function App() {
  return (
    <section className="min-h-screen flex">
          <Sidebar/>
          <Main/>
    </section>

  )
}