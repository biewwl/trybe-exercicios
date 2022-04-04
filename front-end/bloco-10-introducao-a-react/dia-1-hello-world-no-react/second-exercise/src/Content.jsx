import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
    return (
      <div className="contents">
        {conteudos.map((e) => (
            <section key={e.conteudo} className='content-card'>
              <h3>O conteúdo é: {e.conteudo}</h3>
              <p>Status: {e.status}</p>
              <p>Bloco: {e.bloco}</p>
            </section>
          )
        )}
      </div>
    )
  }
};

export default Content;