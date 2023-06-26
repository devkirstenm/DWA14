# Tally App using Lit

## Challenge Objective ✅
For this project, we were required to do build a Tally App using the Lit Framework.

Lit helps developers build fast, lightweight web components.

## Application 📱
Created a single web component called 'TallyApp' which extends the 'LitElement' base class provided by Lit and includes the following functionality:
- The app displays a counter
- Clicking the "Increment" button increments the counter by 1.
- Clicking the "Decrement" button decrements the counter by 1.

## User Stories 📝

The user stories for this application, written in Gherkin syntax, are as follows:

1. **Display the counter in normal state** 🔢
- Given no interactions have been performed yet
- When the application is loaded or reloaded
- Then the state should display the normal counter value of 0

2. **Increment the counter by one** 🔢

   - Given no interactions have been performed yet
   - When an "ADD" action is dispatched
   - And another "ADD" action is dispatched
   - Then the state should show a count of 2

3. **Decrement the counter by one** 🔢

   - Given the current count in the state is 2
   - When a "SUBTRACT" action is dispatched
   - Then the state should display a count of 1

## How to Use 🚀

1. Download the code from the Git repository by clicking on the "Download ZIP" button.

2. Open the downloaded code in Visual Studio Code or your preferred code editor.

3. Right-click on the 'index.html' file and select the option to open in browser.

## Technologies Used 🛠️

Visual Studio Code

### Programming Languages 💻

- HTML
- JavaScript

## Credits 👏

Challenge provided by [Codespace](https://www.codespace.co.za/) as part of the Dynamic Web Apps Module (DWA_14: State Machines)