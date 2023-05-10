import { getUserInfo } from "../lib/usersApi"
import { useState, useEffect } from "react"

export default function Matches({matches}) {

    const [allMatches, setAllMatches] = useState([])

    useEffect(() => {
        matches.map((match) => {
            getUserInfo(match)
                .then((res) => {res.json()})
                .then((data) => {
                    console.log(data)
                    setAllMatches([...allMatches, data])
                })
                .catch((err) => console.log(err))
        })
    }, [])
    
    return (
        <>
        </>
    )
}