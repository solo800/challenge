import express from 'express';
import config from './config';

const app = express();

// Root dir is probably not the best for static assets but that's what we're going with for now
app.use(express.static('.'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {who: 'Sam'});
});

app.listen(config.port, function () {
    console.log(`Listening on port ${config.port}`);
});
