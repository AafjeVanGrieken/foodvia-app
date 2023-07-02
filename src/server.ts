import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use(express.static('public'));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
