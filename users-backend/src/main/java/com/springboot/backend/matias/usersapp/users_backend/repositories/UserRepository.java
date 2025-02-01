package com.springboot.backend.matias.usersapp.users_backend.repositories;

import com.springboot.backend.matias.usersapp.users_backend.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Long> {
}
