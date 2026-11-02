import {useState} from 'react';
import Square from "./Square";

export default function Board() {
    const [square, setSquare] = useState(Array(9).fill(null));
    function handleClick(i) {
        const nextSqures = square.slice();
        nextSqures[i] = 'O';
        setSquare(nextSqures);
    }
    return (
        <>
            <div className="board-row">
                <Square value={square[0]} handleClick={() => handleClick(0)}/>
                <Square value={square[1]} handleClick={() => handleClick(1)}/>
                <Square value={square[2]} handleClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={square[3]} handleClick={() => handleClick(3)}/>
                <Square value={square[4]} handleClick={() => handleClick(4)}/>
                <Square value={square[5]} handleClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={square[6]} handleClick={() => handleClick(6)}/>
                <Square value={square[7]} handleClick={() => handleClick(7)}/>
                <Square value={square[8]} handleClick={() => handleClick()}/>
            </div>
        </>
    );
}