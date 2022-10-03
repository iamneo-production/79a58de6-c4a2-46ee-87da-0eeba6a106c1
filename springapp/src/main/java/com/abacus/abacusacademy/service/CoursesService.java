package com.abacus.abacusacademy.service;

import java.util.List;

import com.abacus.abacusacademy.model.Course;

public interface CoursesService {
	public  List<Course> getAllCourses();
    public void delete(Integer id);
    public void savecourses(Course coursesData);
}

