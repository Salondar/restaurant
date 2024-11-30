
function Contact () {
    const Content = document.querySelector('#contenty');

    const text = document.createElement('p');
    text.textContent = 'Savor a slice of paradise.';
    Content.appendChild(text);

    const location = document.createElement('p');
    location.textContent = '123 Main Street, Anytown, USA';
    Content.appendChild(location);

    const phone = document.querySelector('p');
    phone.textContent = '(555) 555-5555';
    Content.appendChild(phone);

    const openTime = document.createElement('p');
    openTime.textContent = 'Open 7 days a week';
    Content.appendChild(openTime);
}

export {Contact};