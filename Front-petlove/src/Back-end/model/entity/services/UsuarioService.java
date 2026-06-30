package com.TCC2E.usuarios.model.services;

import java.util.ArrayList;
import java.util.List;
import com.TCC2E.usuarios.model.entity.Usuario;

public class UsuarioService {

    // Lista que simula um banco de dados
    private static List<Usuario> USUARIOS = new ArrayList<>();

    // Dados iniciais para teste
    static {
        Usuario u1 = new Usuario();
        u1.setId(1L);
        u1.setNome("João Silva");
        u1.setEmail("joao@email.com");
        u1.setSenha("123456");
        u1.setTipoUsuario("Admin");
        u1.setCodStatus(true);
        USUARIOS.add(u1);
    }

    // CREATE
    public Usuario salvar(Usuario usuario) {
        usuario.setId(gerarNovoId());
        USUARIOS.add(usuario);
        return usuario;
    }

    // READ - todos
    public List<Usuario> listarTodos() {
        return USUARIOS;
    }

    // READ - por id
    public Usuario buscarPorId(Long id) {
        for (Usuario u : USUARIOS) {
            if (u.getId().equals(id)) return u;
        }
        return null;
    }

    // UPDATE
    public Usuario atualizar(Long id, Usuario atualizado) {
        Usuario usuario = buscarPorId(id);
        if (usuario != null) {
            usuario.setNome(atualizado.getNome());
            usuario.setEmail(atualizado.getEmail());
            usuario.setSenha(atualizado.getSenha());
            usuario.setTipoUsuario(atualizado.getTipoUsuario());
            usuario.setCodStatus(atualizado.isCodStatus());
            return usuario;
        }
        return null;
    }

    // DELETE
    public boolean excluir(Long id) {
        Usuario usuario = buscarPorId(id);
        if (usuario != null) {
            USUARIOS.remove(usuario);
            return true;
        }
        return false;
    }

    // Gera ID automático
    private Long gerarNovoId() {
        Long maiorId = 0L;
        for (Usuario u : USUARIOS) {
            if (u.getId() > maiorId) maiorId = u.getId();
        }
        return maiorId + 1;
    }
}