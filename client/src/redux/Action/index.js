import axios from "axios";


//Acá creo mis acciones!!!

//La primera función es para traerme todas las recetas desde el back;
//Hago la conexion entre el back y el front;

        export function getRecipes(){
                return async function(dispatch) {
                var json = await axios.get("http://localhost:3001/recipes");
                return dispatch({
                        type: "GET_RECIPES",
                        payload: json.data
                })
                }
        }

//El primer filtro es el ascendente y el descendente
//Por score
        export function orderByScore(payload){
                return{
                        type: "ORDER_BY_SCORE",
                        payload
                }
        }

//El segundo filtro que es el que los ordena de la A-Z y Z-A
        export function orderByAlphabetics(payload) {
                return {
                type: 'ORDER_BY_ALPHA',
                payload
                }
        }

// ESte filtro es para las dietas
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

//Hago la ruta que me traiga la informacion para poder hacer la barra de busqueda po nombre.
//tengo que traerme la ruta del back para que esto quede concatenado, tengo que siempre agregarle el payload
//yo pongo payload porque es lo que le estoy pasando aca, si fuera name, le paso name,
//siempre tengo que hacerlo de esta manera;
//es lo que devuelve la ruta una vez que le asigno algo por name
        export function getNameRecipe(payload){ 
                return async function(dispatch){ 
                        try{ 
                                var json = await axios.get('http://localhost:3001/recipes?name='+payload);
                                return dispatch({
                                        type: "GET_NAME_RECIPE",
                                        payload: json.data
                                })
                        }catch(error){
                        console.log(error);
                        }

                }
        }

//vamos a traer las recetas y tipos desde el back;
//solamente me va a traer el name y el id;
        export function getRecipeType(){
                return async function (dispatch){
                        var recipesTypes = await axios.get('http://localhost:3001/types');
                        return dispatch({
                                type: "GET_RECIPE_TYPE",
                                payload: recipesTypes.data,
                        }) 
                }
        }

//Hago una ruta para la creacion de una receta;
        export function postRecipe(payload){
                return async function (dispatch){
                        const response = await axios.post('http://localhost:3001/recipe',payload)
                        return response;
                }
        }

//Hago una ruta por id, para la parte del detalle;
        export function getDetail(id){
                return async function(dispatch){
                        try{
                                var detail = await axios.get('http://localhost:3001/recipes/'+id);
                                return dispatch({
                                        type: "GET_DETAIL",
                                        payload: detail.data
                                })
                        }catch(error){
                                console.log(error);
                        }
                }
        }
