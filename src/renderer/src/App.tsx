import Profile from './components/Profile'

function App() {
  console.log(import.meta.env.LEAGUE_DEV_API_KEY)
  return (
    <div className="flex flex-col items-center h-full ">
      {/* <span className="text-4xl text-blue-500 ">Hello from Electron</span> */}
      <Profile className="text-5xl text-red-500" />
      <h1 className="text-xl text-white">{`Api Key: ${import.meta.env.RENDERER_VITE_LEAGUE_DEV_API_KEY}`}</h1>
      <div>
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
    </div>
  )
}

export default App
