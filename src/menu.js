
function Menu() {
    const Content = document.querySelector('#content');

    const divItem1 = document.createElement('div');
    const headerItem1 = document.createElement('h1');
    headerItem1.textContent = 'The Cosmic Crunch | 18';
    const paraItem1 = document.createElement('p');
    paraItem1.textContent = 'A pizza topped with a blend of 5 cheeses, caramelized onions, and a drizzle of truffle oil.'
    divItem1.appendChild(headerItem1);
    divItem1.appendChild(paraItem1);

    const divItem2 = document.createElement('div');
    const headerItem2 = document.createElement('h1');
    headerItem2.textContent = 'The Dragon\'s Fire | 16';
    const paraItem2 = document.createElement('p');
    paraItem2.textContent = 'A spicy pizza with fiery jalapeños, pepperoni, and a fiery tomato sauce';
    divItem2.appendChild(headerItem2);
    divItem2.appendChild(paraItem2);

    const divItem3 = document.createElement('div');
    const headerItem3 = document.createElement('h1');
    headerItem3.textContent = 'Tropical Volcano | 16';
    const paraItem3 = document.createElement('p');
    paraItem3.textContent = 'Sweet and savory collide with grilled pineapple, smoked ham, red onion, and a hint of BBQ sauce on a fluffy crust';
    divItem3.appendChild(headerItem3);
    divItem3.appendChild(paraItem3);

    const divItem4 = document.createElement('div');
    const headerItem4 = document.createElement('h1');
    headerItem4.textContent = 'The Midnight Moon | 17';
    const paraItem4 = document.createElement('p');
    paraItem4.textContent = 'A unique pizza with a black crust, gorgonzola cheese, and fig jam';
    divItem4.appendChild(headerItem4);
    divItem4.appendChild(paraItem4);

    const divItem5 = document.createElement('div');
    const headerItem5 = document.createElement('h1');
    headerItem5.textContent = 'The Pirate\'s Booty | 19';
    const paraItem5 = document.createElement('p');
    paraItem5.textContent = 'A hearty pizza with pepperoni, sausage, bacon, and extra cheese';
    divItem5.appendChild(headerItem5);
    divItem5.appendChild(paraItem5);

    const divItem6 = document.createElement('div');
    const headerItem6 = document.createElement('h1');
    headerItem6.textContent = 'The Unicorn\'s Dream | 12';
    const paraItem6 = document.createElement('p');
    paraItem6.textContent = 'A sweet pizza with a marshmallow fluff base, rainbow sprinkles, and fruit toppings';
    divItem6.appendChild(headerItem6);
    divItem6.appendChild(paraItem6);

    const divItem7 = document.createElement('div');
    const headerItem7 = document.createElement('h1');
    headerItem7.textContent = 'Carnivore’s Kingdom | 20';
    const paraItem7 = document.createElement('p');
    paraItem7.textContent = 'A meat lover’s paradise with Italian sausage, bacon, pepperoni, ground beef, and smoked chicken, topped with melted mozzarella';
    divItem7.appendChild(headerItem7);
    divItem7.appendChild(paraItem7);

    const divItem8 = document.createElement('div');
    const headerItem8 = document.createElement('h1');
    headerItem8.textContent = 'Oceanic Delight | 21';
    const paraItem8 = document.createElement('p');
    paraItem8.textContent = 'A seafood lover’s dream with shrimp, calamari, capers, and a garlic-lemon drizzle over a thin crispy crust';
    divItem8.appendChild(headerItem8);
    divItem8.appendChild(paraItem8);

    Content.appendChild(divItem1);
    Content.appendChild(divItem2);
    Content.appendChild(divItem3);
    Content.appendChild(divItem4);
    Content.appendChild(divItem5);
    Content.appendChild(divItem6);
    Content.appendChild(divItem7);
    Content.appendChild(divItem8);
}

export {Menu}