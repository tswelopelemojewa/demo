import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite'


const basicContext = {
        name: "Tswelopele",
        email: "tswelopelemojewa@gmail.com",
        title : "Welcome",
        show : true,
        fruits : [
            "apples",
            "oranges",
            "bananas"
        ],
        isClient : true,
        fruitSales : [
            {day : "Monday", apples : 13, oranges : 34},
            {day : "Tuesday", apples : 17, oranges : 28},
            {day : "Thursday", apples : 7, oranges : 45},
        ]
    };


export default defineConfig({
  base : '/demo/',
  build: {
      rollupOptions: {
          input : {
              main: 'index.html'
          }
      },
  },
  plugins: [handlebars({
    context : {
      basicContext
    }
})]
  
});