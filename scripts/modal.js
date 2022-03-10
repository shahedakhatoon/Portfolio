//Array
const data = [
    {
        card: {
            mobile: 'card1',
            desktop: 'card1',
        },
        name: {
            mobile: 'Tonic',
            desktop: 'Tonic',
        },
        job: {
            mobile: {
                client: 'Canopy',
                role: 'Back End Dev',
                year: '2015',
            },
            desktop: {
                client: 'Canopy',
                role: 'Back End Dev',
                year: '2015',
            }
        },
        summary: {
            mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

            desktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      
            modaldesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
          },
        image: {
            mobile: 'src/SnapshootPortfolio.png',
            desktop: 'desk/SnapshootPortfolio4.png',
          }, 
        technologies: {
            html: 'HTML',
            css: 'CSS',
            javascript: 'Javascript',
          },
        livelink: '',
        sourceLINK: ''
    },
    {
        card: {
            mobile: 'card2',
            desktop: 'card5',
        },
        name:  {
            mobile: 'Multi-Post Stories',
            desktop: 'Multi-Post Stories',
        },
        job: {
            mobile: {
                client: 'Canopy',
                role: 'Back End Dev',
                year: '2015',
            },
            desktop: {
                client: 'FACEBOOK',
                role: 'Full Stack Dev',
                year: '2015',
            }
        },
        summary: {
            mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

            desktop: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',

            modaldesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
          },
        image: {
            mobile: 'src/SnapshootPortfolio1.png',
            desktop: 'desk/SnapshootPortfolio5.png',
          }, 
        technologies: {
            html: 'HTML',
            css: 'CSS',
            ruby: 'Ruby on rails',
            javascript: 'Javascript',
          },
        livelink: '',
        sourceLINK: ''
    },
    {
        card: {
            mobile: 'card3',
            desktop: 'card6',
        },
        name: {
            mobile: 'Tonic',
            desktop: 'FACEBOOK 360',
        },
        job: {
            mobile: {
                client: 'Canopy',
                role: 'Back End Dev',
                year: '2015',
            },
            desktop: {
                client: 'FACEBOOK',
                role: 'Full Stack Dev',
                year: '2015',
            }
        },
        summary: {
            mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

            desktop: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      
            modaldesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
          },
        image: {
            mobile: 'src/SnapshootPortfolio2.png',
            desktop: 'desk/SnapshootPortfolio6.png',
          }, 
        technologies: {
            html: 'HTML',
            css: 'CSS',
            ruby: 'Ruby on rails',
            javascript: 'Javascript',
          },
        livelink: '',
        sourceLINK: ''
    },
    {
        card: {
            mobile: 'card4',
            desktop: 'card7',
        },
        name:  {
            mobile: 'Multi-Post Stories',
            desktop: 'Uber Navigation',
        },
        job: {
            mobile: {
                client: 'Canopy',
                role: 'Back End Dev',
                year: '2015',
            },
            desktop: {
                client: 'UBER',
                role: 'Lead Developer',
                year: '2018',
            }
        },
        summary: {
            mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

            desktop: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      
            modaldesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
          },
        image: {
            mobile: 'src/SnapshootPortfolio3.png',
            desktop: 'desk/SnapshootPortfolio7.png',
          }, 
        technologies: {
            html: 'HTML',
            css: 'CSS',
            ruby: 'Ruby on rails',
            javascript: 'Javascript',
          },
        livelink: '',
        sourceLINK: ''
    },
];

const works = document.querySelector('#works');
const modal = document.querySelector('#myModal');

//Dynamic html
Array.from(works.children).forEach((child, index) => {
    
    child.innerHTML =
    `<section class="${data[index].card.mobile}">
        <ul>
            <li class="project">
                    <img class="mobileimg" src="${data[index].image.mobile}" alt="Snapshot">
                    <div class="description">
                        <h2 class="workstitle">${data[index].name.mobile}</h2>
                        <div class="info">
                            <p class="subTitle">${data[index].job.client.mobile}</p>
                            <ul class="infoContainer">
                                <li class="role">${data[index].job.role.mobile}</li>
                                <li class="year">${data[index].job.year.mobile}</li>
                            </ul>
                        </div>
                        <p class="projectDescription">${data[index].summary.mobile}</p>
                        <div class="tags">
                            <ul class="tagsFlex">
                                <li class="html">${data[index].technologies.html}</li>
                                <li class="css">${data[index].technologies.css}</li>
                                <li class="javascript">${data[index].technologies.javascript}</li>
                            </ul>
                        </div>
                        <button type="button" class="viewProject">
                            See Project
                        </button>
                    </div>
            </li>
        </ul>
    </section>
    <section class="${data[index].card.desktop}">
        <ul>
            <li class="project">
                    <img class="mobileimg" src="${data[index].image.desktop}" alt="Snapshot">
                    <div class="description">
                        <h2 class="workstitle">${data[index].name.desktop}</h2>
                        <div class="info">
                            <p class="subTitle">${data[index].job.client.desktop}</p>
                            <ul class="infoContainer">
                                <li class="role">${data[index].job.role.desktop}</li>
                                <li class="year">${data[index].job.year.desktop}</li>
                            </ul>
                        </div>
                        <p class="projectDescription">${data[index].summary.desktop}</p>
                        <div class="tags">
                            <ul class="tagsFlex">
                                <li class="html">${data[index].technologies.html}</li>
                                <li class="ruby">${data[index].technologies.ruby}</li>
                                <li class="css">${data[index].technologies.css}</li>
                                <li class="javascript">${data[index].technologies.javascript}</li>
                            </ul>
                        </div>
                        <button type="button" class="viewProject">
                            See Project
                        </button>
                    </div>
            </li>
        </ul>
    </section>`;
});

//Popup Modal