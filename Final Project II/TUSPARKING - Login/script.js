function login() {
  const nip = document.getElementById("nip").value;
  const password = document.getElementById("password").value;

  if (nip && password) {
    alert("Login successful");
    // Tambahkan logika login sesuai kebutuhan Anda
  } else {
    alert("Please enter both NIP and Password");
  }
}

function register() {
  alert("Redirecting to registration page");
  // Tambahkan logika untuk redirect ke halaman registrasi
}

function displayDate() {
  const dateBox = document.getElementById("dateBox");
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const year = today.getFullYear().toString().slice(-2); 

  dateBox.innerHTML = `${day}/${month}/${year}`;
}


window.onload = displayDate;
