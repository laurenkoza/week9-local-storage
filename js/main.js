(function(){//basically like sessions or cacheing people's activity so they can access it later when re-visiting

	var list = document.querySelector('#list');
	var saveAll = document.querySelector('#saveAll');
	var clearAll = document.querySelector('#clearAll');

	function emptyStorage(e){
		localStorage.clear();
	}

	function fillStorage(){
		localStorage.setItem('todolist',list.innerHTML);
	}

	function loadToDo(){
		if(window.localStorage){
			if(localStorage.getItem('todolist')){
				list.innerHTML = localStorage.getItem('todolist');
			}
		} else {
			console.log('get a better browser!')
		}
	}

	clearAll.addEventListener('click', emptyStorage, false);
	saveAll.addEventListener('click', fillStorage, false);

	loadToDo();

})();