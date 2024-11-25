import React, { useState } from 'react';
import api from './services/api';
import EnderecoForm from './components/EnderecoForm';
import './App.css';

const App = () => {
  const [enderecos, setEnderecos] = useState([]);
  const [busca, setBusca] = useState('');
  const [rota, setRota] = useState([]); // Lista de endereços para a rota

  const buscarEnderecos = async () => {
    try {
      const response = await api.get('/enderecos');
      setEnderecos(response.data);
    } catch (error) {
      console.error('Erro ao buscar endereços:', error.message);
    }
  };

  const handleAddEndereco = (novoEndereco) => {
    setEnderecos([...enderecos, novoEndereco]);
  };

  const handleSearch = (e) => {
    setBusca(e.target.value);
  };

  const handleAddToRota = (endereco) => {
    setRota([...rota, endereco]);
  };

  const enderecosFiltrados = enderecos.filter((endereco) =>
    endereco?.rua?.toLowerCase().includes(busca.toLowerCase())
  );

  const limparEnderecos = () => {
    setEnderecos([]);
    setRota([]); // Limpa a lista de rotas
  };

  return (
    <div className="app">
      <h1 className="titulo-principal">App de Entregas</h1>
      <h2 className="subtitulo">Gestão de Endereços de Entrega</h2>

      <EnderecoForm onAdd={handleAddEndereco} />

      <div className="lista-enderecos">
        <h3>Lista de Endereços</h3>
        <input
          type="text"
          placeholder="Buscar por rua"
          value={busca}
          onChange={handleSearch}
          className="input-field"
        />
        <button onClick={buscarEnderecos} className="add-button">Buscar</button>
        <ul>
          {enderecosFiltrados.length > 0 ? (
            enderecosFiltrados.map((endereco) => (
              <li key={endereco.id} className="endereco-item">
                {`${endereco.rua}, ${endereco.cidade} - ${endereco.estado}, CEP: ${endereco.cep}`}
                <button onClick={() => handleAddToRota(endereco)}
                className="add-button">
                  Adicionar à Rota
                </button>
              </li>
            ))
          ) : (
            <p>Nenhum endereço encontrado para a rota.</p>
          )}
        </ul>
        <button onClick={limparEnderecos} className="clear-button">Limpar Todos os Endereços</button>
      </div>

      <div className="rota">
        <h3>Rota de Entrega</h3>
        <ul>
          {rota.length > 0 ? (
            rota.map((endereco, index) => (
              <li key={index} className="endereco-item">
                {`${endereco.rua}, ${endereco.cidade} - ${endereco.estado}, CEP: ${endereco.cep}`}
              </li>
            ))
          ) : (
            <p>Nenhum endereço adicionado à rota.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
