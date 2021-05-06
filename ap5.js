// let myFunction = () => {
//     var x = document.getElementById("msg");
//     x.className = "show";
//     setTimeout(function() {
//         x.className =
//             x.className.replace("show", "");
//     }, 3000);
// }
// myFunction();
// Array.from(document.querySelectorAll('#registrationForm input')).reduce((acc, input => ({...acc, [input.id]: input.value })), {})
let emptyArray = [];
//Register Constructor

class Register {
    constructor(firstname, lastname, age, level, favouriteClub) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.level = level;
        this.favouriteClub = favouriteClub;
    }

}
//UI Constructor

class UI {
    // Add Book To List
    addRegisterToList = (json) => {
            const list = document.getElementById('register-list');

            //Create tr element
            const row = document.createElement('tr');
            //Insert cols
            row.innerHTML = `
      
        <td>${register.firstname}</td>
        <td>${register.lastname}</td>
        <td>${register.age}</td>
        <td>${register.level}</td>
        <td>${register.favouriteClub}</td>
        <td><a href="#" class="delete">X</a></td>  
        `;

            list.appendChild(row);
        }
        //Show Alert
    showAlert = (message, className) => {
            //Create div
            const div = document.createElement('div');
            div.className = `alert ${className}`;
            //Add text
            div.appendChild(document.createTextNode(message));
            //Get parent
            const container = document.querySelector('.register-form');
            //Get form
            const form = document.querySelector('#my-form');
            //Insert alert
            container.insertBefore(div, form);
            //Timeout after
            setTimeout(function() {
                document.querySelector('.alert').remove();
            }, 3000);
        }
        //Delete Register
    deleteRegister = (target) => {
            if (target.className === 'delete') {
                target.parentElement.parentElement.remove();
            }
        }
        //Clear Fields
    clearFields = () => {
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('age').value = '';
        document.getElementById('level').value = '';
        document.getElementById('favouriteClub').value = '';
    }
}


function submitFunction(e) {
    e.preventDefault();
    //Get form values
    const firstname = document.getElementById('firstname').value,
        lastname = document.getElementById('lastname').value,
        age = document.getElementById('age').value,
        level = document.getElementById('level').value,
        favouriteClub = document.getElementById('favouriteClub').value;
    //Instantiate book
    const register = new Register(firstname, lastname, age, level, favouriteClub);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if (firstname === '' || lastname === '' || age === '' || level === '' || favouriteClub === '') {
        //ERROR ALERT
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        //Add book to list
        ui.addRegisterToList(register);

        //Show success
        ui.showAlert('Book Added!', 'success');

        //Clear fields
        ui.clearFields();
    }

    emptyArray.push(register);
    let myJson = JSON.stringify(emptyArray);
}
//Event Listeners for add book
document.getElementById('my-form').addEventListener('submit', submitFunction);