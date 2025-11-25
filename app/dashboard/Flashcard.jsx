"use client"
import { LIMIT, QUIZ_API_URL } from "@/constants"
import useData from "../hooks/useData"
import { useEffect, useState } from "react"


const endpoint = `${QUIZ_API_URL}${process.env.NEXT_PUBLIC_QUIZ_API_KEY}&limit=${LIMIT}`

const Flashcard = () => {
    const { data, isloading, error } = useData(endpoint)
    const [currentCardIdx, setCurrentCardIdx] = useState(0)
    const [currentCard, setCurrentCard] = useState()

    useEffect(() => {
        setCurrentCard(data[0])
    }, [data])

    const onClickPrev = () => {
        if (currentCardIdx + 1 !== data.length) {
            setCurrentCardIdx(currentCardIdx - 1)
        }
    }

    const onClickNext = () => {
        if (currentCardIdx !== 0) {
            setCurrentCardIdx(currentCardIdx + 1)
        }
    }


    return (
        <div className="bg-orange-200 w-2/4 p-10 m-auto h-100 border-0 rounded-lg shadow-2xs">
            <p className="">
                {currentCard?.question}
            </p>
            <ul className="text-left">
                {currentCard &&
                    Object.values(currentCard.answers)
                        .filter(option => option !== null)
                        .map((option, idx) => (
                            <li className="m-2 py-2 px-4 border rounded-lg"
                                key={idx}>
                                {option}
                            </li>
                        ))}
            </ul>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="text-4xl m-8 cursor-pointer"
                    onClick={() => { onClickPrev() }}
                >
                    ⬅️
                </button>
                <button
                    type="button"
                    className="text-4xl m-8 cursor-pointer"
                    onClick={() => { onClickNext() }}
                >
                    ➡️
                </button>
            </div>
        </div>
    )
}

export default Flashcard
