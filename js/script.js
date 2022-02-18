document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("register");
    const msg =document.getElementById("success");



    form.addEventListener("submit", 
        registerStudent);

    function registerStudent(event) {
        console.log("inside registerStudent function");
       msg.textContent= "Student registered successfully!";
       event.preventDefault();
       document.body.append(form);
       

       fetch("https://jsonplaceholder.typicode.com/posts", {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
            name: form.get,
            email: "sa@gmail.com",
            mobile: 123
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    // Converting to JSON
    .then(response => response.json())
     
    // Displaying results to console
    .then(json => console.log(json));


    }

    function getStudents() {
        console.log("inside getStudents function");
       
       

       fetch("https://jsonplaceholder.typicode.com/posts", {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
            name: "sa",
            email: "sa@gmail.com",
            mobile: 123
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    // Converting to JSON
    .then(response => response.json())
     
    // Displaying results to console
    .then(json => console.log(json));


    }

});