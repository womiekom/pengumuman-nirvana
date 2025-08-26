document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-lihat");
    if (btn) {
        btn.addEventListener("click", () => {
            const nis = document.getElementById('nis').value.trim();
            if(nis){
                window.location.href = `pengumuman.html?nis=${nis}`;
            } else {
                alert("NIS harus diisi!");
            }
        });
    }

    const namaEl = document.getElementById("nama");
    const statusEl = document.getElementById("status");
    if (namaEl && statusEl) {
        const urlParams = new URLSearchParams(window.location.search);
        const nis = urlParams.get('nis');
        const pesertaData = peserta.find(p => p.nis === nis);

        if (pesertaData) {
            namaEl.innerText = pesertaData.nama;
            statusEl.innerText = `Selamat! Anda LOLOS di Bidang ${pesertaData.bidang} 🎉`;
        } else {
            namaEl.innerText = "NIS tidak ditemukan";
            statusEl.innerText = "";
        }
    }
});

