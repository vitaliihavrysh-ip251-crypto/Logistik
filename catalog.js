const modal2 = document.getElementById('modal');
const closeModal2 = document.getElementById('closeModal');
const searchInput = document.getElementById('search');
const serviceName = document.getElementById('serviceName');

// SEARCH
searchInput.addEventListener('keyup', () => {
    let value = searchInput.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(value) ? 'block' : 'none';
    });
});

// CLOSE MODAL
closeModal2.addEventListener('click', () => {
    modal2.classList.add('hidden');
});

// ORDER BUTTONS
const orderButtons = document.querySelectorAll('.orderBtn');

orderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let name = e.target.parentElement.querySelector('h3').innerText;
        serviceName.innerText = name;
        modal2.classList.remove('hidden');

        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push({ service: name, date: new Date().toLocaleString() });
        localStorage.setItem('orders', JSON.stringify(orders));
    });
});