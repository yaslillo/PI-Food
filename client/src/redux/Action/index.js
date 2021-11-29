import axios from "axios";


export function getRecipes() {
    return async function (dispatch) {
    
            let json = await axios.get('http://localhost:3001/recipes',{
    });    
            return dispatch({
                type: 'GET_RECIPES',
                payload: json.data

            })


        }

    }


export function getDiets() {
        return async function (dispatch) {
            const json = await axios('http://localhost:3001/diets',{

            })
            return dispatch({
                type: 'GET_DIETS',
                payload : json.data
            })
        }
}
