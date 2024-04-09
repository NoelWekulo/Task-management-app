(() => {
    let toDoListArray = [];

    const form = document.querySelector('.form');
    const input = document.querySelector('.form-input');
    const ul = document.querySelector('.toDoList');

    form.addEventListener('submit' , (e) =>{
        e.preventDefault();

        let itemId = String(Date.now());
        let toDoItem = input.value;

        addItemToDom(itemId,toDoItem);
        addItemToArray(itemId,toDoItem);

        input.value = '';
    });
    ul.addEventListener('click', (e) =>{
      let id = e.target.getAttribute('data-id');
      if (!id) return;

      removeItemfromDOM(id);
      removeItemfromArray(id);

    });
    function addItemToDom(itemId,toDoItem){
        const li = document.createElement('li');
        li.setAttribute('data-id',itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);
    }
    function addItemToArray(itemId, toDoItem){
        toDoListArray.push({itemId, toDoItem});
        console.log(toDoListArray);

    }
    function removeItemfromDOM(id){

        var li = document.querySelector('[data-id="' + id +'"]');
        ul.removeChild(li);

    }
    function removeItemfromArray(id){
        toDoListArray = toDoListArray.filter((item) => item.itemId !==id );
        console.log(toDoListArray);
    }
})();

