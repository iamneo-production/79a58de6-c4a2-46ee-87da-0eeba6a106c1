package com.abacus.abacusacademy.service;

import java.util.List;

import com.abacus.abacusacademy.model.Institute;

public interface InstituteService {
	public String saveInstitute(Institute institute);
	public List<Institute> getAllInstitutes();
    public void delete(Integer id);
}
