// Add your code here

 test

function submitData(name, email) {
     const users = document.getElementById("users");
     users.addEventListener("submit", function (event) {
       event.preventDefault();
        console.log("Hey");
  
       let form = {
         userName: null,
         email: null,
       };
  
       const userName = "Dan";
       document.getElementById("userName").value;
  
       const email = "dan@123";
       document.getElementById("email").value;
       console.log("present")
  
       if (userName && email) {
         form = {
           userName: userName,
           email: email,
         };
       }
  
      return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
  
        body: JSON.stringify({
          name,
          //  name,
          email
           email,
        }),
       
      })
        .then((response) => response.json())
        .then((data) => {
          document.body.innerHTML = data.id
  
           alert("New User added successfully");
        })
        .catch((error) => {
  
        document.body.innerHTML = error.message
           alert("Please try again");
           console.log(error);
        });
  
       console.log(name, "", email, "");
    };
  
  
   submitData();
  
  
  
   function submitData(){
  
     document.getElementById("customForm").addEventListener("submit", async function(event){
       event.preventDefault();
  
       const username = document.getElementById("username").value;
       const email = document.getElementById("email").value;
  
       console.log('username', username);
       console.log('email', email);
  
       if (username && email) {
         try {
           const response = await fetch('http://localhost:3000/users', {
             method: 'POST',
             headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             username: username,
  //             email: email
  //           })
  //         });
  
  //         const data = await response.json();
  //         console.log(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   });
  // };
  // submitData();
  
  
  // function submitData(){
  // const users = document.getElementById("users")
  // users.addEventListener("submit", function(event){
  //   event.preventDefault();
  //   console.log(hey)
  
  // let form = {
  //   userName: null,
  //   email: null,
  // }
  
  // const userName = document.getElementById("userName").value;
  // const email = document.getElementById("email").value;
  // // console.log("present")
  
  // if(userName, email){
  //   form = {
  //     userName:userName,
  //     email:email
  //   }
  
    
  // }
  
  // fetch(` http://localhost:3000/users`, {
  // method:"POST",
  // body: JSON.stringify({
  //   name: userName,
  //   email: email,
  // }),
  // headers:{
  // "Content-Type":"application/json",
  
  // }
  // })
  // .then((response)=> response.json())
  // .then((data) => {
  //  alert("New User added successfully")
  
  //  .catch(((error)))(
  //   alert("Please try again"),
  //   console.log(error)
  //  )
  
  // })
  // console.log(name,"",email, "")
  // })
  
  
  // }
  // submitData()
  
  // function submitData() {
  //   const usersForm = document.getElementById("users");
  
  //   usersForm.addEventListener("submit", function (event) {
  //     event.preventDefault();
  
  //     const name = document.getElementById("name").value;
  //     const email = document.getElementById("email").value;
  
  //     return fetch(`http://localhost:3000/users`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Assuming there's an element with the id "userId" to display the new id
  //         const userIdElement = document.getElementById("userId");
  //         userIdElement.textContent = `New User ID: ${data.id}`;
  //         alert("New User added successfully");
  //       })
  //       .catch((error) => {
  //         // Assuming there's an element with the id "error" to display the error message
  //         const errorElement = document.getElementById("error");
  //         errorElement.textContent = `Error: ${error.message}`;
  //       });
  //   });
  // }
  
  // // Call the submitData function
  // submitData();