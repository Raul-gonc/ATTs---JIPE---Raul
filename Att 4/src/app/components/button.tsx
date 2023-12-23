'use client';
import React from 'react';

interface BotaoProps {
  texto: string;
  mensagem: string;
}

const Botao: React.FC<BotaoProps> = ({ texto , mensagem }) => {
  const showMsg = () => {
    alert(mensagem);
  };

  return (
    <button onClick={showMsg}>
      {texto}
    </button>
  );
};

export default Botao;