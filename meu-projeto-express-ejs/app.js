const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Os sete maridos de Evelyn Hugo", preco: "37,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar"},
  {id: 1, nome: "A hipótese do amor", preco: "37,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar"},
]


app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Sejam bem vindos!' });
});

app.get('/produtos2', (req, res) => {
  res.render('produtos2', { message: 'Olá, Sejam bem vindos!' });
});

app.get('/produtos3', (req, res) => {
  res.render('produtos3', { message: 'Olá, Sejam bem vindos!' });
});

app.get('/produtos4', (req, res) => {
  res.render('produtos4', { message: 'Olá, Sejam bem vindos!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
