document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Akun berhasil dibuat! Silakan login.");
  window.location.href = "index.html"; // kembali ke halaman login
});
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const form = document.getElementById("registerForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelectorAll('input[type="password"]')[0].value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Akun berhasil dibuat!");
    window.location.href = "index.html";
  } catch (err) {
    alert("Error: " + err.message);
  }
});
