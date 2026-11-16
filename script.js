function showSection(id){
    const sections = document.querySelectorAll('section');

    for(let i =0; i < sections.length; i++){
        sections[i].classList.add('hidden');
    }

    document.getElementById(id).classList.remove('hidden');
}

const links = document.querySelectorAll('.sidebar a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault(); 
        
        const sectionName = links[i].dataset.section;
        
        showSection(sectionName);
    });
}