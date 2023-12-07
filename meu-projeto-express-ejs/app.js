const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Os sete maridos de Evelyn Hugo", preco: "26,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar", img:"evelyn.jpg"},
  {id: 2, nome: "A hipótese do amor", preco: "37,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar", img:"hipotese.jpg"},
  {id: 3, nome: "Evelyn Hugo", preco: "56,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar", img:"evelyn.jpg"},
  {id: 4, nome: "jovens", preco: "122,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar", img:"jovens.jpg"},
  {id: 5, nome: "Diário de um Banana", preco: "46,99", descricao: "Jeff Kinney é um dos mais importantes autores da literatura infantojuvenil mundial contemporânea.", img:"diario.jpg"},
  {id: 6, nome: "A última festa", preco: "51,99", descricao: "Todo ano, nove amigos comemoram o réveillon juntos. Desta vez, apenas oito vão voltar para a casa depois da festa.", img:"festa.jpg"},
  {id: 7, nome: "Ninguém vai te ouvir gritar", preco: "57,99", descricao: "A Academia Masters é um dos internatos mais prestigiados dos Estados Unidos. ", img:"ninguem.jpg"},
  {id: 8, nome: "Misery: Louca obsessão", preco: "62,99", descricao: "Misery, o clássico do terror que inspirou o filme com Kathy Bates, é uma história chocante sobre o impacto da ficção em uma mente obsessiva e a angústia do aprisionamento.", img:"misery.jpg"},
  {id: 9, nome: "A hipótese do amor", preco: "37,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar", img:"hipotese.jpg"},
  {id: 10, nome: "jovens", preco: "37,99", descricao: "Um romance divertido com diálogos afiados e um elenco de ótimos personagens que o leitor não vai conseguir largar", img:"jovens.jpg"},
]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', {produtos});
});

app.get('/produtos/:id', (req, res)   => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produtos', {produto} ) ;
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
