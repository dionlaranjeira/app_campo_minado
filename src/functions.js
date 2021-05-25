const createBoard = (rows, columns) => {
return Array(rows).fill(0).map((_row) =>{
    return Array(columns).fill.map((_,column) => {
        return {
            row, 
            column,
            opened: false,
            mined: false,
            flagged: false,
            exploded: false,
            nearMines: 0,
        }
    })
})
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0 ;

    while(minesPlanted < minesAmount){
        const rowCell = parseInt(Math.random() * rows, 10);
        const columnCell = parseInt(Math.random() * columns, 10);

        if(!board[rowCell][columnCell].mined){
            board[rowCell][columnCell].mined = true;
            minesPlanted++;
        }
    }
}

const createMinedBoar = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

export {createMinedBoar}