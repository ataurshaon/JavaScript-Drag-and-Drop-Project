const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//add event listener to the fill

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//here we are adding add event listener to the empties
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


function dragStart(){
    //add a class of drag in to the fill
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd(){
    //add a class of drag in to the fill
    this.className = 'fill';
}

function dragOver (e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}