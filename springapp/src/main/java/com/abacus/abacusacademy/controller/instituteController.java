package com.abacus.abacusacademy.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.abacus.abacusacademy.model.Institute;
import com.abacus.abacusacademy.service.InstituteService;

import java.util.List;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/institute")
public class instituteController {
	@Autowired
	private InstituteService instituteService;
	
	@PostMapping("/saveinstitute")
	public String saveInstitute(@RequestBody Institute instituteData){
		instituteService.saveInstitute(instituteData);
		System.out.println("success");
		return "success";
	}
	@GetMapping("/getAll")
    public List<Institute> list(){
		return instituteService.getAllInstitutes();
	}

	@DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        instituteService.delete(id);
        return "Deleted Student with id "+id;
    }
	
}
