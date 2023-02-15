const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());


//mongoose.connect('mongodb://127.0.0.1:27017/prefeitura') //Sem Docker
mongoose.connect('mongodb://mongo_db_prefeitura:27017/prefeitura') // Com Docker
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(('Could not connect to MongoDB')));

const imovelSchema = new mongoose.Schema({
    matricula: String,
    endereco: String,
    tamanho: String,
    iptu: Number,
    bairro: String,
    proprietarioUsername: String

});



const Imovel = mongoose.model('Imovel', imovelSchema);


app.get('/buildings/', async (req, res) => {
    res.send(await Imovel.find());
});

app.get('/buildings/neighborhood/', (req, res) => {
    const bairros = [{'id' : 1, 'name' : 'Madalena'}, {'id' : 2, 'name' : 'Boa Viagem'}, {'id' : 3, 'name' : 'Casa Forte'}, {'id' : 4, 'name' : 'Torre'}];
    res.send(bairros);
});





app.get('/buildings/matricula/proprietario', async (req, res) => {
    const imovel = await Imovel.find({ proprietarioUsername: req.body.proprietarioUsername });
    if (!imovel) return res.status(404).send('Imovel nao encontrado');
    console.log(!imovel);
    res.send(imovel);

});

app.get('/buildings/matricula/:matricula', async (req, res) => {
    const imovel = await Imovel.find({ matricula: req.params.matricula });
    if (!imovel) return res.status(404).send('Imovel nao encontrado');
    console.log(!imovel);
    res.send(imovel);

});

app.post('/buildings/', async (req, res) => {
    const imovel = new Imovel({
        matricula: (await Imovel.find()).length + 1,
        endereco: req.body.endereco,
        tamanho: req.body.tamanho,
        bairro: req.body.bairro,
        iptu: Number(req.body.tamanho) * 100,
        proprietarioUsername: req.body.proprietarioUsername,
    });
    imovel.save()
    res.send(imovel);
});

app.patch('/buildings/matricula/:matricula', async (req, res) => {
    const imovel = await Imovel.findOneAndUpdate({ matricula: req.params.matricula }, { tamanho: req.body.tamanho }, {
        new: true
    });
    if (!imovel) return res.status(404).send('Imovel nao encontrado');
    res.send(imovel);

});

app.delete('/buildings/matricula/:matricula', async (req, res) => {

    const imovel = await Imovel.findOneAndDelete({ matricula: req.params.matricula });
    if (!imovel) return res.status(404).send('Imovel nao encontrado');
    res.send(imovel);

});





app.listen(3001, () => console.log('Na porta 3001, buildings'));