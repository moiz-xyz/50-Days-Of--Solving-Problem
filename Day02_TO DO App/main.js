
let inputs = document.getElementById("input");
let task = document.querySelector(".task");

let main = document.getElementById('main');
main.innerHTML = `
  <h2>To do app <i id="icon" class="fa-solid fa-calendar-check"></i></h2>
        <div class="input">
            <input type="text" placeholder="Enter your task" id="input">
            <button onclick="Add()">Add</button>
        </div>
        <div class="task">
      </div>
`
function Add() {
    if (inputs.value === "") {
        alert("You need to add something. Your list cannot be empty.");
    } else {
        let newEL = document.createElement("ul");
        newEL.innerHTML = `
            <span class="task-text">${inputs.value}</span>
            <i class="fa-solid fa-pencil edit"></i>
            <i class="fa-solid fa-xmark remove"></i>
        `;

        task.appendChild(newEL);
        inputs.value = "";

        newEL.querySelector(".remove").addEventListener("click", function () {
            newEL.remove();
        });

        newEL.querySelector(".edit").addEventListener("click", function () {
            let taskText = newEL.querySelector(".task-text");
            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.classList.add("input")
            editInput.value = taskText.innerText;

            newEL.replaceChild(editInput, taskText);

            editInput.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    taskText.innerText = editInput.value;
                    newEL.replaceChild(taskText, editInput);
                }
            });

            editInput.focus();
        });
    }
}



// style for to do app
const style = document.createElement("style");
style.innerHTML = `
/* Importing the Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #153677, #4e085f);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Main container styling */
.main {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* Heading styling */
.main h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #fff;
}

/* Input container styling */
.input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.input input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
}

.input button {
    background: #4e085f;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
}

.input button:hover {
    background: #153677;
}

/* Task container styling */
.task {
    text-align: left;
    max-height: 300px;
    overflow-y: auto;
    padding: 0;
}

.task ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

/* Make each LI a flex container */
.task ul li {
    display: flex;
    justify-content: space-between; /* Push text to left, icons to right */
    align-items: center; /* Align text and icons vertically */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
}

/* Icon container */
.icon-container {
    display: flex;
    gap: 10px; /* Space between icons */
}

/* Icons */
.task ul i {
    cursor: pointer;
    color: black;
    font-size: 1.2rem;
    transition: color 0.3s, transform 0.2s;
    padding: 5px;
}

.task ul i:hover {
    color: white;
    transform: scale(1.2); /* Slight zoom effect */
}

/* Responsive styling */
@media screen and (max-width: 768px) {
    .main h2 {
        font-size: 1.5rem;
    }

    .input input {
        font-size: 0.9rem;
    }

    .input button {
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 480px) {
    .main {
        padding: 15px;
    }

    .input {
        flex-direction: column;
    }

    .input input {
        margin-bottom: 10px;
    }
}
`;

// Append the <style> element to the document head
document.head.appendChild(style);


