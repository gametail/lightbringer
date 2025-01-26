import Profile from "@/components/Profile";

function App() {
    // const [greetMsg, setGreetMsg] = useState("");
    // const [name, setName] = useState("");

    // async function greet() {
    //     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //     setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <div className="relative flex w-screen h-screen">
            <Profile />
        </div>
    );
}

export default App;
