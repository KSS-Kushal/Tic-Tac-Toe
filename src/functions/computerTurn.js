export const computerTurn = (state, mode) => {
    if (mode==="easy") {
        let emptyCell = [];
        state.forEach(element => {
            if (element!=="X" && element!=="O") {
                emptyCell.push(element);
            }
        });
        let random = Math.floor(Math.random() * emptyCell.length);
        return parseInt(emptyCell[random]);
    }
}