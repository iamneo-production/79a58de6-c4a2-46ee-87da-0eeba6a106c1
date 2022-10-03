package com.abacus.abacusacademy.service;

import java.util.List;

import com.abacus.abacusacademy.model.Admission;

public interface AdmissionService {
	public  List<Admission> getAllAdmissions();
    public void delete(Integer id);
    public void saveadmission(Admission admissionData);
}

