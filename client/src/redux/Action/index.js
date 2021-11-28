import axios from "axios";

// export const FILTER_BY_DIET = "FILTER_BY_DIET";

export function getRecipes() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/recipes');
            dispatch({
                type: 'GET_RECIPES',
                payload: json.data

            })

        } catch (err) {
            console.log(err)
        }

    }
}

// export function getRecipeDetail(id) {
//     return async function (dispatch) {
//         var json = await axios.get(`http://localhost:3001/recipes/${id}`);
//         return dispatch({
//             type: "GET_RECIPE_DETAIL",
//             payload: json.data
//         })
//     }
// }

// export function addRecipe(recipe) {
//     return async function (dispatch) {
//         if (!recipe) {
//             return dispatch({
//                 type: "ADD_RECIPE",
//                 payload: { default: true }
//             })
//         }
//         var res = await axios.post(`http://localhost:3001/recipes`, recipe);
//         return dispatch({
//             type: "ADD_RECIPE",
//             payload: res.data
//         })
//     }
// }
// export function getDiets() {
//     return async function (dispatch) {
//         var diets = await axios.get(`http://localhost:3001/types`);
//         return dispatch({
//             type: "GET_DIETS",
//             payload: diets.data
//         })
//     }
// }
// export function postRecipe(payload) {
//     console.log(payload.diets + 'Soy payload')
//     return async function (dispatch) {
//         const response = await axios.post('http://localhost:3001/recipe', payload)
//         return response
//     }
// }
// export function filterRecipesByStatus(payload) {
//     console.log(payload)
//     return {
//         type: 'FILTER_BY_STATUS',
//         payload
//     }
// }

// export function orderByName(payload) {
//     return {
//         type: "ORDER_MY_NAME",
//         payload
//     }
// }
// export function setRecipeOrder(order) {
//     return {
//         type: "SET_ORDER",
//         payload: order
//     }
// }
// export function filterByDiet(diets) {
//     return {
//         type: "FILTER_BY_DIET",
//         payload: diets
//     }
// }
// export function getNameRecipes(name) {
//     return async function (dispatch) {
//         try {
//             let json = await axios.get('http://localhost:3001/recipe?name=' + name);
//             dispatch({
//                 type: 'GET_NAME_RECIPES',
//                 payload: json.data

//             })

//         } catch (err) {
//             console.log(err)
//         }

//     }
// }
// export function filterCreated(payload) {
//     return {
//         type: 'FILTER_CREATED',
//         payload
//     }
// }