const createBoard = (rows, columns) => {
return Array(rows).fill(0).map((_,row) =>{
    return Array(columns).fill(0).map((_,column) => {
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

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbords = (board, row, column) => {
    const neighbors = [];
    const rows = [row -1, row, row +1];
    const columns = [column -1, column, column +1];
    rows.forEach(r => {
        columns.forEach(c =>{
            const different = r !== row || c !== column;
            const validRow = r >= 0 && r < board.length; 
            const validColumn = c >= 0 && c < board[0].length;

            if(different && validColumn && validRow){
                neighbors.push(board[r][c]);
            }
        })
    })
    return neighbors;
}

const safeNeighbordhood = (board, row, column) => {
    const safes = (result, neighbord) => result && !neighbord.mined;
    return getNeighbords(board, row, column).reduce(safes, true);
}

const openField = (board, row, column) => {
    const field = board[row][column];
    if (!field.opened){
        field.opened = true;
        if(field.mined){
            field.exploded=true;
        }else if (safeNeighbordhood(board,row, column)){
            getNeighbords(board,row, column).forEach(n => openField(board, n.row, n.column));
        }else{
            const neighbord = getNeighbords(board,row, column);
            field.nearMines = neighbord.filter(n => n.mined).length;    
        }
    }
}

const invertFlag = (board,row, column) => {
    const field = board[row][column];
    field.flagged = !field.flagged;
}

const fields = board => [].concat(... board);
const hadExploded = board => fields(board).filter(field => field.exploded).length > 0;
const pending = field => (field.mined && !field.flagged) || (!field.opened && !field.mined);
const wonGame = board => fields(board).filter(pending).length === 0;
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)


export {invertFlag,
        createMinedBoar,
        cloneBoard,
        openField,
        hadExploded,
        wonGame,
        showMines}