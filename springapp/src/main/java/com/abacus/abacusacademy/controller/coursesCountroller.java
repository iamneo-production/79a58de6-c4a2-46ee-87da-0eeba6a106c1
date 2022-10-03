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
import com.abacus.abacusacademy.model.Course;
import com.abacus.abacusacademy.service.CoursesService;
import java.util.List;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/courses")
public class coursesCountroller {
	@Autowired
	private CoursesService coursesService;
	
	@PostMapping("/savecourses")
	public String savecourses(@RequestBody Course coursesData){
		coursesService.savecourses(coursesData);
		System.out.println(coursesData);
		System.out.println("success");
		return "success";
	}
	@GetMapping("/getAll")
    public List<Course> list(){
		return coursesService.getAllCourses();
	}
	
	
	@DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        coursesService.delete(id);
        return "Deleted Student with id "+id;
    }
	
}