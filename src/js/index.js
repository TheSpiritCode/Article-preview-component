(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const card = document.getElementById('card');
        const cardFooter = document.getElementById('card-footer');

        card.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('card__button') || e.target.classList.contains('icon-share')) {
                cardFooter.classList.toggle('sharing');
            }
        })
    })
})();