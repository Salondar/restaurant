import Img from './pizzaria.jpeg';
import './style.css';

function Content() {
    const contentdiv = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = 'Slice of Heaven Pizzeria';
    contentdiv.appendChild(header);

    const img = new Image();
    img.src = Img;
    img.width = 880;
    img.height = 600;
    contentdiv.appendChild(img);

    const para = document.createElement('p');
    para.textContent = 'At The Slice of Heaven Pizzeria, we craft mouthwatering, artfully inspired pizzas with the freshest ingredients, served in a vibrant and welcoming atmosphere. Whether you are craving bold flavors or classic comforts, each bite is a little taste of paradise';
    contentdiv.appendChild(para);

}
Content();