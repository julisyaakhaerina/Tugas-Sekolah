// import express
import express from "express";

// init express router
const router = express.Router();

router.get('/biodata/:nama/:Tempat/:Tanggal/:Jenis/:Agama/:Telepon/:Email/:Hobi/:Cita', (req, res) => {  
    var nama = req.params.nama;
    var Tempat = req.params.Tempat;
    var Tanggal = req.params.Tanggal;
    var Jenis = req.params.Jenis;
    var Agama = req.params.Agama;
    var Telepon = req.params.Telepon;
    var Email = req.params.Email;
    var Hobi = req.params.Hobi;
    var Cita_Cita = req.params.Cita;

    res.send(
        'Nama :' + nama + '<br>' +
        'Tempat Lahir :' + Tempat + '<br>' +
        'Tanggal Lahir :' + Tanggal + '<br>' +
        'Jenis Kelamin :' + Jenis + '<br>' +
        'Agama :' + Agama + '<br>' +
        'Telepon :' + Telepon + '<br>' +
        'Email :' + Email + '<br>' +
        'Hobi :' + Hobi + '<br>' +
        'Cita-Cita :' + Cita_Cita + '<br>');
});

router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas) / 2;

    if (rapot >= 90 && rapot <= 100) {
        var grade = "Grade A"
    } else if (rapot >= 80) {
        var grade = "Grade B"
    } else if (rapot >= 70) {
        var grade = "Grade C"
    }  else if (rapot >= 60) {
        var grade = "Grade D"
    }  else if (rapot >= 50) {
        var grade = "Grade E"
    }  else if (rapot >= 0) {
        var grade = "Sing Getol Diajar !!!";
    } else {
        var grade = "Nilai Tidak valid";
    }

    res.send(
        'Nama :' + nama + '<br>' +
        'Kelas :' + kelas + '<br>' +
        'Nilai PTS :' + pts + '<br>' +
        'Nilai PAS :' + pas + '<br>' +
        'Nilai Rapot:' + rapot + '<br>' +
        'Keterangan : ' + grade
    );
});

router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;
    var bilangan3 = 15;
    var bilangan4 = 8;
    var kurang = bilangan3 - bilangan4;
    var bilangan5 = 10;
    var bilangan6 = 2;
    var bagi = bilangan5 / bilangan6;
    var bilangan7 = 2;
    var bilangan8 = 2;
    var kali = bilangan7 * bilangan8;
    res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah + '<hr>' +

        '<h3>Pengurangan</h3>' +
        'Bilangan ke 3 : ' + bilangan3 + '<br>' +
        'Bilangan ke 4 : ' + bilangan4 + '<br>' +
        'Hasil : ' + kurang + '<hr>' +

        '<h3>Pembagian</h3>' +
        'Bilangan ke 5 : ' + bilangan5 + '<br>' +
        'Bilangan ke 6 : ' + bilangan6 + '<br>' +
        'Hasil : ' + bagi + '<hr>' +

        '<h3>Perkalian</h3>' +
        'Bilangan ke 7 : ' + bilangan7 + '<br>' +
        'Bilangan ke 8 : ' + bilangan8 + '<br>' +
        'Hasil : ' + kali + '<hr>' 

    );
});

router.get('/bangun_datar', (req, res) => {
    var sisi1= 5;
    var sisi2 = 5;
    var persegi = sisi1 * sisi2;
    var panjang1 = 6;
    var lebar1= 4;
    var persegipanjang = panjang1 * lebar1;
    var alas1= 5;
    var tinggi1= 6;
    var segitiga = alas1 * tinggi1 /2;
    var v= 3;
    var jari= 3.14;
    var lingkaran = v * jari * jari;
    res.send(
        '<h3>Persegi</h3>' +
        'sisi ke 1 : ' + sisi1 + '<br>' +
        'sisi ke 2 : ' + sisi2 + '<br>' +
        'Hasil : ' + persegi + '<hr>' +

        '<h3>Persegi_panjang</h3>' +
        'panjang  : ' + panjang1 + '<br>' +
        'lebar : ' + lebar1 + '<br>' +
        'Hasil : ' + persegipanjang + '<hr>' +

        '<h3>Segitiga</h3>' +
        'alas  : ' + alas1 + '<br>' +
        'tinggi : ' + tinggi1 + '<br>' +
        'Hasil : ' + segitiga + '<hr>' +

        '<h3>Lingkaran</h3>' +
        'v  : ' + v + '<br>' +
        'Jari: ' + jari + '<br>' +
        'Hasil : ' + lingkaran + '<hr>'

    );
});

