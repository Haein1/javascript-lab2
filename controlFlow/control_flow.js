let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "sub"

if (isLoggedIn){
    if(userRole === "Admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!"
    }

}else{
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage)



// if (userRole === "admin"){
//     accessLevel = "Full access granted";
// }else if (userRole === "manager"){
//     accessLevel = "Limited access granted";
// }else{
//     accessLevel = "No access granted";
// }

// console.log("Access Level:", accessLevel)