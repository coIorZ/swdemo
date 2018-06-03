import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, '../dist'));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.render('index.html');
});

/*eslint-disable no-unused-vars*/
app.use((err, req, res, next) => {
/*eslint-enable no-unused-vars*/
  res.status(500).json(err);
});

app.listen(port, () => console.log(`app is running on port ${port}`));
