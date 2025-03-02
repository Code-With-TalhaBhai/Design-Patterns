


class Student:
    
    __name = None
    __age = None
    __cgpa = None


    def __init__(self):
        pass

    def setName(self,name):
        self.__name = name

    def setAge(self,age):
        self.__age = age
    
    def setCgpa(self,cgpa):
        self.__cgpa = cgpa
    
    # By-default, when we print class object, it prints its address like (0X234324), but when we use `__str__` it overwrites the print on-screen
    def __str__(self): 
        return f'Student_name={self.__name}, age={self.__age}, cgpa={self.__cgpa}'
    


class StudentBuilder():
    
    def __init__(self):
        self._student = Student()


    def setName(self,name):
        self._student.setName(name)
        return self

    def setAge(self,age):
        self._student.setAge(age)
        return self
    
    def setCgpa(self,cgpa):
        self._student.setCgpa(cgpa)
        return self
    
    def build(self):
        return self._student
    



student1 = StudentBuilder().setName('Talha').setAge(22).setCgpa(3.5).build()
student2 = StudentBuilder().setName('Aryan').setAge(21).setCgpa(3.5).build()
student3 = StudentBuilder().setName('Taha').setAge(21).build()

print(student1)
print(student2)
print(student3)



    
