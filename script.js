const button = document.querySelector("#searchButton");
const inputField = document.querySelector("#search");
const deleteBtn = document.querySelector("#clear");


inputField.addEventListener('input', () => {
    if(inputField.value === '') {
        deleteBtn.style.display = "none";
    } else {
        deleteBtn.style.display = "inline-block";
    }
    
});

deleteBtn.addEventListener('click', () => {
    inputField.value = '';
    deleteBtn.style.display = "none";
});

button.addEventListener('click', (event) => {
    if(inputField.value === '') {
        button.disabled = true;
    } else {
        alert(inputField.value);
    }
});

const alertMethod = ()=> {
    const div = document.createElement('div');
    div.className = 
};

    

    
