package com.springboot.backend.matias.usersapp.users_backend.services;

import com.springboot.backend.matias.usersapp.users_backend.entities.User;
import com.springboot.backend.matias.usersapp.users_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

//    @Autowired // Si tengo el constructor no es necesario el autowired
    private UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    @Override
    public List<User> findAll() {
        return (List<User>) this.repository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findById(@NonNull Long id) {
        return this.repository.findById(id);
    }

    @Transactional
    @Override
    public User save(User user) {
        return this.repository.save(user);
    }

    @Transactional
    @Override
    public void deleteById(Long id) {
        this.repository.deleteById(id);
    }
}
