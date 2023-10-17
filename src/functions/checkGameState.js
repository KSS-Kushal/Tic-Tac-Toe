export const checkGameState = (state) => {
    const isXWin = isInWinState(state, "X");
    const isOWin = isInWinState(state, "O");
    if (isXWin) {
        return {
            win: "X",
            winState: isXWin
        }
    }else if (isOWin) {
        return {
            win: "O",
            winState: isOWin
        }
    }else {
        let isCellEmpty = false;
        state.forEach(element => {
            if (element!=="X" && element!=="O") {
                isCellEmpty = true;
            }
        });
        if (isCellEmpty) {
            return {
                win: "playing",
                winState: []
            }
        }else {
            return {
                win: "draw",
                winState: []
            }
        }
    }
}

const isInWinState = (state, value) => {
    if (state[0]===value && state[1]===value && state[2]===value) {
        return [0,1,2];
    }else if (state[3]===value && state[4]===value && state[5]===value) {
        return [3,4,5];
    } else if (state[6]===value && state[7]===value && state[8]===value) {
        return [6,7,8];
    }else if (state[0]===value && state[3]===value && state[6]===value) {
        return [0,3,6];
    }else if (state[1]===value && state[4]===value && state[7]===value) {
        return [1,4,7];
    }else if (state[2]===value && state[5]===value && state[8]===value) {
        return [2,5,8];
    }else if (state[0]===value && state[4]===value && state[8]===value) {
        return [0,4,8];
    }else if (state[2]===value && state[4]===value && state[6]===value) {
        return [2,4,6];
    }else {
        return false;
    }
}