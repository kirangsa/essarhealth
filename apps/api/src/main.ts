/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import Mailer from './app/mailer';
import fileUpload from 'express-fileupload'
import cors from 'cors';


const app = express();

app.use(express.json());

// enable files upload
// app.use(fileUpload({
//   createParentPath: true
// }));

// app.use(cors());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.post('/api/joinUs', (req, res) => {
  console.log(req.body);
  Mailer.sendEmail({ name: 'kiran', email: 'kiran.gsa@gmail.com' }, 'test mail', req.body);
  res.send({ message: 'Welcome to api!' });

});

app.post('/api/staffRequest', (req, res) => {
  console.log(req.body);
  Mailer.sendEmail({ name: 'kiran', email: 'kiran.gsa@gmail.com' }, 'test mail', req.body);
  res.send({ message: 'Welcome to api!' });

});

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
