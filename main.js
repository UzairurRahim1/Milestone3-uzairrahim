var form = document.getElementById('resume-data');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact no').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n<h2><b>My Resume</b></h2>\n<h3>PERSONAL INFORMATION</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Contact No:</b>").concat(contact, "</p>\n\n<h3>EDUCATION</h3>\n<p>").concat(education, "\n\n<h3>WORKING EXPERIENCE</h3>\n<p>").concat(experience, "\n\n<h3>SKILLS</h3>\n<p>").concat(skills, "\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Please fill boxes');
    }
    ;
});
