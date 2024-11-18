import React from 'react';

const RoutePlanner = ({ selectedEnderecos }) => {
  if (selectedEnderecos.length === 0) {
    return <p>Nenhum endereço selecionado para a rota.</p>;
  }

  return (
    <div>
      <h3>Rota de Entrega</h3>
      <ol>
        {selectedEnderecos.map((endereco, index) => (
          <li key={index}>
            {endereco.rua}, {endereco.cidade}, {endereco.estado} - {endereco.cep}
          </li>
        ))}
      </ol>
      <p>Total de endereços na rota: {selectedEnderecos.length}</p>
    </div>
  );
};

export default RoutePlanner;
