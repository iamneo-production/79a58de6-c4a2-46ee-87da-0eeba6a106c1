package com.abacus.abacusacademy.service;

import java.util.List;

import com.abacus.abacusacademy.model.User;

public interface UserService {
	public String saveuser(User user);
	public User getEmail(String email);
	public  List<User> getAllUser();
	public void delete(Integer id);
}
