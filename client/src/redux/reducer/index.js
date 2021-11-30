    const initialState = {
    recipes : [],
    allRecipes : [],
    recipeTypes: [],
    detail: [],
    }


function rootReducer (state = initialState, action){
        switch(action.type) {
            case "GET_RECIPES":
                    return{
                        ...state,
                            recipes: action.payload,
                            allRecipes : action.payload
            } 
          //hago el primer filtro que es el ascendente y descendente en este caso por puntuación (score)
            case "ORDER_BY_SCORE":
            let orderScore = action.payload==="asc" ? 
            state.recipes.sort(function (a,b){
                    if(a.score > b.score){
                            return 1;
                    }
                    if(b.score > a.score){
                            return -1;
                    }
                    return 0;
            }) :
            state.recipes.sort(function (a,b){
                    if(a.score > b.score){
                            return -1;
                    }
                    if(b.score > a.score){
                            return 1;
                    }
                    return 0;
            });
                    return{
                    ...state,
                    recipes:orderScore
            }
                //Logica del filtro que ordena las recetas por orden alfabetico
            case 'ORDER_BY_ALPHA':
                let orderAlph = action.payload === 'A-Z' ? state.allRecipes.sort(function (a, b) {
                            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                        return 1;
                            };
                            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                return -1;
                            };
                            return 0;
                }) : state.allRecipes.sort(function (a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                return -1;
                        };
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                return 1;
                        };
                        return 0;
                });
                return {
                        ...state,
                        recipes: orderAlph
                }
                     //hago el ultimo filtro que es el que me hago por tipo de dieta
            case "FILTER_BY_DIET_TYPES":
                const allRecipes = state.allRecipes
                const dietApi = [] //traigo los datos de la api
                const dietDb = [] //los de la base de datos
                allRecipes.forEach(e => {
                    if (e.hasOwnProperty('diets') && e.diets.includes(action.payload)) {
                        dietApi.push(e)
                    }
                })
    
                allRecipes.forEach(e => {
                    if (e.hasOwnProperty('Diets') && e.Diets.map(el => el.name === action.payload)) {
                        dietDb.push(e)
                    }
                })
                const find = dietApi.concat(dietDb) //concateno los dos
                if (find.length) {
                    return {
                        ...state,
                        recipes: find
                    }
                };
                break;
                    
                default:
                    return state;
        }
        }
        
        export default rootReducer;
