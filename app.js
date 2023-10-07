function submitForm() {
    var username = document.getElementById("username").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.getElementById("gender").value;
    var Phone = document.getElementById("Phone").value;
    var grade = document.getElementById("grade").value;

    // For Major
    var Administration = document.getElementById("Administration").checked;
    var Value = document.getElementById("Administration").value;

    var IT = document.getElementById("IT").checked;
    var Value2 = document.getElementById("IT").value;

    var Science = document.getElementById("Science").checked;
    var Value3 = document.getElementById("Science").value;

    var Art = document.getElementById("Art").checked;
    var Value4 = document.getElementById("Art").value;

    // Making Table 
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    // Add tr and td to the table
    let call = document.getElementById("table1");
    call.appendChild(tr);
    call.appendChild(td);
    call.appendChild(td2);
    call.appendChild(td3);
    call.appendChild(td4);
    call.appendChild(td5);

    td.innerHTML = username;
    td2.innerHTML = birthday;
    td3.innerHTML = gender;
    td4.innerHTML = Phone;
    td5.innerHTML = grade;

    // constructor
    class Student {
        constructor(Name, Date, Gender, Major, Phone, Grade) {
            this.Name = Name;
            this.date = Date;
            this.gender = Gender;
            this.major = Major;
            this.phone = Phone;
            this.grade = Grade;
        }
    }

    function createCard(student) {
        var cardContainer = document.getElementById('card-container');

        var div = document.createElement('div');
        var card2 = document.createElement('div');
        var cardImage = document.createElement('img');
        var cardText = document.createElement('p');
        var cardText2 = document.createElement('p');
        var cardText3 = document.createElement('p');
        var cardText4 = document.createElement('p');
        var cardText5 = document.createElement('p');

        cardImage.src = 'img/person.jpg';
        cardImage.alt = 'Student Image';
        cardImage.style.width = '100%';
        cardImage.style.height = 'auto';

        div.className = 'card-cont';
        card2.className = 'card2';
        
        cardText.textContent = "Name: " + student.Name;
        cardText2.textContent = "Date of Birth: " + student.date;
        cardText3.textContent = "Major: " + student.major;
        cardText4.textContent = "Phone Number: " + student.phone;
        cardText5.textContent = "Grade: " + student.grade;
        
        card2.appendChild(cardImage);
        div.appendChild(card2);

        card2.appendChild(cardText);
        card2.appendChild(cardText2);
        card2.appendChild(cardText3);
        card2.appendChild(cardText4);
        card2.appendChild(cardText5);
        cardContainer.appendChild(div);
        console.log(div);
    }

    if (Administration) {
        let student = new Student(username, birthday, gender, Value, Phone, grade);
        createCard(student);
    } else if (IT) {
        let student = new Student(username, birthday, gender, Value2, Phone, grade);
        createCard(student);
    } else if (Science) {
        let student = new Student(username, birthday, gender, Value3, Phone, grade);
        createCard(student);
    } else if (Art) {
        let student = new Student(username, birthday, gender, Value4, Phone, grade);
        createCard(student);
    }
}
