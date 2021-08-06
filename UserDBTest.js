/*  Program:    Testing with Arrays
    Developer:  Bart Verschooren
    Date:       02/08/2021
*/

// Declarations

var UserArray = [
    {
    "FirstName": "Jason",
    "LastName": "Briggs", 
    "Age": 38, 
   #todo "Spoken languages": ["French", "Germamn", "Russian"]
    },
    {
    "FirstName": "Tom",
    "LastName": "Humvey", 
    "Age": 40,
    "Spoken languages": ["English", "Polish"]
    },
    {
    "FirstName": "John",
    "LastName": "Power", 
    "Age": 44,
    "Spoken languages": ["English"]
    }
]

// Functions

function AddUser(fname, lname, yrs){                                                        // function wich pushes a new use on top of the array
    var myFourthUser = {
        FirstName: fname,
        LastName: lname, 
        Age: yrs
    }
    UserArray.push(myFourthUser);
}

function RemoveUser(){
    return UserArray.pop().FirstName
}

function PrintUsers(){                                                                      // A for-loop used to console the items and their properties in the UserArray
    
    console.log("\nThe User Database consists of these " + UserArray.length + " people:\n");  
    
    for (let i = 0; i < UserArray.length; i++) {      
        console.log("First name: " + UserArray[i].FirstName);
        console.log("Last name: " + UserArray[i].LastName);
        console.log("Spoken Languages: " + UserArray[i]["Spoken languages"]);
        console.log("Age: " + UserArray[i].Age);
        console.log("");
    }
}

// And action!

PrintUsers();                                                                               // console Users
console.log("\nLet's remove " + RemoveUser() + ".\n");                                        // Pop out the last item
PrintUsers();                                                                               // console users again

console.log("Let's add some diversity:");                                   
AddUser("Francine", "Pewderschmidt", 65, ["Russian", "Arabic", "Mandarin", "Dutch"]);       // add a user calling AddUser()
PrintUsers();