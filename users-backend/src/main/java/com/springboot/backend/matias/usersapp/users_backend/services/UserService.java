package com.springboot.backend.matias.usersapp.users_backend.services;

import com.springboot.backend.matias.usersapp.users_backend.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();

    Page<User> findAll(Pageable pageable);

    Optional<User> findById(@NonNull Long id);

    User save(User user);

    void deleteById(Long id);
}
