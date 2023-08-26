let inputBox = document.getElementById("input-box");
let textContainer = document.getElementById("text");



function addTask(){
    if(inputBox.value === '') {
        alert("you must write something to add!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = `${inputBox.value} <i class="fa-solid fa-trash"></i>`;
        // li.innerHTML = `${inputBox.value} <i>c</i>`;
        textContainer.append(li);

        li.querySelector('i').addEventListener('click',(e)=>{
            e.target.parentElement.remove();
            // textContainer.append(li);+
    })
    }
    inputBox.value = "";
}