
let Container = document.querySelector('#Container');

function defaultSquares() {
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
}

defaultSquares();

function userInput() {
    Container.innerHTML = "";
    let number = prompt("Choose the number of boxes", "50");
    if (number > 100) {
    alert("message here");
    return;
}
    
}
const inputBtn = document.querySelector("#inputBtn");
inputBtn.addEventListener('click', function() {
    
})



/* Create a button
Button prompts user for input of number of boxes
That input is used in a temperate literal formula 
the formula dynamically calculate box sizes via pixels
box pixels are applied to width value in CSS

 result = `square.width: 980/${number}px`;
 */ 

/* clear the Container, re-initiate the for-loops using the 
inputted number of boxes, calculate the pixel width of each box */