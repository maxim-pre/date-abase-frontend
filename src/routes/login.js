import Login from "../components/login"

export default function LoginPage () {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col">
            <h1 className="text-6xl font-bold mb-4">Daterbase</h1>
            <p className="text-2xl font-bold mb-16">Dating for tech workers</p>
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <Login />
        </div>
    )
}