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
import com.abacus.abacusacademy.model.Admission;
import com.abacus.abacusacademy.service.AdmissionService;
import java.util.List;
import java.util.stream.Collectors;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/admission")
public class AdmissionController {
	@Autowired
	private AdmissionService admissionService;
	
	@PostMapping("/saveadmission")
	public String saveadmission(@RequestBody Admission admissionData){
		admissionService.saveadmission(admissionData);
		System.out.println(admissionData);
		System.out.println("success");
		return "success";
	}
	@GetMapping("/getAll/{id}")
    public List<Admission> list(@PathVariable Integer id){
		System.out.println(id);
		List<Admission> data = admissionService.getAllAdmissions();
		List<Admission> data1 = data.stream().filter(e->e.getStudentid()==(id)).collect(Collectors.toList());
		return data1;
	}
	@GetMapping("/getAll")
    public List<Admission> list(){
		return admissionService.getAllAdmissions();
	}
	
	
	@DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        admissionService.delete(id);
        return "Deleted admission with id "+id;
    }
	
}