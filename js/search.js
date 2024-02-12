const inputElement = document.querySelector('input[type="text"]');
    const populerElement = document.getElementById('bantuan-pencarian-populer');
    const pencarianElement = document.getElementById('bantuan-pencarian');
    const bodyElement = document.body;

    function tampilkanPencarian(terms) {
        populerElement.classList.add('hidden');
        populerElement.classList.remove('translate-y-44');
        pencarianElement.classList.remove('hidden');
        pencarianElement.classList.add('translate-y-44');

        const searchLinks = pencarianElement.querySelectorAll('.tujuan-pencarian');

        searchLinks.forEach(link => link.classList.add('hidden'));

        searchLinks.forEach(link => {
            const linkText = link.textContent;
            const termIndex = linkText.toLowerCase().indexOf(terms.toLowerCase());
            if (termIndex !== -1) {
                link.classList.remove('hidden');
                const matchedText = linkText.substring(termIndex, termIndex + terms.length);
                const boldedText = linkText.substring(0, termIndex) +
                    '<strong>' + matchedText + '</strong>' +
                    linkText.substring(termIndex + terms.length);
                link.innerHTML = boldedText;
            }
        });
    }

    function tampilkanPopuler() {
        pencarianElement.classList.add('hidden');
        pencarianElement.classList.remove('translate-y-44');
        populerElement.classList.remove('hidden');
        populerElement.classList.add('translate-y-44');
    }

    function sembunyikanSemua() {
        pencarianElement.classList.add('hidden');
        pencarianElement.classList.remove('translate-y-44');
        populerElement.classList.add('hidden');
        populerElement.classList.remove('translate-y-44');
    }

    // Tambahkan event listener untuk klik pada populerElement
    populerElement.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event menyebar ke elemen lain
        tampilkanPopuler(); // Menampilkan elemen populerElement saat diklik
    });

    // Tambahkan event listener untuk klik pada pencarianElement
    pencarianElement.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event menyebar ke elemen lain
        tampilkanPencarian(inputElement.value.trim()); // Menampilkan elemen pencarianElement saat diklik
    });

    // Tambahkan event listener untuk mengklik di luar elemen input dan id yang ditampilkan
    bodyElement.addEventListener('click', function() {
        sembunyikanSemua(); // Menyembunyikan semua elemen saat mengklik di luar elemen input dan id yang ditampilkan
    });

    inputElement.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event menyebar ke elemen lain
        tampilkanPopuler(); // Menampilkan elemen populerElement saat input diklik
    });

    inputElement.addEventListener('input', function() {
        const searchTerms = inputElement.value.trim();

        if (searchTerms !== '') {
            tampilkanPencarian(searchTerms);
        } else {
            tampilkanPopuler();
        }
    });