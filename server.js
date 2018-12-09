import path from "path";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParse from "body-parser";
var cors = require('cors');

var http = require('http');

// import assets from "./app-server/assets.json";
import config from "./config/index";
import orderRoute from "./app-server/routes/orderRoute";
import errorMiddleWare from "./app-server/middlewares/errors";


console.log('DEV MODE = ', process.env.NODE_ENV);

mongoose.Promise = require('bluebird'); // Для асинхронного кода, а не колбэков которые по умолчанию
if (process.env.NODE_ENV == 'development') {
  mongoose.set('debug', true); // выводить в консоль все запросы
}

mongoose.connect(config.backend.database, {
  useMongoClient: true,
  reconnectTries: 30,
}, err => {
  if (err) throw err;
  console.log(`Mongo connected!`);
});


const app = express(); // Запуск приложения
app.disable('x-powered-by'); // Отключить определение, что это express


/** Запуск приожения на порте*/
console.log(process.env.PORT, 'port');


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/www/')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny')); // Настройка логирования, см. документация на npmjs.com
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/api/orders', cors(), orderRoute);

app.get('*', (req, res) => {
  res.render(path.join(__dirname + '/www/index.html')/*, {assets}*/);
  // res.sendFile(path.join(__dirname+'/www/index.ejs'));
});


app.use(errorMiddleWare); // Обработчик ошибок должен быть последним
// todo сделать на фронте таблицу с ошибками 500, 404
app.all('*', (req, resp) => resp.status(404).json({
  message: "Resource not found, API-SHOP",
  type: 404
}));


process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack);
  process.exit(1);
});


var httpServer = http.createServer(app);


app.listen(config.backend.port, (err) => {
  if (err) throw err;
  console.log('Server listening on port ' + config.backend.port);
});


