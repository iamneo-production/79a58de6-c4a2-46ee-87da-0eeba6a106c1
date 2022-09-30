package com.abacus.abacusacademy.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Admission{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int studentid;
    private String coursesname;
    private String coursesDuration;
    private String institutename;
    public Admission()
    {
    }

    public int getId(){
        return id;
        }
        public void setId(int id){
            this.id=id;
        }

        public int getStudentid(){
            return studentid;
            }
            public void setStudentid(int studentid){
                this.studentid=studentid;
            }
    public String getCoursesname(){
        return coursesname;
    }
    public void setCoursesname(String coursesname)
    {
        this.coursesname=coursesname;
    }
    
    
    public void setCourseDuration(String coursesDuration)
    {
        this.coursesDuration=coursesDuration;
    }
    
    public String getCoursesDuration(){
        return coursesDuration;
    }
    public void setInstitutename(String institutename)
    {
        this.institutename=institutename;
    }
    
    public String getInstitutename(){
        return institutename;
    }
    

}
