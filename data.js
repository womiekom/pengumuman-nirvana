const peserta = [
    // Bidang Humas Internal
    { nis: "12867", nama: "Jihran Angelin Putri Aji", bidang: "Humas Internal", status: "Lolos" },
    { nis: "13019", nama: "Khairu Yumna Putri B.", bidang: "Humas Internal", status: "Lolos" },
    { nis: "12991", nama: "Sandi Firmansyah", bidang: "Humas Internal", status: "Lolos" },
    { nis: "12795", nama: "Karina Permata H.", bidang: "Humas Internal", status: "Lolos" },
    { nis: "12999", nama: "Annisa Rizkya Putri R.", bidang: "Humas Internal", status: "Lolos" },
    { nis: "12797", nama: "Maria Jesica", bidang: "Humas Internal", status: "Lolos" },
    { nis: "12970", nama: "Cetta Sadina Shafira", bidang: "Humas Internal", status: "Lolos" },

    // Bidang Humas Eksternal
    { nis: "12865", nama: "Ezekiel Genova", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12854", nama: "Alisha Almahyra", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12804", nama: "Nahiza Luthfiyanisa", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12754", nama: "Chiara Khansa Sakinah", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12961", nama: "Adhellia Pratiwi", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12857", nama: "Aulia Gayatri", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12746", nama: "Aisyah Aqilah", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12787", nama: "Audrinia Adriana", bidang: "Humas Eksternal", status: "Lolos" },
    { nis: "12827", nama: "Hasna Radinka", bidang: "Humas Eksternal", status: "Lolos" },

    // Bidang Humas Media
    { nis: "13017", nama: "Jovan Ezekiel Sihite", bidang: "Humas Media", status: "Lolos" },
    { nis: "12989", nama: "Reva Zahratun Nazwa", bidang: "Humas Media", status: "Lolos" },
    { nis: "12771", nama: "Nicole Ainslee Darmawan", bidang: "Humas Media", status: "Lolos" },
    { nis: "13012", nama: "Friska Fadilah Muhajirin", bidang: "Humas Media", status: "Lolos" },
    { nis: "13022", nama: "Nafla Atalla Zahran", bidang: "Humas Media", status: "Lolos" },
    { nis: "12951", nama: "Nicki Ayu Wulandari", bidang: "Humas Media", status: "Lolos" },
    { nis: "12767", nama: "Lisa Angelina Sitinjak", bidang: "Humas Media", status: "Lolos" },
    { nis: "12584", nama: "Qanita Adara Darmawan", bidang: "Humas Media", status: "Lolos" },

    // Bidang News Cetak
    { nis: "12745", nama: "Aisha Alifa", bidang: "News Cetak", status: "Lolos" },
    { nis: "12992", nama: "Saskia Dwi Ariny", bidang: "News Cetak", status: "Lolos" },
    { nis: "12973", nama: "Elisabeth Honesty", bidang: "News Cetak", status: "Lolos" },
    { nis: "12786", nama: "Asyafa Salsabila", bidang: "News Cetak", status: "Lolos" },
    { nis: "12791", nama: "Farah Hana M.", bidang: "News Cetak", status: "Lolos" },
    { nis: "13029", nama: "Tatyana Afifah N.", bidang: "News Cetak", status: "Lolos" },
    { nis: "12891", nama: "Aira Nabila", bidang: "News Cetak", status: "Lolos" },
    { nis: "12772", nama: "Nikheisya Putri", bidang: "News Cetak", status: "Lolos" },

    // Bidang News Online
    { nis: "12837", nama: "Farrel Saputra", bidang: "News Online", status: "Lolos" },
    { nis: "12861", nama: "Carla Rezkia Prastya", bidang: "News Online", status: "Lolos" },
    { nis: "12775", nama: "Syafina Aulia Putri", bidang: "News Online", status: "Lolos" },
    { nis: "12841", nama: "Naysila Kanaya Rianto", bidang: "News Online", status: "Lolos" },
    { nis: "12302", nama: "Faiza Rismadinah Wahid", bidang: "News Online", status: "Lolos" },
    { nis: "12978", nama: "Mikaila Zara Delisha", bidang: "News Online", status: "Lolos" },
    { nis: "13031", nama: "Zita Zavina Rus", bidang: "News Online", status: "Lolos" },

    // Bidang P-Channel
    { nis: "12924", nama: "Aaqilah Zahwa H", bidang: "P-Channel", status: "Lolos" },
    { nis: "12987", nama: "Rafifah Puti N", bidang: "P-Channel", status: "Lolos" },
    { nis: "12958", nama: "Zahwa Salsabila N", bidang: "P-Channel", status: "Lolos" },
    { nis: "12831", nama: "Kadek Harum P", bidang: "P-Channel", status: "Lolos" },
    { nis: "13001", nama: "Audia Mei Cita S", bidang: "P-Channel", status: "Lolos" },
    { nis: "12898", nama: "Dhea Arindri", bidang: "P-Channel", status: "Lolos" },
    { nis: "13011", nama: "Fildzah Putri F", bidang: "P-Channel", status: "Lolos" },
    { nis: "12860", nama: "Cahaya Kezia E P", bidang: "P-Channel", status: "Lolos" },
    { nis: "12879", nama: "Qeenanthi Dayyana A", bidang: "P-Channel", status: "Lolos" },

    // Bidang P-Voice
    { nis: "13030", nama: "Tifarah Shabina Nayya", bidang: "P-Voice", status: "Lolos" },
    { nis: "12943", nama: "Janvier Azman", bidang: "P-Voice", status: "Lolos" },
    { nis: "12890", nama: "Adlin Najla Nazhifah", bidang: "P-Voice", status: "Lolos" },
    { nis: "13014", nama: "Hayfa Anindya Devanti", bidang: "P-Voice", status: "Lolos" },
    { nis: "12859", nama: "Butsainah Khosyiatur", bidang: "P-Voice", status: "Lolos" },
    { nis: "12799", nama: "M. Altan Fatih", bidang: "P-Voice", status: "Lolos" },
    { nis: "12965", nama: "Aluna Nahla Humaira", bidang: "P-Voice", status: "Lolos" },
    { nis: "12847", nama: "Rasheed Narayamadhan", bidang: "P-Voice", status: "Lolos" },
    { nis: "12851", nama: "Sjachezra Anaqi Imban", bidang: "P-Voice", status: "Lolos" },

    // Bidang CDMS
    { nis: "12919", nama: "Rahadian Syahputra", bidang: "CDMS", status: "Lolos" },
    { nis: "12856", nama: "Aqsha Dzikra", bidang: "CDMS", status: "Lolos" },
    { nis: "12829", nama: "Janeeta Bunga", bidang: "CDMS", status: "Lolos" },
    { nis: "12789", nama: "Dyah Rizkina", bidang: "CDMS", status: "Lolos" },
    { nis: "12429", nama: "Khayru Shaquille", bidang: "CDMS", status: "Lolos" }
];