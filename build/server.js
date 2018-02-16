import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

/*app.get('/artists-by-beer', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/artists-by-beer.html'));
});*/

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use('/static', express.static('static'));

