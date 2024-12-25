const form = document.getElementById('resume-data') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const contact = (document.getElementById('contact no') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value

const resumeHTML = `
<h2><b>My Resume</b></h2>
<h3>PERSONAL INFORMATION</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Contact No:</b>${contact}</p>

<h3>EDUCATION</h3>
<p>${education}

<h3>WORKING EXPERIENCE</h3>
<p>${experience}

<h3>SKILLS</h3>
<p>${skills}
`;
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else {console.error ('Please fill boxes')};
});