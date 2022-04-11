const todoTxt = document.getElementById("todoTxt");
const form = document.getElementById("form");
const ul = document.getElementById("ul");
const save = document.getElementById("save");
const todos = JSON.parse(localStorage.getItem("todos"));



//ローカルに保存
const saveDate = () => {
    const Lists = document.querySelectorAll("li");
    let todos = [];
    Lists.forEach(list => {
        todos.push(list.innerText.replace("\n削除", ""));
    });
    localStorage.setItem("todos", JSON.stringify(todos));

}

const addTodo = (todo) => {

    if (todo) {
        todoTxt.value = todo;

    }

    //リストに
    const li = document.createElement("li");
    li.innerText = todoTxt.value;
    li.classList.add("list-group-item");
    ul.appendChild(li);

    //削除ボタン右寄せ
    const right = document.createElement("div");
    right.classList.add("float-end");
    li.appendChild(right);

    //リストの削除ボタン
    const delBtn = document.createElement("button");
    delBtn.innerText = "削除";
    delBtn.classList.add("btn", "btn-danger");
    right.appendChild(delBtn);

    //削除ボタンのイベント
    delBtn.addEventListener("click", () => {
        li.remove();
        saveDate();
    })
    todoTxt.value = "";
    saveDate();
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //文字が入力されていなければ何もしない
    if (todoTxt.value !== "") {
        addTodo();
    }

});

save.addEventListener("click", () => {
    if (todoTxt.value !== "") {
        addTodo();
    }
});

if (todos) {
    todos.forEach(todo => {
        addTodo(todo);

    });

}
