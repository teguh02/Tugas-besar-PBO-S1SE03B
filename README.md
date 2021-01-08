# Tugas Besar Praktikum Pemrograman Berbasis Objek
![Logo-ITTP](https://user-images.githubusercontent.com/43981051/103869569-12f62000-50fd-11eb-86ef-657fdb81da3f.png)
<br>

<div>Demo Projek</div>
https://repl.it/@teguh02/tubesPbo

<div>Dokumentasi PDF</div>
https://github.com/teguh02/Teguh-Rijanandi-19104008-Praktikum-dan-Tugas-PBO/blob/tubesPbo/Tugas%20Besar%20PBO%20Kelompok%202.pdf

<hr>

Implementasi OOP Javascript, selain implementasi OOP, kami juga mengimplementasikan :

<ul>
<li>MVC (Model View Controller) </li>
<li>View template</li>
<li>Inheritance class dalam javascript</li>
<li>Abstrak class dalam javascript</li>
<li>Static method</li>
<li>Constructor dalam class</li>
<li>Node module exports</li>
<li>Database dengan file JSON</li>
<li>Login dengan password yang sudah di enrkipsi sebelumnya. Silahkan buka file controller.js dan kamu akan menemukan username dan password yang sudah di enrkipsi https://github.com/teguh02/Teguh-Rijanandi-19104008-Praktikum-dan-Tugas-PBO/tree/tubesPbo/app </li>
<li>3 kali gagal login, program berhenti berjalan</li>
</ul>

Pada projek ini, kami membuat sebuah program kasir sederhana yang mampu menampilkan, membuat dan menghapus data customer data produk dan data order, ketika kita menambah data
order baru maka stok produk yang ada akan berkurang mengikuti jumlah pemesanan barang yang ada

<hr>

![percobaanlogin](https://user-images.githubusercontent.com/43981051/103970522-0922fa00-519b-11eb-812e-124594800ee8.gif)
![3-kali-gagal-login](https://user-images.githubusercontent.com/43981051/104000879-705ba100-51d1-11eb-9ed6-31d743432320.gif)

# Anggota Kelompok 
S1S303B Software Engineer
<ol>
<li>Teguh Rijanandi          (19104008)</li>
<li>Muhammad Arif Saputra    (19104012)</li>
<li>Irsyad Dzulfikar         (19104040)</li>
</ol>

# Class Diagram
![Tubes PBO](https://user-images.githubusercontent.com/43981051/103871799-18a13500-5100-11eb-97ff-57ee081db70f.jpg)

Kode javascript pada class diagram diatas dapat ditemukan didalam file model dari tiap tiap bagian database.
Silahkan lihat semua model databasenya disini
https://github.com/teguh02/Teguh-Rijanandi-19104008-Praktikum-dan-Tugas-PBO/tree/tubesPbo/app/models

# Struktur Folder
<ul>
<li>app : untuk menyimpan semua file file controller dan model database</li> 
<li>database : untuk menyimpan file file database berupa json, file database ini akan di kelola oleh model tadi</li>
<li>node_modules : untuk menyimpan semua file file module yang diperlukan milik node js</li>
<li>views : untuk menyimpan semua file view yang akan tampil ketika file tersebut dipanggil oleh method <code>super.view()</code> </li> 
 
Struktur folder akan dijelaskan lebih lengkap pada bagian penjelasan
</ul>

# Package Yang Digunakan
Dibawah ini adalah daftar package module milik node js yang digunakan dalam projek ini  
<ul>
<li>https://www.npmjs.com/package/prompt-sync</li>
<li>https://www.npmjs.com/package/password-hash</li>
</ul>
