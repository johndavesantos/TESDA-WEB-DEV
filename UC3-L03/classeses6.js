//ES6 Classes
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    greeting(){
    return `hey wazzup ${this.firstName} ${this.lastName}`;
    
    }

    static addNumbers(x , y){
        return x + y;
    }
}

const cesa = new Person('Cesa Mae' , 'Otero', '02-15-2021');

cesa.getsMarried('Santos');
console.log(cesa);