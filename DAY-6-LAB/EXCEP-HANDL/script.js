function divisionNo(a, b)
{
    try{
        if(b==0)
        {
            throw new Error("Denominator should not be zero. Please put a non-zero number");
        }
        const div=a/b;
        return div;
    }
    catch(error)
    {
        console.log("Error occured:"+error.message);
    }
}

//const res1 = divisionNo(10,0);
//console.log("Divison is :"+res1);


const student = {
    name: 'John Doe',
    age: 20,
};

function displayStudentDetails() {
    try {        
        console.log('Student Name:', student.name);
        if(student.grade)
        {
        console.log('Student Grade:', student.grade);
        }
        else{
            throw new Error("This attribute is not defined");
        }
    } catch (error) {
        document.getElementById("para").innerHTML=error.message; 
    }
}
displayStudentDetails();