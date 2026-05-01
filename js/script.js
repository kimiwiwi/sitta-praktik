// ======================
// DATA PENGGUNA
// ======================
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];
var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "assets/img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "assets/img/manajemen_keuangan.jpg"
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "assets/img/kepemimpinan.jpg"
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "assets/img/mikrobiologi.jpg"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "assets/img/paud_perkembangan.jpeg"
  }
];

var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan"
      },
    ]
  },
  "2023005678": {
    nomorDO: "2023001234",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung"
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG"
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi"
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto"
      }
    ]
  }
};




// ======================
// LOGIN
// ======================
let loginBtn = document.getElementById("loginBtn");

if(loginBtn){
  loginBtn.addEventListener("click", function () {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = dataPengguna.find(u => u.email === email && u.password === password);

    if (user) {
      window.location.href = "dashboard.html";
    } else {
      alert("email/password yang anda masukkan salah");
    }

  });
}


// ======================
// GREETING (DASHBOARD)
// ======================
window.onload = function () {

  let greeting = document.getElementById("greeting");

  if (greeting) {
    let jam = new Date().getHours();

    if (jam < 12) {
      greeting.innerHTML = "Selamat Pagi";
    } else if (jam < 17) {
      greeting.innerHTML = "Selamat Siang";
    } else {
      greeting.innerHTML = "Selamat Sore";
    }
  }

};


// ======================
// MODAL
// ======================
let modalDaftar = document.getElementById("modalDaftar");
let modalLupa = document.getElementById("modalLupa");

let daftarBtn = document.getElementById("daftarBtn");
let lupaBtn = document.getElementById("lupaBtn");

let closeDaftar = document.getElementById("closeDaftar");
let closeLupa = document.getElementById("closeLupa");

if(daftarBtn){
  daftarBtn.onclick = function () {
    modalDaftar.style.display = "block";
  };
}

if(lupaBtn){
  lupaBtn.onclick = function () {
    modalLupa.style.display = "block";
  };
}

if(closeDaftar){
  closeDaftar.onclick = function () {
    modalDaftar.style.display = "none";
  };
}

if(closeLupa){
  closeLupa.onclick = function () {
    modalLupa.style.display = "none";
  };
}

// 1. Fungsi untuk Membuka Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// 2. Fungsi untuk Menutup Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// 3. Logika Form Login
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah halaman reload

        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;

        // Mencari pengguna di dataPengguna (dari data.js)
        const user = dataPengguna.find(u => u.email === emailInput && u.password === passwordInput);

        if (user) {
            // Jika login berhasil
            alert("Selamat datang, " + user.nama + "!");
            // Simpan data user yang login ke localStorage agar bisa dibaca di dashboard
            localStorage.setItem('userLoggedIn', JSON.stringify(user));
            // Pindah ke halaman dashboard
            window.location.href = "dashboard.html";
        } else {
            // Jika login gagal
            alert("email/password yang anda masukkan salah");
        }
    });
}

// Menutup modal jika user klik di luar kotak modal
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

