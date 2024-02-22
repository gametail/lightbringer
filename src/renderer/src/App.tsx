import Profile from './components/Profile'

function App() {
  console.log(import.meta.env.LEAGUE_DEV_API_KEY)
  return (
    <div className="w-screen h-screen">
      <Profile className="" debug />
    </div>
  )
}

export default App
