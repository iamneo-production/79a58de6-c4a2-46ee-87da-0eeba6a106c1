
package com.abacus.abacusacademy.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.abacusacademy.model.Institute;
import com.abacus.abacusacademy.repository.InstituteRepository;

import java.util.List;
@Service
public class InstituteServiceImpl implements InstituteService {
	
	@Autowired
	private InstituteRepository instituteRepository;

	@Override
	public String saveInstitute(Institute institute) {
		instituteRepository.save(institute);
		return null;
	}

	@Override 
	public void delete(Integer id){
		instituteRepository.deleteById(id);
	}

	@Override
	public List<Institute> getAllInstitutes(){
		return instituteRepository.findAll();
	}

}
