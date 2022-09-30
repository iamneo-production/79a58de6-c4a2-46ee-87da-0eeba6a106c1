package com.abacus.abacusacademy.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.abacusacademy.model.Course;
import com.abacus.abacusacademy.repository.CoursesRepository;

import java.util.List;
@Service
public class CoursesServiceImpl implements CoursesService {
	
	@Autowired
	private CoursesRepository coursesRepository;

    @Override
	public void savecourses(Course courses) {
		coursesRepository.save(courses);
		
	}

	@Override 
	public void delete(Integer id){
		coursesRepository.deleteById(id);
	}

	@Override
	public List<Course> getAllCourses(){
		return coursesRepository.findAll();
	}

}