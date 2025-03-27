
import '../style.css';

const descriptions:string[] = ['GMO Free', 'Gluten Free', 'MSG Free', 'Vegan Approved', 'Ethically Sourced',
  'Dairy Free', 'Cholesterol Free', 'Antioxidant Packed', 'Preservative Free', 'Nut Free', 'Soy Free', 'Zero Waste', 'Nitrate Free',
  'Peanut Free', 'BPA Free', 'Homebrewed', 'Toxin Free', 'Pesticide Free', 'Unleaded', 'Sulfite Free', 'Water Resistant',
  'Vitamin Infused', 'Omega-3 Loaded', 'Bee Friendly,', 'Allergen Free', 'Carcinogen Free', 'Boldly Spiced', 'Glyphosate Free', 
  'Fire-Roasted', 'Hand Carved', 'Cold Brewed', 'Forged In Fire', 'Fully Distilled', 'Oven-Baked', 'Sun Dried'];

let buttonLabel:string = 'Hide';
const len:number = descriptions.length;
let currentIndex:number = Math.floor(Math.random() * len);

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.courses-header');
  header?.addEventListener('click', toggleCourses);
});

document.addEventListener('DOMContentLoaded', ()=> {

  setTimeout(()=> rotateBannerText(2250), 5000);
});


function toggleCourses() {
  const content:HTMLElement | null = document.getElementById('courses-content');
  content?.classList.toggle('active');

  const button:HTMLElement | null = document.getElementById('btn');
  let tempstr:string = button!.innerHTML;
  button!.innerHTML = `${buttonLabel}`
  buttonLabel = tempstr;
}

function rotateBannerText(interval: number = 2250) {
  const banner = document.getElementById('banner-text');
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

 