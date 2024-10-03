function getOption() {
    selectElement = 
          document.querySelector('#color');
    output = selectElement.value;
    document.querySelector('.output').textContent = output; 
    // above borrowed from https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/
    
}