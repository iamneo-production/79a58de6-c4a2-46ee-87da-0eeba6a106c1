package com.abacus.abacusacademy.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.abacus.abacusacademy.model.User;
import com.abacus.abacusacademy.service.UserService;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.NoSuchElementException;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")
public class HomeController {
	@Autowired
	private UserService userService;

	@GetMapping("/getAll")
    public List<User> list(){
		return userService.getAllUser();
	}
	@PostMapping("/saveuser")
	public String saveUser(@RequestBody User userData){
		System.out.println(userData.getEmail());
		userService.saveuser(userData);
		System.out.println("success");
		return "success";
	}
	@GetMapping("/login/{email}")
    public ResponseEntity<User> getEmail(@PathVariable String email){
        try{
            User user=userService.getEmail(email);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }
        catch(NoSuchElementException e){
         return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }
	@DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        userService.delete(id);
        return "Deleted admission with id "+id;
    }
}
