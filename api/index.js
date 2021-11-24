//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {conn,Recipe,Diet} = require ('./src/db.js')
const {API_KEY} = process.env;
const { default : axios} = require('axios')
// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  
    const allDiet = await Diet.findAll();

    if(allDiet.length === 0) {
      try {
      const allData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

      //vuelvo a pedir toda la info de la api 
          const diet = allData.data.results.map(element => element.diets) //traigo todos los datos y le aplico un map
          const diet2 = []
          diet.map(type => {
                  for(var i = 0; i < type.length; i++){
                  diet2.push(type[i]); //lo pusheo
                  //return type[i];
                  }
          })
          diet2.forEach(element => {
                  if(element){     
                          Diet.findOrCreate({ //le pregunto si lo encontro o si lo creo
                          where: {name: element}
          })
          }
          });
    }catch (error) {
      console.error(error)
    }
  }
  
    
})

  console.log('base de datos conectada')
    server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

