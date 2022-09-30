package com.abacus.abacusacademy.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Institute{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String institutename;
    private String address;
    public Institute()
    {
    }

    public int getId(){
    return id;
    }
    public void setId(int id){
        this.id=id;
    }
    public String getInstitutename(){
        return institutename;
    }
    public void setInstitutename(String institutename)
    {
        this.institutename=institutename;
    }

    public void setAddress(String address)
    {
        this.address=address;
    }
    
    public String getAddress(){
        return address;
    }
    

}
    
    
    
    