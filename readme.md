# Javascript 6

## Membuat Program antrian dengan menggunakan Asyncronous

Memanfaatkan Promise dan setTimeout dan menggunakan sintaks chaining then-catch dan async-await

## Cara berjalan Program dengan Chaining Then-Catch

### 1. Inisialisasi Fungsi Queue dengan `queue(time, name)`

### 2. Validasi Input (Penanganan Error)

    Dengan melakukan pengecekan tipe data terlebih dahulu pada parameter `time` didalam fungsi `prog`.
    - Jika tidak diisi "Undefined", maka Promise akan rejected dengan pesan "Waktu harus diisi",
    - Jika berupa teks (string), maka Promise akan rejected dengan pesan "Waktu harus diisi dengan Angka",
    - Jika tipe data lainnya, Promise mengembalikan pesan "Parameter invalid atau error"

### 3. Proses Asyncronous

- Jika validasi berhasil (input `time` berupa angka), program menggunakan fungsi bawaan `setTimeout` dengan waktu hitung `time * 500`.
- Setelah waktu tunggu selesai, Promise akan selesai (resolved) dan mengirim data parameter `name` ke tahap berikutnya.

### 4. Eksekusi Chaining Then()

Proses berjalan secara berurutan dari atas ke bawah:

1. Antrian ke 1 (`John`) dipanggil dengan waktu 1,5 detik(1500ms). Setelah selesai, nama `John` dicetak, lalu program memanggil antrian berikutnya (`Ed`).
2. Antrian ke 2 (`Ed`) dipanggil dengan waktu 2 detik(2000ms). Setelah selesai, nama `Ed` dicetak,lalu program memanggil antrian berikutnya (`Jane`).
3. Antrian ke 2 (`Jane`) dipanggil dengan waktu 0,5 detik(500ms). Setelah selesai, nama `Jane` dicetak.

Setiap blok `.then` harus mengembalikan/ return fungsi `queue()` yang baru agar antrian berikutnya menunggu hingga antrian sebelumnya benar-benar selesai.

### 5. Penanganan Batal Antrian (`Catch`)

Jika salah satu fungsi `queue` di dalam rantai mengalami eror (misalnya, parameter `time` diisi dengan huruf), eksekusi `.then()` di bawahnya akan langsung dihentikan. Program akan langsung melompat ke blok `.catch()` di paling bawah untuk
menampilkan pesan kesalahan ke konsol dengan format: `Error : [Pesan Eror]`.


## Cara berjalan Program dengan Async - Await
