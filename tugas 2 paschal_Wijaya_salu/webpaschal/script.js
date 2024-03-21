document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  const notification = document.getElementById('notification');

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    // Mengambil nilai dari input nama, email, dan pesan
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Kirim data form menggunakan AJAX atau metode lainnya di sini

    // Menampilkan pesan yang dimasukkan pengguna dalam modal notifikasi
    const messageToShow = `Pesan dari ${name} (${email}): ${message}`;
    notification.innerText = messageToShow;
    document.getElementById("messageText").innerText = messageToShow; // update messageText
    successModal.show();

    // Atur form kembali ke keadaan awal
    form.reset();
  });
});
