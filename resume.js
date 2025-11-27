let rName = document.getElementById('rName');
let address = document.getElementById('rAddrs');
let phone = document.getElementById('rPhone');
let email = document.getElementById('rEmail');
let linkdin = document.getElementById('rLinkdin');
let github = document.getElementById('rGithub');
let profSumm = document.getElementById('profSumm');
let careeObj = document.getElementById('careeObj');
let skills = document.getElementById('skills');
let rEduUl = document.getElementById('rEdUL');
let colName = document.getElementById('collegeName');
let projectTitle = document.getElementById('projectTitle');
let projDesc = document.getElementById('projDesc');
let work = document.getElementById('work');

let saveData = JSON.parse(localStorage.getItem('formData')) || [];

console.log(saveData);

rName.textContent = saveData.name;
address.textContent = saveData.address;
phone.textContent = saveData.phone;
email.textContent = saveData.email;
linkdin.href = saveData.linkedIn;
github.href = saveData.github;
profSumm.textContent = saveData.pInfo;
careeObj.textContent = saveData.careerObj;
skills.textContent = saveData.skills.join(', ');

const educationData = Array.isArray(saveData.education) ? saveData.education : [saveData.education];
rEduUl.innerHTML = saveData.education.map(edu => {
    return `<li>
                <strong>${edu.courseName}</strong>
                <p class="text-sm">${edu.collegeName}</p>
            </li>`;
}).join('')


const projectData = Array.isArray(saveData.projects) ? saveData.projects : [saveData.projects];
projectUl.innerHTML = saveData.projects.map(project => {
    return `<li class="">
                <strong>${project.projectTitle}</strong>
                <p>${project.projectDesc}</p>
            </li>`;
}).join('')


const workData = Array.isArray(saveData.work) ? saveData.work : [saveData.work];

let li = document.createElement('li');
li.innerHTML = workData.map(e => {
    console.log(e.compName);
    
    return `
    <h1 class="font-semibold">${e.compName}</h1>
    <p class="text-sm">Working as a <span class="font-semibold text-base">${e.workProf}</span> from
    <span class="font-semibold text-base ">${e.workEx}</span> </p>
    <p class="text-gray-500 text-sm">${e.workDes}</p>
    `
}).join('')

work.appendChild(li);

localStorage.removeItem('data')



