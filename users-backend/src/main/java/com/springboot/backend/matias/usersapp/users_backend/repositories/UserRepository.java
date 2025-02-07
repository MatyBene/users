package com.springboot.backend.matias.usersapp.users_backend.repositories;

import com.springboot.backend.matias.usersapp.users_backend.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    Page<User> findAll(Pageable pageable);
}
