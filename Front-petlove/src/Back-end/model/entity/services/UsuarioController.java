package com.TCC2E.usuarios.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.seunome.usuarios.model.entity.Usuario;
import com.seunome.usuarios.model.services.UsuarioService;

@RestController
@RequestMapping("/api/v1/usuarios")
public class UsuarioController {

    private UsuarioService usuarioService = new UsuarioService();

    // GET /api/v1/usuarios
    @GetMapping
    public List<Usuario> findAll() {
        return usuarioService.listarTodos();
    }

    // GET /api/v1/usuarios/1
    @GetMapping("/{id}")
    public Usuario findById(@PathVariable Long id) {
        return usuarioService.buscarPorId(id);
    }

    // POST /api/v1/usuarios
    @PostMapping
    public Usuario save(@RequestBody Usuario usuario) {
        return usuarioService.salvar(usuario);
    }

    // PUT /api/v1/usuarios/1
    @PutMapping("/{id}")
    public Usuario update(@PathVariable Long id, @RequestBody Usuario usuario) {
        return usuarioService.atualizar(id, usuario);
    }

    // DELETE /api/v1/usuarios/1
    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable Long id) {
        return usuarioService.excluir(id);
    }
}