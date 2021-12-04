import axios from "axios";


//Acá creo mis acciones!!!


//Hago la conexion entre el back y el front;
//Me traigo la ruta que trae la info de todas las recetas;

        export function getRecipes(){
                return async function(dispatch) {
                var json = await axios.get("http://localhost:3001/recipes");
                return dispatch({
                        type: "GET_RECIPES",
                        payload: json.data
                })
                }
        }

//El primer filtro es el ascendente y el descendente por score;

        export function orderByScore(payload){
                return{
                        type: "ORDER_BY_SCORE",
                        payload
                }
        }

//El segundo filtro ordena alfabeticamente en ascenso y descenso;
        export function orderByAlphabetics(payload) {
                return {
                type: 'ORDER_BY_ALPHA',
                payload
                }
        }

//Filtro es para las dietas;
        export function setFilterByDiets(payload){
                console.log(payload);
                return {
                        type: "FILTER_BY_DIET_TYPES",
                        payload
                }
        }
//Filtro para recetas creadas o existentes.
        export function filterCreated(payload){
                return{
                        type:"FILTER_CREATED",
                        payload
                }
        }

//Exporto la ruta  para poder hacer busqueda por nombre.

        export function getNameRecipes(name){ 
                return async function(dispatch){ 
                        try{ 
                                var json = await axios.get("http://localhost:3001/recipes?name=" + name);
                                return dispatch({
                                        type: "GET_NAME_RECIPE",
                                        payload: json.data
                                })
                        }catch(error){
                        console.log(error);
                        }

                }
        }
//Me traigo la ruta de types. (tipo de dieta);

        export function getRecipeType(){
                return async function (dispatch){
                const info = await axios.get("http://localhost:3001/types");
                        return dispatch({
                                type: "GET_RECIPE_TYPE",
                                payload: info.data,
                        }) 
                }
        }

//Me traigo la ruta para la creacion de una receta;
        export function postRecipe(payload){
                return async function (dispatch){
                        const response = await axios.post('http://localhost:3001/recipe',payload)
                        return response;
                }
        }

//Me traigo la ruta por id, para hacer el detalle;
        export function getDetail(id){
                return async function(dispatch){
                        try{
                                const json = await axios.get('http://localhost:3001/recipes/' + id);
                                return dispatch({
                                        type: "GET_DETAILS",
                                        payload: json.data
                                })
                        }catch(error){
                                console.log(error);
                        }
                }
        }
