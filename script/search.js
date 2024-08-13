const input = document.querySelector('#searchInput');
const graficoCards = document.querySelectorAll('#grafico-card');

input.addEventListener('input', function() {
    const filter = input.value.toLowerCase();
    graficoCards.forEach(card => {
        const moeda = card.getAttribute('data-moeda');
        if(moeda.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    })
})