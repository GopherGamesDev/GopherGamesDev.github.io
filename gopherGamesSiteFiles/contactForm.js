//
//      Author: Mike Adams
//      Last Edited: 10/7/24
//


let contactForm = document.querySelectorAll("form > input");

for (let i = 0; i < contactForm.length; i++) {
    contactForm[i].onblur = function () {
        try { validateField(contactForm[i], contactForm[i].name) }
        catch (ele) {
            ele.reportValidity();
        }
    };
}

document.getElementById("contactSubmit").onclick = function () {
    let valid = true;
    try {
        for (let i = 0; i < contactForm.length; i++) {
            validateField(contactForm[i], contactForm[i].name);
        }
    }
    catch (ele) {
        valid = false;
        ele.reportValidity();
    }
    if (valid) {
        let msg = "";
        let msgArr = makeConfirmMsg();

        for (s of msgArr) {
            msg += s;
        }

       if(window.confirm(msg + "Is this correct?"))
            window.open('mailto:gophergames.dev@gmail.com?subject=Contact_Form');
    }
}

function validateField(ele, name) {
    
    switch (name) {
        case "firstName":
            if (ele.value === "") {
                ele.setCustomValidity("Please enter your first name");
                throw ele
            }
            break;

        case "lastName":
            if (ele.value === "") {
                ele.setCustomValidity("Please enter your last name");
                throw ele
            }
            break;

        case "email":
            let userEmail = ele.value.trim();
            let re = new RegExp(/^[^@]+@[^@]+\.[^@]+$/);

            if (!(re.test(userEmail)) || userEmail == "") { 
                ele.setCustomValidity("Please enter a valid email address");
                throw ele
            }
            break;

        case "phoneNum":
            let phoneNum = ele.value.trim();
            let pho_re = new RegExp(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);

            if(!(pho_re.test(phoneNum)) && phoneNum != "") {
                ele.setCustomValidity("Please enter a valid phone number");
                throw ele
            }
            break;

        default:
            ele.setCustomValidity("");
    }
}

function makeConfirmMsg() {
    let formData = [];

    let purpose = document.getElementById("purpose");
    let mailList;
    if (document.getElementById("yes").checked)
        mailList = "Yes";
    else
        mailList = "No";

    formData.push("First Name: " + document.getElementById("firstName").value + "\n");
    formData.push("Last Name: " + document.getElementById("lastName").value + "\n");
    formData.push("Company: " + document.getElementById("company").value + "\n");
    formData.push("Email: " + document.getElementById("email").value + "\n");
    formData.push("Phone Number: " + document.getElementById("phoneNum").value + "\n");
    formData.push("Purpose: " + purpose.options[purpose.selectedIndex].text + "\n");
    formData.push("Join Mailing List: " + mailList + "\n\n");

    return formData;
}