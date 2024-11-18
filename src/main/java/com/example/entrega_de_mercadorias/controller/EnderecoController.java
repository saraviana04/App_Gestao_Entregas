package com.example.entrega_de_mercadorias.controller;

import com.example.entrega_de_mercadorias.service.EnderecoService;
import com.example.entrega_de_mercadorias.model.Endereco;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enderecos")
@CrossOrigin(origins = "http://localhost:3000") // Permite CORS para o frontend React no localhost:3000
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    // Endpoint para criar um novo endereço
    @PostMapping
    public ResponseEntity<String> criarEndereco(@RequestBody Endereco endereco) {
        try {
            enderecoService.salvarEndereco(endereco);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Endereço adicionado com sucesso!");
        } catch (Exception e) {
            // Log detalhado da exceção
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao adicionar endereço: " + e.getMessage());
        }
    }

    // Endpoint para listar todos os endereços
    @GetMapping
    public ResponseEntity<List<Endereco>> listarEnderecos() {
        try {
            List<Endereco> enderecos = enderecoService.buscarTodos();
            return ResponseEntity.ok(enderecos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
}
