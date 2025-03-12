import express, { Express } from 'express';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello ch9ra');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
