import '../style.css'

const { BASE_URL } = import.meta.env;

const app = document.getElementById('app');

app!.innerHTML = '';

const homeSection = document.createElement('section');
homeSection.className = 'home'

const navBar = document.createElement('navbar');
navBar.className = 'nav';

const navlist = `
    <nav id="nav">
		<ul>
			<li><a href="#about" class="active">About</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#education">Education</a></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#footer">Contact</a></li>
		</ul>
	</nav>
`;


// about
const about = `
    <div class="about">
        <h1>Artisanal Software</h1>
        <div class="about-content">
            <p class="tagline">I do web, game development, and sometimes a combination of those two.</p>
            <button class="cta" id="view-work">View My Work</button>
        </div>
    </div>
  `;

  // skills
  const skills = `
    <div class="skills">
      <h2>Skills</h2>
      <div class="skills-grid">
        ${['TypeScript', 'React', 'Node.js', 'AWS'].map(skill => `
          <div class="skill-item">
            <img src="/assets/${skill.toLowerCase()}-icon.svg" alt="${skill}">
            <span>${skill}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  homeSection.innerHTML = about;
  navBar.innerHTML = navlist;
  app!.appendChild(homeSection);
  app!.appendChild(navBar);
 