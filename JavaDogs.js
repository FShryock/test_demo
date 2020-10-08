console.log ("Javascript connected!")

let button = document.getElementById("btndog");
    searchbtn = document.getElementById("srch");

// You can do this method

// button.onclick = function(){
//     alert("Because you care!");
// };

// Or this one! much better
button.addEventListener('click', test);

function test(){
    let name = prompt('Enter Your Name', "Name");
    alert(name + " Because you Care!!");
}

// Search button alert

srch.addEventListener('click', lookUp);

function lookUp(){
    alert('Not working at the moment!');
};