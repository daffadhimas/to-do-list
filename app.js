// Mengambil semua elemen yang dibutuhkan
const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');

inputBox.onkeyup = () => {
    let userData = inputBox.value; // Mengambil data user
    if (userData.trim() != 0) { 
        addBtn.classList.add('active'); //Input akan aktif jika input tidak kosong
    } else {
        addBtn.classList.remove('active'); // Input akan tidak aktif jika input kosong
    }
}