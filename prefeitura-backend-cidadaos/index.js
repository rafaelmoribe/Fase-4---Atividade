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

const cidadaoSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    telefone: String,
    persona: String,
    
});
//
const Cidadao = mongoose.model('Cidadao', cidadaoSchema);



app.get('/cidadaos/', async (req, res) => {
    res.send(await Cidadao.find());
});

app.get('/users/', async (req, res) => {
    res.send(await Cidadao.find());
});

app.get('/cidadaos/:username', async (req, res) => {
    const cidadao = await Cidadao.find({username: req.params.username});
    if (!cidadao) return res.status(404).send('Cidadao nao encontrado');
    console.log(!cidadao);
    res.send(cidadao);

});

app.get('/user/:username', async (req, res) => {
    const cidadao = await Cidadao.find({username: req.params.username});
    if (!cidadao) return res.status(404).send('Cidadao nao encontrado');
    console.log(!cidadao);
    res.send(cidadao);

});

app.post('/cidadaos/', async (req, res) => {
    const cidadao = new Cidadao({
        name: req.body.name, 
        telefone: req.body.telefone, 
        persona: req.body.persona, 
        password: req.body.password,
        email: req.body.email,
        });
    cidadao.save()
    res.send(cidadao);
});

app.post('/api/signup', async (req, res) => {
    const cidadao = new Cidadao({
        name: req.body.name, 
        telefone: req.body.telefone, 
        persona: req.body.persona, 
        password: req.body.password,
        username: req.body.username,
        email: req.body.email,
        });
    cidadao.save()
    res.send(cidadao);
});

app.post('/api/login', async (req, res) => {
    const cidadao = await Cidadao.find({username: req.body.username});
    if (!cidadao) return res.status(404).send('Cidadao nao encontrado');
    console.log(!cidadao);
    res.send(cidadao);
});


app.put('/cidadaos/:CPF', async (req, res) => {
    const cidadao = await Cidadao.findOneAndUpdate({CPF: req.params.CPF}, {nome: req.body.nome },{
        new: true
    });
    if (!cidadao) return res.status(404).send('Cidadao nao encontrado');
    res.send(cidadao);

});

//Arrumar Depois
app.delete('/cidadaos/:CPF', async (req, res) => {

    const cidadao = await Cidadao.findOneAndDelete({CPF: req.params.CPF});
    if (!cidadao) return res.status(404).send('Cidadao nao encontrado');
    res.send(cidadao);

});

app.listen(3000, () => console.log('Na porta 3000, cidadaos'));






const cidadaos = [
    { id: 1, nome: 'cidadao 1', telefone: '11 1111-1111', persona: 'Impostos', CPF: '111.111.111-11' },
    { id: 2, nome: 'cidadao 2', telefone: '22 2222-2222', persona: 'Noticias', CPF: '222.222.222-22' },
    { id: 3, nome: 'cidadao 3', telefone: '33 3333-3333', persona: 'Impostos', CPF: '333.333.333-33' },
    { id: 4, nome: 'cidadao 4', telefone: '44 4444-4444', persona: 'Empresario', CPF: '444.444.444-44' },
    { id: 5, nome: 'cidadao 5', telefone: '55 5555-5555', persona: 'Empresario', CPF: '555.555.555-55' },
];