import React from 'react'
import {TableLetter} from './index'

const TableCell = ({ word }) => {
// console.log(Array.from(word));
    return (
        <td className={"p-4"}>
            {Array.from(word).map((letter, index) => (
                <TableLetter key={index} letter={letter} index={index}/>
            ))}
        </td>
    )
}

export default TableCell