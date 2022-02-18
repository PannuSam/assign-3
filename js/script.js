document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("register");
    const msg =document.getElementById("success");
    getStudents();
    form.addEventListener("submit", 
        registerStudent);

    function registerStudent(event) {
        console.log("inside registerStudent function");
       msg.textContent= "Student registered successfully!";
       event.preventDefault();
       document.body.append(form);
       fetch("https://jsonplaceholder.typicode.com/posts", {
     
        method: "POST",
        body: JSON.stringify({
            name: "adss",
            email: "sa@gmail.com",
            mobile: 123
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));


    }

    function getStudents() {
        console.log("inside getStudents function");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(res => {

                let li = `<tr><th>Student's Name</th><th>Email</th></tr>`;

    
        res.forEach(students => {
            li += `<tr>
                <td>${students.name} </td>
                <td>${students.email}</td>		
            </tr>`;
        });

document.getElementById("students").innerHTML = li;
});
}
});