import React from 'react'
import {TableCell} from './index'

const TableRow = ({ flight }) => {

    const words = Object.values(flight)

    console.log(words)

    return (
        <tr>
            <td>✈</td>
            {words && words?.map((word, _index) => (
                <TableCell key={_index} word={word} />
                ))}
        </tr>
    )
}

export default TableRow