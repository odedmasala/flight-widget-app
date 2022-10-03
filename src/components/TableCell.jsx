import {TableLetter} from './index'

const TableCell = ({ word }) => {
// console.log(word);
    return (
        <td>
            {Array.from(word).map((letter, index) => (
                <TableLetter key={index} letter={letter} index={index}/>
            ))}
        </td>
    )
}

export default TableCell