// Fungsi untuk menampilkan data stok awal dari data.js
function renderStok() {
    const tableBody = document.getElementById('bodyTabelStok');
    if (!tableBody) return;

    // Bersihkan isi tabel dulu
    tableBody.innerHTML = "";

    // Loop dataBahanAjar dari data.js
    dataBahanAjar.forEach((item, index) => {
        let row = `<tr>
            <td><img src="${item.cover}" width="50" alt="cover"></td>
            <td>${item.kodeLokasi}</td>
            <td>${item.kodeBarang}</td>
            <td>${item.namaBarang}</td>
            <td>${item.stok}</td>
            <td><button onclick="hapusBaris(${index})" class="btn-hapus">🗑️</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Jalankan fungsi render saat halaman stok.html dibuka
if (document.getElementById('bodyTabelStok')) {
    renderStok();
}

function toggleSubmenu() {
    const submenu = document.getElementById('submenuLaporan');
    
    // Cek apakah sedang sembunyi atau tampil
    if (submenu.style.display === 'none') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

// Contoh fungsi untuk menambah data dari Form ke Tabel
// 1. Fungsi untuk merender tabel
function tampilkanDataStok() {
    const tableBody = document.getElementById('bodyTabelStok');
    if (!tableBody) return;

    tableBody.innerHTML = ""; // Bersihkan tabel agar tidak duplikat

    dataBahanAjar.forEach((item) => {
        const row = `
            <tr>
                <td><img src="${item.cover}" class="img-cover" style="width:50px"></td>
                <td>${item.kodeLokasi}</td>
                <td>${item.kodeBarang}</td>
                <td>${item.namaBarang}</td>
                <td>${item.stok}</td>
                <td>
                    <button class="btn-delete" onclick="hapusData('${item.kodeBarang}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// 2. Fungsi Tambah Buku
function tambahBuku() {
    // 1. Ambil elemen input
    const elLokasi = document.getElementById('inLokasi');
    const elKode = document.getElementById('inKode');
    const elNama = document.getElementById('inNama');
    const elStok = document.getElementById('inStok');

    // 2. Ambil nilai dan bersihkan spasi (trim)
    const lokasi = elLokasi.value.trim();
    const kode = elKode.value.trim();
    const nama = elNama.value.trim();
    const stok = elStok.value.trim();

    // Daftar ini mencocokkan Kode Barang dengan file gambarnya
    const daftarCover = {
        "ASIP4301": "assets/img/pengantar_komunikasi.jpg",
        "EKMA4216": "assets/img/manajemen_keuangan.jpg",
        "EKMA4310": "assets/img/kepemimpinan.jpg",
        "BIOL4211": "assets/img/mikrobiologi.jpg",
        "PAUD4401": "assets/img/paud_perkembangan.jpeg"
    };
    
    // Ambil gambar berdasarkan kode, jika kodenya baru/tidak ada di daftar, pakai default
    const pathCover = daftarCover[kode] || "assets/img/default-cover.jpg";

    // 3. Validasi: Jika ada yang kosong, tampilkan peringatan
    if (!lokasi || !kode || !nama || !stok) {
        alert("Mohon isi semua data (Lokasi, Kode, Nama, dan Stok)!");
        return;
    }
    
    // 4. Buat objek buku baru
    const bukuBaru = {
        cover: pathCover,
        kodeLokasi: lokasi, 
        kodeBarang: kode,
        namaBarang: nama,
        stok: parseInt(stok)
    };

    // 5. Masukkan ke array utama (Pastikan di data.js pakai 'let dataBahanAjar')
    dataBahanAjar.push(bukuBaru);
    
    // 6. Update tampilan tabel
    tampilkanDataStok();
    
    // 7. Kosongkan kembali input setelah berhasil
    elLokasi.value = "";
    elKode.value = "";
    elNama.value = "";
    elStok.value = "";

    alert("Buku berhasil ditambahkan!");
}

// 3. Fungsi Hapus Data
function hapusData(kodeBarang) {
    const item = dataBahanAjar.find(b => b.kodeBarang === kodeBarang);
    
    if (item && confirm(`Apakah Anda yakin ingin menghapus "${item.namaBarang}"?`)) {
        // PERBAIKAN: Pastikan variabel dataBahanAjar di data.js menggunakan 'let'
        dataBahanAjar = dataBahanAjar.filter(b => b.kodeBarang !== kodeBarang);
        
        tampilkanDataStok(); 
        alert("Data berhasil dihapus!");
    }
}

// 4. Logika Logout dan Inisialisasi
window.onload = function() {
    tampilkanDataStok();
};

const btnLogout = document.querySelector('.btn-logout');
if (btnLogout) {
    btnLogout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('userLoggedIn');
        window.location.href = 'index.html';
    });
}
dataBahanAjar.forEach((item, index) => {
    const row = `
        <tr>
            <td><img src="${item.cover}" class="img-cover"></td>
            <td>${item.kodeLokasi}</td>
            <td>${item.kodeBarang}</td>
            <td>${item.namaBarang}</td>
            <td>${item.stok}</td>
            <td>
                <!-- Tambahkan onclick di sini -->
                <button class="btn-delete" onclick="hapusData('${item.kodeBarang}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    `;
    tableBody.innerHTML += row;
});

function hapusData(kodeBarang) {
    // Cari nama barang untuk pesan konfirmasi
    const item = dataBahanAjar.find(b => b.kodeBarang === kodeBarang);
    
    if (confirm(`Apakah Anda yakin ingin menghapus "${item.namaBarang}"?`)) {
        // Filter array untuk membuang barang dengan kode tersebut
        dataBahanAjar = dataBahanAjar.filter(b => b.kodeBarang !== kodeBarang);
        
        // Panggil kembali fungsi render tabel kamu
        tampilkanDataStok(); 
        alert("Data berhasil dihapus!");
        }
    }
    // Jalankan fungsi tampilkan data saat halaman pertama kali dibuka
    window.onload = function() {
    tampilkanDataStok();
    };


function lacakPengiriman() {
    // 1. Ambil input
    const inputDO = document.getElementById('inputDO');
    const nomor = inputDO.value.trim();
    
    // 2. Ambil elemen penampung hasil
    const hasilArea = document.getElementById('hasilTracking');
    const displayPerjalanan = document.getElementById('displayPerjalanan');

    // 3. Cari data di objek dataTracking
    const data = dataTracking[nomor];

    if (data) {
        // Tampilkan area hasil
        hasilArea.style.display = "block";

        // Isi Header & Tabel Detail (sesuai ID di HTML kamu)
        document.getElementById('displayNama').innerText = data.nama;
        document.getElementById('displayStatus').innerText = data.status;
        document.getElementById('displayEkspedisi').innerText = data.ekspedisi;
        
        // Isi data ke tabel detail
        document.getElementById('detEkspedisi').innerText = data.ekspedisi;
        document.getElementById('detTanggal').innerText = data.tanggalKirim;
        document.getElementById('detPaket').innerText = data.paket;
        document.getElementById('detTotal').innerText = data.total;

        // Update Progress Bar
        const pb = document.getElementById('progressBar');
        if (data.status === "Dikirim") {
            pb.style.width = "100%";
            pb.style.backgroundColor = "#28a745";
        } else {
            pb.style.width = "50%";
            pb.style.backgroundColor = "#ffc107";
        }

        // Render Timeline Perjalanan
        displayPerjalanan.innerHTML = "";
        data.perjalanan.forEach(step => {
            displayPerjalanan.innerHTML += `
                <div class="timeline-item" style="border-left: 2px solid #1a4da1; padding-left: 15px; margin-bottom: 15px; position: relative;">
                    <div style="font-size: 11px; color: #777;">${step.waktu}</div>
                    <div style="font-size: 14px;">${step.keterangan}</div>
                </div>
            `;
        });
    } else {
        alert("Nomor Delivery Order tidak ditemukan! (Coba: 2023001234)");
        hasilArea.style.display = "none";
    }
}