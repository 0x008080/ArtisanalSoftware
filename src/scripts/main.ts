
import '../style.css';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.courses-header');
  header?.addEventListener('click', toggleCourses);
});

document.addEventListener('DOMContentLoaded', ()=> {

  setTimeout(()=> rotateBannerText(3500), 5000);
});

let buttonLabel:string = 'Hide';
let currentIndex = 0;
const descriptions:string[] = ['GMO Free', 'Gluten Free', 'MSG Free', 'Vegan Approved', 'Ethically Sourced',
  'Dairy Free', 'Cholesterol Free', 'Antioxidant Packed', 'Preservative Free', 'Nut Free', 'Soy Free', 'Zero Waste',
  'Peanut Free', 'BPA Free', 'Homebrewed', 'Toxin Free', 'Pesticide Free', 'Unleaded'];

function toggleCourses() {
  const content = document.getElementById('courses-content');
  content?.classList.toggle('active');
  const buttn = document.getElementById('btn');
  //buttn!.innerHTML = '<b>New Text</b>';
  let tempstr:string = buttn!.innerHTML;
  buttn!.innerHTML = `${buttonLabel}`
  buttonLabel = tempstr;
}

function rotateBannerText(interval: number = 3500) {
  const banner = document.getElementById('banner-text');
  const len = descriptions.length;
  banner!.textContent = descriptions[currentIndex];

  setInterval(() => {
    currentIndex = Math.floor(Math.random() * len);
    banner!.textContent = descriptions[currentIndex];
    
    // Optional: Add fade animation
    banner?.classList.add('fade');
    setTimeout(() => banner?.classList.remove('fade'), 500);
  }, interval);
}


//const { BASE_URL } = import.meta.env;

/* const app = document.getElementById('app');

 */

 