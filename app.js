// Mengambil semua elemen yang dibutuhkan
const todoInput = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todo = document.getElementById('todoList')


// Membuat hover to do list
todoInput.onkeyup = () => {
    let userData = todoInput.value; // Mengambil data user
    if (userData.trim() != 0) {
        addBtn.classList.add('active'); //Input akan aktif jika input tidak kosong
    } else {
        addBtn.classList.remove('active'); // Input akan tidak aktif jika input kosong
    }
}

// Function add
function add() {

    // Tambah list ke dalam ul
    let newTask = "<li onclick='toggle(this)'> <span class='taskList'>" + todoInput.value + "</span>" + "<span onclick='removeItem(this)'> <i class='bi bi-trash-fill btn-hapus'></i> </span>" + "</li>"

    todo.insertAdjacentHTML('afterbegin', newTask)

    // Mengosongkan field
    todoInput.value = ""

}
// Function hapus satu item
function removeItem(el) {
    el.parentElement.remove()
}

// Function coret
function toggle(el) {
    el.classList.toggle('done')
}

