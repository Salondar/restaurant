import Img from './dish.jpg';


function Content() {
    const contentdiv = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = 'Taste the heart of Africa';
    contentdiv.appendChild(header);

    const para = document.createElement('p');
    para.textContent = 'Embark on a culinary journey through the diverse flavors of Africa';
    contentdiv.appendChild(para);

    const img = new Image();
    img.src = Img;
    contentdiv.appendChild(img);
}
Content();