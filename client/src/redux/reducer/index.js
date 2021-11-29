const initialState = {
    recipes: [],
    recipesRender: [],
    allrecipes: [],
    types: [],
    diets: [],
    details: [],

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                    recipes: action.payload,
                allrecipes: action.payload

            }
        case 'GET_RECIPE_DETAIL':
            return {
                ...state,
                detail: action.payload
            };
        case 'GET_NAME_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            }
        case 'POST_RECIPE':
            return {
                ...state,
            }
        case "ADD_RECIPE":
            return {
                ...state,
                postedRecipe: action.payload
            }
        case 'FILTER_BY_DIET':
            const data = state.allrecipes.filter(el => {
                    return el.diet?.includes(action.payload.toLowerCase())

            })
            return {
                ...state,
                recipes: data

            }

        case "SET_ORDER":
            var orderedRecipes = state.recipes;
            if (action.payload === "see-all") {

                orderedRecipes.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            } //sorts by id
            if (action.payload === "score-asc") {
                orderedRecipes = orderedRecipes.sort((a, b) => {
                    if (a.score > b.score) return 1;
                    if (a.score < b.score) return -1;
                    return 0;
                })
            } //sorts by asc score
            if (action.payload === "score-desc") {
                orderedRecipes.sort((a, b) => {
                    if (a.score < b.score) return 1;
                    if (a.score > b.score) return -1;
                    return 0;
                })
            }  //sorts by desc score
            if (action.payload === "alph-asc") {
                orderedRecipes.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            }  //sorts by title from a to z
            if (action.payload === "alph-desc") {
                orderedRecipes.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
            } //sorts by title from z to a
            return {
                ...state,
                recipesRender: orderedRecipes
            }
        case 'FILTER_CREATED':
            const createdFilter = action.payload === 'created' ? state.allrecipes.filter((el) => el.createdInDb) : state.allrecipes.filter((el) => !el.createdInDb)
            return {
                ...state,
                recipes: createdFilter
            }
        default: return initialState
    }

}
