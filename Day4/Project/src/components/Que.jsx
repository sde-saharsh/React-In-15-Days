function callMe(){
    alert("Outer function call");
}

function Que(){

    function callMe(){
        alert("inner function call");
    }

    return (
        <div>
            <button onClick={callMe}>Function Testing</button>
        </div>
    )
}

export default Que;


// ✅ What You Did:
// You have two functions with the same name callMe:

// One global (outer) function:

// js
// Copy
// Edit
// function callMe() {
//     alert("Outer function call");
// }
// One inner function (inside the Que component):

// js
// Copy
// Edit
// function callMe() {
//     alert("Inner function call");
// }
// ✅ What Happened:
// 📍 When the inner function exists:
// The onClick handler looks for callMe inside the Que component first.

// React follows JavaScript scoping rules:

// Closest (local) function wins.

// So 👉 the inner function gets called.

// 📍 When you comment the inner function:
// js
// Copy
// Edit
// // function callMe() { ... }
// Now, React can't find callMe inside the component.

// It looks outside (global scope) and finds the outer function.

// 👉 So the outer function gets called.

// 🔥 Why?
// This is JavaScript’s lexical scoping:

// "When a function is executed, it looks for the variable/function declaration in the nearest scope first (inside the component), then goes outward."

// ✅ Simple Example:
// js
// Copy
// Edit
// function outer() {
//     console.log("Outer");
// }

// function App() {
//     function outer() {
//         console.log("Inner");
//     }

//     return <button onClick={outer}>Click Me</button>;
// }
// 👉 Here, the inner outer function will always be called.

// If you comment the inner one:

// js
// Copy
// Edit
// // function outer() { ... }
// 👉 It will now call the global one.

// 🎯 Summary:
// Situation	Which Function Runs
// Inner function exists	Inner is called
// Inner function removed/commented	Outer is called

