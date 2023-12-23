import { Main } from 'next/document'
import Image from 'next/image'
import Botao from './components/button';


interface TituloProps {
  texto: string;
}

function Titulo({ texto }: TituloProps) {
  return (
    <h1 className="titulo">{texto}</h1>
  );
}


function Quadrado() {
  return (
    <div style={{ backgroundColor: 'red', width: '120px', height: '120px' }}></div>
  );
}



interface ListaItensProps {
  itens: string[];
}

function ListaItens({ itens }: ListaItensProps): JSX.Element {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

interface ImagemProps {
  url: string;
  descricao: string;
}

function Imagem({ url, descricao }: ImagemProps): JSX.Element {
  return (
    <img src={url} alt={descricao} />
  );
}

interface ParagrafoProps {
  texto: string;
}

function Paragrafo({ texto }: ParagrafoProps): JSX.Element {
  return (
    <p>{texto}</p>
  );
}

interface CabecalhoProps {
  titulo: string;
  descricao: string;
}

function Cabecalho({ titulo, descricao }: CabecalhoProps): JSX.Element {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </header>
  );
}

interface RodapeProps {
  informacoes: string;
}

function Rodape({ informacoes }: RodapeProps): JSX.Element {
  return (
    <footer>
      <p>{informacoes}</p>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Quadrado />
      <Titulo texto="Título da Página" />
      <Botao texto="Clique em Mim" mensagem="Opa meu consagrado" />
      <ListaItens itens={['Item 1', 'Item 2', 'Item 3']} />
      <Imagem url="https://www.einerd.com.br/wp-content/uploads/2017/09/bob-890x501.jpg" descricao="Bob esponja." />
      <Paragrafo texto="Este é um parágrafo com texto personalizável." />
      <Cabecalho titulo="Meu Cabeçalho" descricao="Descrição do cabeçalho" />
      <Rodape informacoes="Informações do Rodapé" />
    </main>
  )
}
