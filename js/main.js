let inputText = document.getElementById("textInput");
let addBtn = document.getElementById("addBtn");
let passValue = "";
let inputSave1 = document.createElement("input");
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (isNotValidText(inputText.value)) {
        window.alert("Please Enter a Text");
    } else {

        //Create li
        let li = document.createElement("li");
        li.className = "save-input";

        //Create Input Text
        let inputSave = document.createElement("input");
        inputSave.className = "save-input";
        inputSave.value = inputText.value;
        passValue = inputSave.value;
        inputText.value = "";

        inputSave.disabled = true;

        inputSave1 = inputSave;

        //Create Edit Button
        let editBtn = document.createElement("button");
        editBtn.className = "editBtn";
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", editItem);

        //Create Done Button
        let doneBtn = document.createElement("button");
        doneBtn.className = "doneBtn";
        doneBtn.textContent = "Done";
        //This will send li to Done list
        doneBtn.addEventListener("click", addToDone);
        //This will delet itself from save-task list
        doneBtn.addEventListener("click", removeItem);


        //Create Remove Button
        let removeBtn = document.createElement("button");
        removeBtn.className = "removeBtn";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", removeItem);

        //append all child elements in List
        li.appendChild(inputSave);
        li.appendChild(editBtn);
        li.appendChild(doneBtn);
        li.appendChild(removeBtn);
        //append list elements in ul in Save-task
        document.getElementById("save-task").appendChild(li);

    }


});

//Defination for remove button
function removeItem(a) {
    a.preventDefault();
    this.parentElement.remove();
}

function isNotValidText(stringVal) {

    if (stringVal.trim().length == 0) {
        return true;
    } else
        return false;

}

function addToDone(z) {
    z.preventDefault();


    let li = document.createElement("li");
    li.className = "save-input";

    //Create Input Text
    let inputSave = document.createElement("input");
    inputSave.className = "save-input";
    inputSave.value = passValue;
    inputSave.disabled = true;

    inputSave1 = inputSave;


    //Create Edit Button
    let editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", editItem);


    //Create Remove Button
    let removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", removeItem);

    //append all child elements in List
    li.appendChild(inputSave);
    li.appendChild(editBtn);

    li.appendChild(removeBtn);
    //append list elements in ul in Save-task
    document.getElementById("done-task").appendChild(li);
    //

}

function editItem(e) {
    e.preventDefault();
    if (inputSave1.disabled == true)
        inputSave1.disabled = false;
    else

    {
        if (isNotValidText(inputSave1.value))
            alert("Please Enter Some Text");
        else
            inputSave1.disabled = true;
    }

}