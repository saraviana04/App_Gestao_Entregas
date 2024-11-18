package com.example.entrega_de_mercadorias.service;

import com.example.entrega_de_mercadorias.model.Endereco;
import com.example.entrega_de_mercadorias.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    // Método para salvar o endereço, com tratamento de exceção
    public Endereco salvarEndereco(Endereco endereco) throws Exception {
        try {
            return enderecoRepository.save(endereco);
        } catch (Exception e) {
            // Lança uma exceção personalizada para o controlador tratar de maneira mais geral
            throw new Exception("Erro ao salvar o endereço: " + e.getMessage());
        }
    }

    // Método para buscar todos os endereços
    public List<Endereco> buscarTodos() {
        return enderecoRepository.findAll();
    }
}
