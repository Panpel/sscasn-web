document.getElementById("drhForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Data DRH berhasil disimpan!");
});
import { db, auth } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

const form = document.getElementById("drhForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nik: form[0].value,
    nama: form[1].value,
    tempat_lahir: form[2].value,
    tanggal_lahir: form[3].value,
    jenis_kelamin: form[4].value,
    alamat: form[5].value,
    no_hp: form[6].value,
    email: form[7].value,
    user: auth.currentUser?.uid || null
  };

  try {
    await addDoc(collection(db, "drh"), data);
    alert("Data DRH berhasil disimpan!");
  } catch (err) {
    alert("Gagal menyimpan DRH: " + err.message);
  }
});
