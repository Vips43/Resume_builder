let formData = {
    name: '',
    address: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    skills: [],
    pInfo: '',
    careerObj: '',
    education: [],
    work: {
        companyName:'',
        workProfile: '',
        workExp: '',
        workDesc: ''
    },
    projects: [],
}



let myForm = document.getElementById('myForm')
let nameInput = document.getElementById('name'),
    addrsInput = document.getElementById('addrs'),
    phoneInput = document.getElementById('phone'),
    emailInput = document.getElementById('email'),
    linkdin = document.getElementById('linkdin'),
    github = document.getElementById('github'),
    pInfo = document.getElementById('pInfo'),
    bIntro = document.getElementById('bIntro'),
    edu = document.getElementById('edu'),
    companyName = document.getElementById('cName'),
    workProfile = document.getElementById('wProfile'),
    workExp = document.getElementById('wExp'),
    workDesc = document.getElementById('wDesc'),
    projectTitle = document.getElementById('pTitle'),
    projectDesc = document.getElementById('pDesc'),
    projectUl = document.getElementById('projectUl'),
    eduBtn = document.getElementById('edu-btn'),
    courseInput = document.getElementById('courseName'),
    collegeInput = document.getElementById('collegeName'),
    edUL = document.getElementById('edUL'),
    skillInput = document.getElementById('skills'),
    skillBtn = document.getElementById('skills-btn'),
    skUl = document.getElementById('skUl')






function projectBtn() {
    formData.projects.projectTitle = projectTitle.value;
    formData.projects.projectDesc = projectDesc.value;
    if (projectTitle.value && projectDesc.value) {

        let li = document.createElement('li'); 
        li.innerHTML = `<strong>${projectTitle.value}</strong>
                    <p>${projectDesc.value}</p>`;

        projectUl.appendChild(li);
        formData.projects.push({
            projectTitle: projectTitle.value,
            projectDesc: projectDesc.value
        });

        projectTitle.value = '';
        projectDesc.value = '';
    }
}


eduBtn.addEventListener('click', () => {
    if (courseInput.value && collegeInput.value) {
        let courseName = courseInput.value,
            collegeName = collegeInput.value
            let li = document.createElement('li');
        li.innerHTML = `
        <strong>${courseName}</strong>
        <p class="text-sm">${collegeName}</p>
        `
        edUL.appendChild(li);
        formData.education.push({
            courseName: courseName,
            collegeName: collegeName
        })
        courseInput.value = ''
        collegeInput.value = ''
    }
})



skillBtn.addEventListener('click', () => {
    let skillValue = skillInput.value;
    console.log(!skillValue);
    if (skillValue) {
        skUl.innerHTML += `<li class="text-xs border border-gray-400 w-fit h-fit px-2 py-2 rounded-2xl">
            <span>${skillValue}</span>
            <i class="fa-solid fa-xmark cursor-pointer delete"></i>
        </li>`


        formData.skills.push(skillValue);
        skillInput.value = '';
    }
    let delet = document.querySelectorAll('.delete');
    delet.forEach(del => {
        del.addEventListener('click', (e) => {
            let skillText = e.target.previousElementSibling.textContent;
            e.target.parentElement.remove();
            formData.skills = formData.skills.filter(s => s !== skillText);
        })
    })
})




myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Form submitted')

    formData.name = nameInput.value;
    formData.email = emailInput.value;
    formData.phone = phoneInput.value;
    formData.address = addrsInput.value;
    formData.linkedin = linkdin.value;
    formData.github = github.value;
    formData.work.companyName = companyName.value;
    formData.work.workProfile = workProfile.value;
    formData.work.workExp = workExp.value;
    formData.work.workDesc = workDesc.value;
    formData.pInfo = pInfo.value;
    formData.careerObj = careerObj.value;

    console.log(JSON.stringify(formData));
    console.log(formData.skills)
    localStorage.clear()
    localStorage.setItem('formData', JSON.stringify(formData))

    window.location.href = 'resume.html'
})


