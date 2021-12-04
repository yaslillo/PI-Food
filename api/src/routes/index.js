const {Router}= require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {default : axios} = require('axios');
const {Recipe, Diet} = require('../db')
const router = Router();
const Sequelize = require('sequelize');
const {API_KEY} = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//creo una constante para guardar la información que me traigo de la api;
//creo una constante para guardar los datos de la base de datos;
//creo una constante para concatenar la información de ambas;
const getApiInfo = async () =>{
        try{
                const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

                const apiInfo = await apiUrl.data.results.map(info => { 
                        return { 
                                name: info.title,
                                resume: info.summary,
                                score: info.spoonacularScore,
                                healthylevel: info.healthylevel,
                                stepbystep: info.analyzedInstructions.map(path => path.steps.map(pathTwo => pathTwo.step)),
                                image: info.image,
                                id :info.id,
                                diet: info.diets.map((diet) => diet),

                        }
                })
                        return apiInfo;
        }catch(err){
                console.log(err);
        }
}
//Pido la información a la base de datos;
const getDbInfo = async () =>{
        return await Recipe.findAll({ 
                include:{
                        model : Diet
                        
                }
        })
}
//concateno la información de la api y la base de datos;
const getAllRecipe = async () => {
        const apiInfo = await getApiInfo();
        const dbInfo = await getDbInfo();
        const dbInfoFilter = dbInfo.map(element =>{
                return{
                                name : element.name,
                                resume: element.resume,
                                score: element.score,
                                healthylevel: element.healthylevel,
                                stepbystep: element.stepbystep,
                                image: element.image,
                                id :element.id,
                                diet: element.diets.map(el=>{
                                        return el.name;
                                }),
                                createdInDb: element.createdInDb
                }
        })
        const allInfo = dbInfoFilter.concat(apiInfo);
        return allInfo;
}


//Hago la ruta, que me trae todas las recetas, las pido por query;

        router.get('/recipes', async (req, res) => {
                
                const info = await getAllRecipe();
                const name = req.query.name;
                if(!name){
                        return res.status(200).json(info);
                }
                const filteredInfo= await info.filter(d => d.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

                filteredInfo.length ? res.status(200).json(filteredInfo) : res.status(404).send("No hay coincidencias con la busqueda");
        
        })


//Hago la ruta para buscar por id;

        router.get('/recipes/:id', async (req, res) =>{
                const id = req.params.id; 
                const allRecipe = await getAllRecipe();
                if(id){
                const recipeId = await allRecipe.filter((element) => element.id == id);
                recipeId.length ? res.status(200).json(recipeId) : res.status(404).send("Receta no existe");
                }
                
});

//Hago la ruta para los tipos de dieta;
        router.get('/types', async(req,res) => {
                const dataDb = await Diet.findAll()
                res.send(dataDb)
        })


//Hago la ruta para crear una nueva receta;
router.post('/recipe', async (req, res) => {
                try{
                const{
                                name, 
                                score,
                                resume,
                                stepbystep,
                                healthylevel,
                                image,
                                diet,
                        } = req.body;
                let dietDb = await Diet.findAll({
                        where : {
                        name:diet
                        }
                })
                let newRecipe= await Recipe.create({
                        name, 
                        score,
                        resume,
                        stepbystep,
                        healthylevel,
                        image,
                        diet,
                }) 
// Guardo las recetas creadas en la base de datos.

                        newRecipe.addDiet(dietDb);
                        res.status(200).send(newRecipe);
                        } catch (error) {
                                console.log(error)
                        }
                })




        module.exports = router;

