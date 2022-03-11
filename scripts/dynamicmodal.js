// Modal Pop-Up and Dynamic Load //
const projectSectionDom = document.querySelector('.works-section');
const popupModal = document.querySelector('.modal');
const closeModal = document.querySelector('.cross');
const nameDom = document.querySelector('.modalTitle');
const descriptionDom = document.querySelector('.modalDesc');
const technologiesDom = document.querySelector('.modalTags');
const sourceLinkDom = document.querySelector('.viewProject');
const demoLinkDom = document.querySelector('.viewProject');

const roleNameModal = document.querySelector('.modalRole');
const yearDateModal = document.querySelector('.modalYear');
const projectImageLinkDom = document.querySelector('.modalImg');
const mobileMenu = document.querySelector('.menu-icon');
const logo = document.querySelector('.logo');

const projectsArray = [
  {
    card: 'card1',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'src/SnapshootPortfolio.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    card: 'card2',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'src/SnapshootPortfolio1.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    card: 'card3',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'src/SnapshootPortfolio2.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    card: 'card4',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'src/SnapshootPortfolio3.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    card: 'card8',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'desk/SnapshootPortfolio4.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    card: 'card5',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'desk/SnapshootPortfolio5.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    card: 'card6',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'desk/SnapshootPortfolio6.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    card: 'card7',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modaldesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: 'desk/SnapshootPortfolio7.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
];

(() => {
  projectSectionDom.innerHTML = '';
  for (let i = 0; i < projectsArray.length; i += 1) {
    let techlist = '';
    for (let j = 0; j < projectsArray[i].tags.length; j += 1) {
      techlist = `${techlist}<li class="tag">${projectsArray[i].tags[j]}</li>`;
    }
    projectSectionDom.innerHTML = `${projectSectionDom.innerHTML}
    <ul class="${projectsArray[i].card}">
    <li class="project">
      <img src="${projectsArray[i].imageLink}" alt="Snapshot">
        <div class="description">
            <h2 class="title">${projectsArray[i].title}</h2>
            <div class="info">
                <p class="subTitle">${projectsArray[i].company}</p>
                <ul class="infoContainer">
                    <li class="role">${projectsArray[i].role}</li>
                    <li class="year">${projectsArray[i].year}</li>
                </ul>
            </div>
            <p class="projectDescription">
                ${projectsArray[i].description}  
            </p>
            <div class="tags">
                <ul class="tagsFlex">
                  ${techlist}
                </ul>
            </div>
            <button type="button" class="viewProject prj-view-btn">
                See Project
            </button>
        </div>
    </li>
</ul>`;
  }
  const viewBtn = document.querySelectorAll('.prj-view-btn');
  for (let i = 0; i < viewBtn.length; i += 1) {
    viewBtn[i].addEventListener('click', (event) => {
      const i = event.currentTarget.index;
      nameDom.innerHTML = projectsArray[i].title;
      roleNameModal.innerHTML = projectsArray[i].role;
      yearDateModal.innerHTML = projectsArray[i].year;
      descriptionDom.innerHTML = projectsArray[i].modaldesc;
      projectImageLinkDom.src = projectsArray[i].imageLink;
      sourceLinkDom.action = projectsArray[i].sourceLink;
      demoLinkDom.action = projectsArray[i].demoLink;
      technologiesDom.innerHTML = '';
      for (let j = 0; j < projectsArray[i].tags.length; j += 1) {
        technologiesDom.innerHTML = `${technologiesDom.innerHTML}<li class="tag">${projectsArray[i].tags[j]}</li>`;
      }
      popupModal.classList.remove('vanish');
      popupModal.classList.add('show');
      mobileMenu.classList.add('blur');
      logo.classList.add('blur');
    });
    viewBtn[i].index = i;
  }
})();

closeModal.addEventListener('click', () => {
  popupModal.classList.remove('show');
  popupModal.classList.add('vanish');
  mobileMenu.classList.remove('blur');
  logo.classList.remove('blur');
});