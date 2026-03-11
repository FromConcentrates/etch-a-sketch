let Container = document.querySelector('#Container');


for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    Container.appendChild(row);

        for(let b = 0; b < 16; b++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', function() {
          square.classList.add('squareHover')  
        })
        row.appendChild(square);
        
    }


}