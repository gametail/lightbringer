import Layout from './components/Layout'
import Profile from './components/Profile'
import WindowTitleBar from './components/WindowTitleBar'

function App() {
  return (
    <div className="relative flex w-screen h-screen">
      <WindowTitleBar className="absolute inset-0 h-10 z-[999] bg-base-300" />
      <Layout>
        {/* Search box */}
        <div className="z-10 justify-center w-full py-4 join">
          <input
            type="text"
            className="text-center input input-bordered border-primary join-item"
            placeholder="Name"
            minLength={3}
            maxLength={16}
            pattern="[A-Za-z0-9]+"
          />
          <div className="flex items-center justify-center w-12 h-12 text-3xl text-white select-none bg-primary join-item">
            #
          </div>

          <input
            type="text"
            className="text-center input input-bordered border-primary max-w-24 join-item"
            placeholder="Tag"
            minLength={2}
            maxLength={5}
            pattern="[A-Za-z0-9]+"
          />
        </div>
        <Profile className="w-full h-full" debug />
      </Layout>
    </div>
  )
}

export default App
