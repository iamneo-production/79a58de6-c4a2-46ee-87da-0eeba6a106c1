
package com.abacus.abacusacademy.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.abacusacademy.model.User;
import com.abacus.abacusacademy.repository.UserRepository;
import java.util.NoSuchElementException;
import java.util.List;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public String saveuser(User user) {
		userRepository.save(user);
		return null;
	}
	
	@Override
	public User getEmail(String email){
		User user=userRepository.findByEmail(email);
		if(user!=null){
		 return user;
		}
		else{
		 throw new NoSuchElementException();
		}
	 }
	@Override
	public List<User> getAllUser(){
		return userRepository.findAll();
	 } 
	 @Override 
	 public void delete(Integer id){
		 userRepository.deleteById(id);
	 }
	


}
