package com.abacus.abacusacademy.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.abacusacademy.model.Admission;
import com.abacus.abacusacademy.repository.AdmissionRepository;

import java.util.List;
@Service
public class AdmissionServiceImpl implements AdmissionService {
	
	@Autowired
	private AdmissionRepository admissionRepository;

    @Override
	public void saveadmission(Admission admission) {
		admissionRepository.save(admission);
		
	}

	@Override 
	public void delete(Integer id){
		admissionRepository.deleteById(id);
	}

	@Override
	public List<Admission> getAllAdmissions(){
		return admissionRepository.findAll();
	}

}