router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {

    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

    if (jurusan == 'RPL') {
       if (kelas == '10 RPL') {
        var ket = "Anda Kelas 10 RPL";
       } else if (kelas == '11 RPL') {
        var ket = "Anda Kelas 11 RPL";
       } else if (kelas == '12 RPL') {
        var ket = "Anda Kelas 12 RPL";
       } else {
        var ket = "Anda Alumni cuyyy !"
       }
    } else if  (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = "Anda Kelas 10 TKRO";
           } else if (kelas == '11 TKRO') {
            var ket = "Anda Kelas 11 TKRO";
           } else if (kelas == '12 TKRO') {
            var ket = "Anda Kelas 12 TKRO";
           } else {
            var ket = "Anda Alumni cuyyy !"
           }
    } else if  (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = "Anda Kelas 10 TBSM";
           } else if (kelas == '11 TBSM') {
            var ket = "Anda Kelas 11 TBSM";
           } else if (kelas == '12 TBSM') {
            var ket = "Anda Kelas 12 TBSM";
           } else {
            var ket = "Anda Alumni cuyyy !"
           }
    } else {
        var ket = "Jurusan Tidak Tersedia";
    }
    res.send(
        'Nama : ' + nama + '<br>' +
        'Kelas : ' + ket
    );
});

router.get('/latihan/:Nama_Pembeli/:Tanggal/:Jenis/:Pesanan/:Jumlah', (req, res) => {

    var Nama_Pembeli = req.params.Nama_Pembeli;
    var Tanggal = req.params.Tanggal;
    var Jenis = req.params.Jenis;
    var Pesanan = req.params.Pesanan;
    var Jumlah = req.params.Jumlah

        if (Jenis == 'makanan') {
            if (Pesanan == 'Nasi Goreng') {
                var harga = "20000";
            } else if (Pesanan == 'Mie Goreng') {
                var harga = "30000";
            } else if (Pesanan == 'Ayam Goreng') {
                var harga = "40000";
            }
        } else if (Jenis == 'minuman') {
            if (Pesanan == 'Air Mineral') {
                var harga = "10000";
            }  if (Pesanan == 'Jus') {
                var harga = "20000";
            }  if (Pesanan == 'Coffe') {
                var harga = "30000";
            }
        } else {
            var Pesanan = "Pesanan Tidak Tersedia" ;
        }

        var Total = Jumlah * harga ;
        if (Total >= 100000) {
            var Diskon = Total * 0.5;
        } else {
            var Diskon = 0
        }
        var Total_Pembayaran = Total - Diskon ;

     res.send(
         '<h3> Starbuck Local</h3>' +
         'Nama Pembeli : ' + Nama_Pembeli + '<br>' +
         'Tanggal : ' + Tanggal + '<br>' +
         'Jenis : ' + Jenis + '<br>' +
         'Pesanan: ' + Pesanan + '<br>' +
         'Harga : ' + harga + '<br>' +
         '---------------------------------' + '<br>' +
         'Jumlah : ' + Jumlah + '<br>' +
         'Total : ' + Total + '<br>' +
         'Diskon : ' + Diskon + '<br>' +
         'Total_Pembayaran : ' + Total_Pembayaran 
  );
});

router.get('/sample', (req, res) => {

    res.send(
        '<h3>Selamat Datang</h3>'
    );
});

// export default router
export default router;