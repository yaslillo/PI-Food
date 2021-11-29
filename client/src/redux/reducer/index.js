const initialState = {
    recipes: [],
    

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload

            }
        case 'FILTER_BY_DIET':
            const data = state.allRecipes.filter(el => {
                return el.diet.include(action.payload.toLowerCase())
            })
            return {
                ...state,
                recipes : data

        }
    
    
        default: return initialState
    }

}
