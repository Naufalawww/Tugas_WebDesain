// Fitur Pencarian / Filter Sederhana
function cariAlumni() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.getElementsByClassName("alumni-card");

    for (let i = 0; i < cards.length; i++) {
        let nama = cards[i].getAttribute("data-nama").toLowerCase();
        let jurusan = cards[i].getAttribute("data-jurusan").toLowerCase();

        if (nama.includes(input) || jurusan.includes(input)) {
            cards[i].style.display = ""; // Tampilkan jika cocok
        } else {
            cards[i].style.display = "none"; // Sembunyikan jika tidak cocok
        }
    }
}