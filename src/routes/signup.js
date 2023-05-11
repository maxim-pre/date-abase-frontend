import Signup from "../components/signup"

export default function SignUpPage () {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col bg-[url('../src/static/images/AdobeStock_88856691.jpeg')] lg:bg-[url('../src/static/images/AdobeStock_88856691-desktop.jpeg')] bg-top bg-cover">
            <h1 className="text-6xl font-bold my-4  text-center text-white text-shadow">Create an account!</h1>
            <Signup />
        </div>
    )
}