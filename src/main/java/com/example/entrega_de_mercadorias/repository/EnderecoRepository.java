package com.example.entrega_de_mercadorias.repository;

import com.example.entrega_de_mercadorias.model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
    // Aqui você pode adicionar consultas personalizadas, se necessário
}

