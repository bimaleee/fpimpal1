function submitForm() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const plat = document.getElementById('plat').value;
    const kategori = document.querySelector('input[name="kategori"]:checked');

    if (!nim || !nama || !plat || !kategori) {
        alert('Mohon isi semua kolom!');
        return;
    }

    alert(`Data Tercatat:\nNIM/NIP: ${nim}\nNama: ${nama}\nPlat: ${plat}\nKategori: ${kategori.value}`);
}
