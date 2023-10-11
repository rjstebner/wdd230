const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '✖';
        li.appendChild(deleteButton);
        list.appendChild(li);
    }
});

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        list.removeChild(event.target.parentElement);
        input.focus();
        input.value = '';
    }
});
