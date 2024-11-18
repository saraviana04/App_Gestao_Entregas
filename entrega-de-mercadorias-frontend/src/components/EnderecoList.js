import React, { useState, useEffect } from 'react';

const EnderecoList = ({ enderecos, onSelectEndereco }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEnderecos, setFilteredEnderecos] = useState(enderecos);

  // Atualiza a lista filtrada quando a lista de endereços original é alterada
  useEffect(() => {
    setFilteredEnderecos(enderecos);
  }, [enderecos]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredEnderecos(enderecos); // Restaura a lista completa ao limpar a busca
    }
  };

  const handleSearchClick = () => {
    const results = enderecos.filter((endereco) =>
      endereco.rua.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEnderecos(results);
  };

  return (
    <div className="endereco-list-container">
      <h2 className="endereco-list-title">Lista de Endereços</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por rua"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearchClick} className="search-button">Buscar</button>
      </div>

      <ul className="endereco-list">
        {filteredEnderecos.map((endereco) => (
          <li key={endereco.id} className="endereco-item">
            {endereco.rua}, {endereco.cidade}, {endereco.estado} - {endereco.cep}
            <button onClick={() => onSelectEndereco(endereco)} className="select-button">Selecionar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnderecoList;
