document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Fitur login belum diaktifkan. Silakan buat akun terlebih dahulu.");
});
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const form = document.getElementById("loginForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="text"]').value;
  const password = form.querySelector('input[type="password"]').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert("Login gagal: " + err.message);
  }
});
