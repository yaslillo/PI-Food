import axios from 'axios';

//Acá creo mis acciones!!!

//Hago la conexion entre el back y el front;
//Me traigo la ruta que trae la info de todas las recetas;

export function getRecipes() {
    return async function (dispatch) {
        const info = await axios.get('/recipes');
        return dispatch({
            type: 'GET_RECIPES',
            payload: info.data,
        });
    };
}

//El primer filtro es el ascendente y el descendente por score;

export function orderByScore(payload) {
    return {
        type: 'ORDER_BY_SCORE',
        payload,
    };
}

//El segundo filtro ordena alfabeticamente en ascenso y descenso;
export function orderByAlphabetics(payload) {
    return {
        type: 'ORDER_BY_ALPHA',
        payload,
    };
}

//Filtro es para las dietas;
export function setFilterByDiets(payload) {
    console.log(payload);
    return {
        type: 'FILTER_BY_DIET_TYPES',
        payload,
    };
}
//Filtro para recetas creadas o existentes.
export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload,
    };
}

//Exporto la ruta  para poder hacer busqueda por nombre.

export function getNameRecipes(name) {
    return async function (dispatch) {
        try {
            const info = await axios.get('/recipes?name=' + name);
            return dispatch({
                type: 'GET_NAME_RECIPE',
                payload: info.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
//Me traigo la ruta de types. (tipo de dieta);

export function getRecipeType() {
    return async function (dispatch) {
        const info = await axios.get('/types');
        return dispatch({
            type: 'GET_RECIPE_TYPE',
            payload: info.data,
        });
    };
}

//Me traigo la ruta para la creacion de una receta;
export function postRecipe(payload) {
    return async function (dispatch) {
        const info = await axios.post('/recipe', payload);
        return info;
    };
}
