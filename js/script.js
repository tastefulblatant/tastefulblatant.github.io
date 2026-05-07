const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".headers h1, .headers h2, .recept, .omne-karta h1, .text p").forEach(el => observer.observe(el));

//https://www.youtube.com/watch?v=19jD-DcOBtQ
document.querySelectorAll('.kat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.kat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const kategorie = btn.dataset.kategorie;
        document.querySelectorAll('.recept-link').forEach(link => {
            if (kategorie === 'vse' || link.dataset.kategorie === kategorie) {
                link.classList.remove('hidden');
            } else {
                link.classList.add('hidden');
            }
        });
    });
});