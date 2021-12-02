        const initialState = {
        recipes : [],
        allRecipes : [],
        types: [],
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
//Filtro que ordena por puntuación de receta ascendente y descendente;(score)
                case "ORDER_BY_SCORE":
                let orderScore = action.payload === "asc" ? 
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
//Filtro que ordena las recetas por orden alfabetico;
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
                
//Filtro que ordena por tipo de dieta;
                        case "FILTER_BY_DIET_TYPES":
                        const allRecipes = state.allRecipes
                        const dietsApi = [] 
                        const dietsDb = [] 
                        allRecipes.forEach(e => {
                                if (e.hasOwnProperty('diet') && e.diet.includes(action.payload)) {
                                dietsApi.push(e)
                                }
                        })
                        console.log('entra aca')
                        allRecipes.forEach(e => {
                        if (e.hasOwnProperty('Diet') && e.Diet.map(c => c.name === action.payload)) {
                                dietsDb.push(e)
                        }
                        })
                        const find = dietsApi.concat(dietsDb)
                        if (find.length) {
                        return {
                                ...state,
                                recipes: find
                        }
                        };
                        break;

//Filtro que ordena por creados o existentes;

                        case "FILTER_CREATED":
                                const allRecipes2 = state.allRecipes
                                const createdFilter = action.payload === 'created' ? allRecipes2.filter (el => el.createdInDb) 
                                : allRecipes2.filter(el => !el.createdInDb)
                                return{
                                        ...state,
                                        recipes: action.payload === "All" ? allRecipes2 : createdFilter
                                }

//Hago un caso para usar en mi barra de busqueda (search bar), una vez hecha la accion;

                        case "GET_NAME_RECIPE":
                                return{ 
                                        ...state,
                                        recipes : action.payload,
                                }
//Hago este caso para crear mis dietas;
                case "GET_RECIPE_TYPE":
                        return{
                                ...state,
                                types: action.payload,
                        }
// traigo la ruta de post .
                        case "POST_RECIPE":
                                return{
                                        ...state,
                                }
//y este es el ultimo caso que necesito hacer que es por el detalle;
                                case "GET_DETAIL":
                                        return{
                                                ...state,
                                                detail : action.payload,
                                        }
//este es el ultimo;

                                case "SET_SORTING":
                        return {
                        ...state,
                        sorting: action.payload,
                };
                
                default:
                        return state;
        }
        }

                
                export default rootReducer;
