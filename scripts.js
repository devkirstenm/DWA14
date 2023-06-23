/** IMPORTING LIT MODULES
 * Imports the necessary modules (reusable pieces of code that's imported) from Lit: specifically html, css, and LitElement from the 'lit' package (the Lit library)
    * a) HTML module: allows you to write HTML templates in a more readable way using tagged template literals
    * b) css module: provides CSS template literal that helps define CSS styles for web components
    * c) LitElement module: the base class provided by Lit, which extends the standard HTMLElement and provides additional features to create reusable web components
 */
import {html, render} from 'https://unpkg.com/lit-html?module';

/** CREATING A CUSTOM ELEMENT:
 * We only need one custom element which represents the entire Tally App
 * Think of a custom element as a self-contained component that has its own HTML structure, behaviour and styling
 * In this case the 'TallyApp' custom element encapsulates all the necessary elements and logic for the Tally App
 * 
 * Here we create a new class called 'TallyApp', which extends the 'LitElement' class
 * Meaning the 'TallyApp' class inherits all the functionality provided by LitElement and allows us to create a custom web component
*/ 

/** WHAT IS 'STATIC'?
 * You will notice 'static' before properties, styles, and other class members 
 * By using 'static' you are defining the properties/styles etc. as a static property of the class.
 * Meaning, the styles/properties will be shared among all instances of the component
 */

class TallyApp extends LitElement {

    /** ADDING CSS STYLING
     * This defines the css styles for the TallyApp component
     * so that you can write it directly in JS.
     * 
     * Define styling by writing CSS roles inside the backticks
     */
    static styles = css`
    .counter {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .status {
        color: red;
        font-style: italic
    }
    `;

    /** DEFINE PROPERTIES
     * Here you can define properties for the TallyApp component.
     * Properties are the variables that hold the state and data of a component.
     * 
     * Here, we specify that the property and define it's type (what it should be)
     */

    static properties = {
        count: { type: Number },
        status: { type: String },
    };
 
    /** CONSTRUCTOR (SETTING STARTING STATE OF PROGRAM)
     * The constructor is a special method that gets called when an instance of 
     * the "TallyApp" component is created (e.g. when a webpage first loads). 
     * 
     * In this case it initializes the 'count' property to '0' & 'status' to an empty string
     */

    constructor() {
        super();
        this.count = 0;
        this.status = ''; 
    }

    /** UPDATE COUNTER
     * 'updateCounter' updates the counter value and status based on the provided increment value.
     * It also checks for the min & max bounds of the counter and updates the status accordingly.
     */
    updateCounter(increment) {
        this.count += increment;
        if (this.count === 0) {
            this.status = 'Normal';
        } else if (this.count < 0) {
            this.status = 'Minimum Count Reached';
        } else if (this.count > 15) {
            this.status = 'Maximum Count Reached';
        }
    }

    /** RENDER METHOD
     * This defines the structure & content of the component's template.
     * It uses html tagged template literal to create HTML templates in a more readable way.
     * 
     * In this case, it returns the HTML structure for the TallyApp component, including the counter value & status.
     */
    render() {
        return html`
        <!-- Displaying 'counter' & 'status' -->
        <div class="counter">Counter: ${this.count}</div>
        <div class="status">Status: ${this.status}</div>
        <!-- Click event listeners that call the updateCounter method -->
        <button @click=${() => this.updateCounter(1)}>Increment</button>
        <button @click=${() => this.updateCounter(-1)}>Decrement</button>
        `;
    }
}

/** REGISTER COMPONENT
 * Registering the 'TallyApp' component as a custom element
 * This allows us to use 'tally-app' element in our HTML as <tally-app></tally-app>.
 */
// 
customElements.define('tally-app', TallyApp);



