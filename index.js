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
    work: [],
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
    addWorkExp = document.getElementById('addWorkExp'),
    workExpShowUl = document.getElementById('workExpShowUl'),
    projectTitle = document.getElementById('pTitle'),
    projectDesc = document.getElementById('pDesc'),
    projectLink = document.getElementById('pLink'),
    projectUl = document.getElementById('projectUl'),
    eduBtn = document.getElementById('edu-btn'),
    courseInput = document.getElementById('courseName'),
    collegeInput = document.getElementById('collegeName'),
    edUL = document.getElementById('edUL'),
    skillInput = document.getElementById('skills'),
    skillBtn = document.getElementById('skills-btn'),
    skUl = document.getElementById('skUl')

function projectBtn() {

    const proj = {
        projectTitle: projectTitle.value.trim(),
        projectDesc: projectDesc.value.trim(),
        projectLink: projectLink.value.trim()
    };

    // Push project object INTO array
    formData.projects.push(proj);

    // Validate inputs before creating UI
    if (proj.projectTitle && proj.projectDesc && proj.projectLink) {

        let li = document.createElement('li');
        li.className = 'relative hover:bg-gray-200 p-2 transition-all'
        li.innerHTML = `
           <h3 class="h3 text-sm font-semibold">${proj.projectTitle} <a  href="#" class="text-cyan-700 underline">${proj.projectLink}</a></h3>
            <p class="text-xs">${proj.projectDesc}</p>
            <div class="icon absolute right-2 top-2 text-gray-600 text-sm">
                <i class="fa-solid fa-delete-left"></i>
            </div>
        `;

        projectUl.appendChild(li);

        // Clear inputs
        projectTitle.value = '';
        projectDesc.value = '';
        projectLink.value = '';

        const icons = projectUl.querySelectorAll(".icon")
        console.log(icons);
        icons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                let removableLI = e.target.closest('li')
                removableLI.remove();

            })
        })

    } else return 0;

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
    // formData.work.companyName = companyName.value;
    // formData.work.workProfile = workProfile.value;
    // formData.work.workExp = workExp.value;
    // formData.work.workDesc = workDesc.value;
    formData.pInfo = pInfo.value;
    formData.careerObj = careerObj.value;

    console.log(JSON.stringify(formData));
    console.log(formData.skills)
    // localStorage.clear()
    localStorage.setItem('formData', JSON.stringify(formData))

    window.location.href = 'resume.html'
})

function addWorkExperience() {

    addWorkExp.addEventListener('click', () => {
        let workObj = {
            compName: companyName.value,
            workProf: workProfile.value,
            workEx: workExp.value,
            workDes: workDesc.value
        }

        formData.work.push(workObj) //push object to array

        companyName.value = ''
        workProfile.value = ''
        workExp.value = ''
        workDesc.value = ''

        workExpShowUl.innerHTML = '' //clear the UI before adding new one's
        formData.work.forEach((wor) => {
            const { compName, workProf, workEx, workDes } = wor;

            const li = document.createElement('li');
            li.className = 'list-disc'
            li.innerHTML = `
                            <h1 class="font-semibold">${compName}</h1>
                            <p class="text-sm">Working as a <span class="font-semibold text-base">${workProf}</span> from
                            <span class="font-semibold text-base ">${workEx}</span> </p>
                            <p class="text-gray-500 text-sm">${workDes}</p>
                        `;
            workExpShowUl.appendChild(li);

        })
    })
}
addWorkExperience()
