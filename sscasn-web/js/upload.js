document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Dokumen berhasil diunggah (simulasi).");
});
import { storage, auth } from "./firebase.js";
import { ref, uploadBytes } from "firebase/storage";

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const files = e.target.querySelectorAll('input[type="file"]');

  const uid = auth.currentUser?.uid;
  if (!uid) return alert("Anda belum login.");

  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i].files[0];
      const path = `dokumen/${uid}/${file.name}`;
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
    }
    alert("Upload berhasil!");
  } catch (err) {
    alert("Gagal upload: " + err.message);
  }
});
