import Signup from "../components/signup"

export default function SignUpPage () {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col">
            <h2 className="text-4xl font-bold my-4">Create an account!</h2>
            <Signup />
        </div>
    )
}