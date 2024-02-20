import Profile from './components/Profile'

function App() {
  return (
    <div className="flex h-full items-center justify-center">
      {/* <span className=" text-4xl text-blue-500">Hello from Electron</span> */}
      <Profile className=" text-red-500 text-5xl" />
      <button className=" text-5xl bg-green-500">Hello</button>
    </div>
  )
}

export default App
