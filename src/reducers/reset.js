const initialState = 0;

const resetNumber = (state = initialState, action) => {
    switch (action.type) {
        case "RESET": return 0;
        default: return state;
    }
}

export default resetNumber;