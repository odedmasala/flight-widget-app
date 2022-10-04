import React from "react";
import { useState } from "react"

const TableLetter = ({ letter, index}) => {
    const [flip, setFlip] = useState(false)
// console.log(letter, index);
    setTimeout(() => {
        setFlip(true)
    },100 * index)
const styleDivFirst = "bg-slate-900 rounded-xl border-black min-w-[20px] h-10 float-left  shadow-black"
const styleDivAfter = "bg-slate-900 rounded-xl p-[10px] float-left  shadow-black flip"

    return (
        <div className={flip ? styleDivAfter : styleDivFirst} >
            {flip ? letter : null}
        </div>
    )
}

export default TableLetter