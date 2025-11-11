# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Day 1:27/10/2025 :
BOM
DOM
react
library
npm -installation and execution
npx- execution only
node
node installation
create react app
babel - compiler/ transpilar  converts jsx to pure js
package.json - blueprint or metadata of a particular project
src- source file that contains all the code files that you work

day 2: 28/10/2025:
file structure
component- is a building block of react project it is a resuable piece of code
function components - component is a js function which returns the jsx element.
jsx: javascript xml (not html it is html like syntax)
rules for jsx:
           1.returns only one parent element
           2.embedded js using {}
           3.inline styles -- {{}}
           4. use "className" instead of  using "class"
           5.create a folder inside src as components (parsel casing )
             inside that file - Greetings. import it in app
           6. props - it is a property used to pass data from parent component to the child component
           7. events using camel case

Day 3:29/10/2025:
        state: state is special memory inside a component that can holds data which can change over time
        Hooks: hook is a special function used to  state management, lifecycle methods , side effects 
        usestate: usestate is a hook used to manage state.
        const [state, setState]=usestate
        events:action performed by user
        synthetic events: react wrap html events.

Day 4:30/10/2025:
object destructuring const student = { name: "Gayathri", age: 22, course: "MERN", city: "Chennai" };
// Split (extract) some properties 
const { name, age } = student;
console.log(name); // Gayathri 
console.log(age); // 22 
task : Show each student’s name (from props) with a Present/Absent button. Use state to toggle and display the attendance status.

day5:31/10/2025:
listing in react by map and key
ternary operator,boolean in state
task:
1.counter => reset()
2.login button, click panna welcome else pls login
&& and state
3.hide and show button
a.

day6:3/11/25:
task:
ternary operator login && operator
1.weather app ==>temp:30 hot else cold
.need input field
.temp enter(0-55)

day7:4/11/25
review

day8:5/11/25
event handler - it  is a function that handles the user  interaction like clicking mouse
API-Apllication Programming Interface

day11:10/11/25
form submit:-
controlled component : 
uncontrolled component :

day12:11/11/25
drop down statement using <select>

useEffect ??
syntax:

useEffect(()=>{
  <!-- side effect code -->
})

case:1 -->run after all renders
useEffect({}=>{
  <!-- side effect code -->
})

case:2 -->run after initial render
useEffect(()=>{
  <!-- side effect code -->
},[])
dependancy - array - second is useEffect

case:3 -->run after state change render
const[name,setName]=useState(")
useEffect(()=>{
<!-- side effect code -->
},[name])
