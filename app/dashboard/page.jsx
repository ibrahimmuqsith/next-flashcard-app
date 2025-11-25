import Flashcard from "./Flashcard"

const Dashboard = () => {
    return (
        <div className="w-screen min-h-screen bg-stone-100 m-0 text-center">
            <h1 className="text-5xl m-12 text-black">
                Welcome to Flashcard App
            </h1>
            <Flashcard />
        </div>
    )
}

export default Dashboard
