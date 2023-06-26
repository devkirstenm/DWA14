import {html, render} from 'https://unpkg.com/lit-html?module';

// Defining count values
let count = 0;
const minCount = 0;
const maxCount = 10;

// Define template
const myTemplate = (name, count) => html`
  <p>Hello ${name}</p>
  <p>Count: ${count}</p>
    <!-- 
    * Displays 2 buttons for + and -
    * Added event listeners '@click='
    * Used 'disabled' to disable buttons when count reaches max/min values (0 and 10)
    -->
  <button @click=${incrementCount} ?disabled=${count >= maxCount}>+</button>
  <button @click=${decrementCount} ?disabled=${count <= minCount}>-</button>
`;

// Count functionality
function incrementCount() {
    if (count < maxCount) {
      count++;
      update();
    }
  }
  
  function decrementCount() {
    if (count > minCount) {
      count--;
      update();
    }
  }
  
  // Render template to the document
  function update() {
    render(myTemplate('World', count), document.body);
  }
  
  // Calling update function to render the initial state of counter
  update();