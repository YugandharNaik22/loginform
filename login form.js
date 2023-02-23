let display_name = document.getElementById("display_name");
let display_email = document.getElementById("display_email");
let display_phoneno = document.getElementById("display_phoneno")
let display_website = document.getElementById("display_website");
let display_skills = document.getElementById("display_skills");

function showDetails() {
    var nameE1 = document.getElementById("name").value;
    var emailE1 = document.getElementById("email").value;
    var phonenoE1 = document.getElementById("phoneno").value;
    var websiteE1 = document.getElementById("website").value;
    var skillsE1 = document.getElementById("skill").value;
    display_name.innerHTML = nameE1;
    display_email.innerHTML = emailE1;
    display_phoneno.innerHTML = phonenoE1;
    display_website.innerHTML = websiteE1;
    display_skills.innerHTML = skillsE1;
}