


class Student{

    #name;
    #age;
    #cgpa;

    setName(name){
        this.#name = name
    }

    setAge(age){
        this.#age = age
    }

    setCgpa(cgpa){
        this.#cgpa = cgpa
    }

    display(){
        console.log(`Student_name=${this.#name}, Student_Age=${this.#age}, Student_CGPA=${this.#cgpa}`)
    }

}


class StudentBuilder {

    constructor(){
        this._student = new Student()
    }

    setName(name){
        this._student.setName(name)
        return this
    }

    setAge(age){
        this._student.setAge(age)
        return this
    }

    setCgpa(cgpa){
        this._student.setCgpa(cgpa)
        return this
    }

    build(){
        return this._student
    }
}



let student1 = new StudentBuilder().setName('Talha').setCgpa(3.5).setAge(22).build()
let student2 = new StudentBuilder().setName('Khizer').setCgpa(3.3).setAge(21).build()
let student3 = new StudentBuilder().setName('Zain').setCgpa(3.3).setAge(21).build()

student1.display()
student2.display()
student3.display()