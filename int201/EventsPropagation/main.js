// //1. select target HTML object
// const submitButton = document.querySelector('button')
// // console.log(submitButton)

// // 2 register handler function on a target HtML object
// const doSomething = (e) => {
//   // console.log('submit button is clicked')
//   // console.log(e)
//   console.log(e.target.id)
//   // console.log(e.type)
//   // console.log(e.target)
//   console.log(e.currentTarget)
//   console.log(e.eventPhase)
// }
// submitButton.addEventListener('click', doSomething)

// // -----------------------
// // inner-div
// const innerDiv = document.getElementById('inner-div')
// // console.log(innerDiv)
// innerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })
// ***************-------------Version2------------------***********


//1. select target HTML object
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object
const doSomething = (e) => {
  // console.log('submit button is clicked')
  // console.log(e)
  console.log(e.target.id)
  // console.log(e.type)
  // console.log(e.target)
  console.log(e.currentTarget)
  console.log(e.eventPhase)
}
submitButton.addEventListener('click', doSomething)
// -----------------------
// inner-div
const innerDiv = document.getElementById('inner-div')
// console.log(innerDiv)
innerDiv.addEventListener('click', (eventIn) => {
  console.log(eventIn.target.id)
  console.log(eventIn.currentTarget)
  console.log(eventIn.eventPhase)
})
//outer-div
// inner-div
const outerDiv = document.getElementById('outer-div')
// console.log(outerDiv)
outerDiv.addEventListener('click', (eventOut) => {
  console.log(eventOut.target.id)
  console.log(eventOut.currentTarget)
  console.log(eventOut.eventPhase)
})