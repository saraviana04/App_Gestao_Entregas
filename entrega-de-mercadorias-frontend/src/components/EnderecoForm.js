// EnderecoForm.js
import React, { useState } from 'react';
import api from '../services/api';

const EnderecoForm = ({ onAdd }) => {
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoEndereco = { rua, cidade, estado, cep };

    try {
      const response = await api.post('/enderecos', novoEndereco);
      onAdd(response.data);
      setRua('');
      setCidade('');
      setEstado('');
      setCep('');
      setMessage('Endereço adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar endereço:', error.response ? error.response.data : error.message);
      setMessage('Erro ao adicionar endereço. Tente novamente.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="endereco-form">
        <input
          type="text"
          placeholder="Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="submit-button">Adicionar Endereço</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default EnderecoForm;
