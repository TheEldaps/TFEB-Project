// const productName = document.querySelector('#PN');
// const quantity = document.querySelector('#quantity');
// const cost = document.querySelector('#cost');
// const enteredBy = document.querySelector('#entered-by');
// const submit = document.querySelector('.submit-btn');
// const card = document.querySelector('.card');

// const drugList = []


// submit.addEventListener('click', function(){
//     const productName = document.querySelector('#PN');
//     console.log(productName);
//     // while (productName.value = '') {
//     //     card.insertAdjacentElement(afterbegin, <p> pls fill all spaces</p>)
//     // }

// })


// CHAT GPT CODE

    
    
        // Array to hold the objects
        const objectArray = [];

        // Function to create an object and update the list
        function addToHistory() {
            // Get values from input elements
            const productName = document.getElementById('PN').value;
            const quantity = document.getElementById('quantity').value;
            const cost = document.getElementById('cost').value;
            const enteredBy = document.getElementById('entered-by').value;

            // Create an object with those values
            const newObject = {
                productName: productName,
                quantity: quantity,
                cost: cost,
                enteredBy: enteredBy
            };

            // Add the object to the array
            objectArray.push(newObject);

            // Update the display
            updateDisplay();
        }


        function updateDisplay() {
            const objectListDiv = document.querySelector('.history-tab');
            // Build HTML for all objects
            let htmlContent;
            objectArray.forEach((obj, index) => {
                htmlContent = `<div>${index + 1}. ${obj.productName} ${obj.quantity} ${obj.cost} ${obj.enteredBy}</div>`;
                objectListDiv.innerHTML = htmlContent;
            });
            
                
        

            // Update the display using insertAdjacentHTML
           
        }


        // // Function to update the display of the object list
        // function updateDisplay() {
        //     const objectListDiv = document.querySelector('.history-tab');
        //     // objectListDiv.innerHTML = ''; // Clear existing content

        //     // Create a list of objects
        //     objectArray.forEach((obj, index) => {
        //         const listItem = document.createElement('div');
        //         listItem.textContent = `Object ${index + 1}: ${JSON.stringify(obj)}`;
        //         objectListDiv.appendChild(listItem);
        //     });
        // }

        // Attach the function to the button click event
        
  