// Mengambil semua elemen yang dibutuhkan
const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');

// Membuat hover to do list
inputBox.onkeyup = () => {
    let userData = inputBox.value; // Mengambil data user
    if (userData.trim() != 0) {
        addBtn.classList.add('active'); //Input akan aktif jika input tidak kosong
    } else {
        addBtn.classList.remove('active'); // Input akan tidak aktif jika input kosong
    }
}

const todo = document.getElementById('todoList')
// Function add
function add() {
    // Ambil nilai dari input
    let todoInput = document.getElementById('todoInput')

    // Tambah list ke dalam ul
    let newTask = "<li> <span onclick='toggle(this)'>" + todoInput.value + "</span>" + "<span onclick='removeItem(this)'> <i class='bi bi-trash-fill btn-hapus'></i> </span>" + "<span> <i class='bi bi-pencil-fill btn-edit'></i> </span>" + "</li>"

    todo.insertAdjacentHTML('afterbegin', newTask)

    // Mengosongkan field
    todoInput.value = ""

    function toggle(el) {
        el.classList.toggle('done')
    }

    function removeItem(el) {
        el.parentElement.remove()
    }
}
// Function edit



// Function hapus