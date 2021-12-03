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

//el siguiente paso que me pide es desarrollar el Backend, las rutas, de las cuales me esta pidiendo que haga 4

//Voy a determinar 3 constantes, 1 con los datos de la api, 2 con los datos de la base de datos y 3 una que los concatene a ambos

//lo primero que hago es crear una constante que me traiga todos los datos de la api
const getApiInfo = async () =>{
        try{
                const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
               //le indico que me traiga los datos de la URL de la api
                const apiInfo = await apiUrl.data.results.map(info => { //declaro una constante que me traiga la info que yo le solicito
                        return { //solamente le pido que me traiga estos, mas las dietas
                                name: info.title,
                                resume: info.summary,
                                score: info.spoonacularScore,
                                healthylevel: info.healthylevel,
                                stepbystep: info.analyzedInstructions.map(path => path.steps.map(pathTwo => pathTwo.step)),
                                image: info.image,
                                id :info.id,
                                diet: info.diets.map((diet) => diet),
                            //aca pongo todos los datos que yo le pido que me traiga de la api, si quisiera algun otro, lo pongo aqui
                        }
                })
                        return apiInfo; //le pido que me retorne solo la informacion de la api que le pedi
        }catch(err){
                console.log(err);
        }
}
//segundo le pido que me traiga todos los datos de la base de datos
const getDbInfo = async () =>{
        return await Recipe.findAll({ 
                include:{
                        model : Diet
                        
                }
        })
}
//tercero, concateno a los dos, los datos de la api y la base de datos en uno
const getAllRecipie = async () => {
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

//una vez declaradas las constantes de donde saco la informacion, voy a hacer las rutas que me pide 

//NO TOCAR ANDA PERFECTA LA RUTA jaja
//hago la primera ruta, que me traiga todas las recetas, las pido por query
        router.get('/recipes', async (req, res) => {
                
                const info = await getAllRecipie();
                const name = req.query.name;
                if(!name){
                        return res.status(200).json(info);
                } //le pido que me pase la receta que estoy buscando, que las pase todas a minusculas
                const fillInfo= await info.filter(d => d.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
                //si no encuentro esa informacion que me tire el mensaje de que no hay coincidencia alguna
                fillInfo.length ? res.status(200).json(fillInfo) : res.status(404).send("There is no coincidence");
        
        })

        //NO TOCAR RUTA ANDA PERFECTA
        //creo una ruta que me traiga los datos del id
        //lo que yo quiero es poner el numero de id y que traiga esa sola receta, si no existe que me muestre el msj adecuado
        router.get('/recipes/:id', async (req, res) =>{
                const id = req.params.id; //la hago utilizando params
                const allRecipe = await getAllRecipie();
                if(id){
                const fillRecipe = await allRecipe.filter(element => element.id.toString() === id);
                fillRecipe.length ? res.status(200).json(fillRecipe) : res.status(404).send("Recipe doesn't exist");
                }
                
})
        router.get('/types', async(req,res) => {
                const dataDb = await Diet.findAll()
                res.send(dataDb)
        })

//la ruta del post es para crear una nueva receta
// y por ultimo hago una ruta para crear una nueva receta
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
                        } = req.body; //recolecto todos los datos del body
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
                }) //los creo en la base de datos

                        newRecipe.addDiet(dietDb);
                        res.status(200).send(newRecipe);
                        } catch (error) {
                                console.log(error)
                        }
                })




        module.exports = router;

