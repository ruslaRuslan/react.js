import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))


// const kodlar = <div>
//   <h1>salam react qardas</h1>
//   <p>senen ne xeber?</p>
// </div>
// root.render(kodlar)

// ----------------------------------------------------------------------------------------------------------------

// function a() {
//   return <div>
//     <h1>salam react qardas</h1>
//     <p>senen ne xeber?</p>
//   </div>
// }
// a()

// root.render(
//   a()

// )

// ----------------------------------------------------------------------------------------------------------------


// function a() {
//   return <div>
//     <h1>salam react qardas</h1>
//     <p>senen ne xeber?</p>
//   </div>
// }
// a()

// root.render(
//   <div>
//     {a()}
//   </div>

// )

// ----------------------------------------------------------------------------------------------------------------

// function a() {
//   return <div>
//     <h1>salam react qardas {2 + 2}</h1>
//     <p>senen ne xeber?</p>

//   </div>
// }
// a()

// root.render(
//   <div>
//     {a()}
//   </div>

// )

// ----------------------------------------------------------------------------------------------------------------


// function a() {
//   return <div>
//     <h1>salam react qardas {2 + 2}</h1>
//     <p>senen ne xeber?</p>
//   </div>
// }
// a()

// root.render(
//   <div>
//     {a()}
//     {a()}
//     {a()}
//   </div>

// )

// ----------------------------------------------------------------------------------------------------------------


// function a() {
//   return <div style={{ color: 'red' }}>
//     <h1>salam react qardas {2 + 2}</h1>
//     <p>senen ne xeber?</p>
//   </div>
// }
// a()

// root.render(
//   <div>
//     {a()}
//     {a()}
//     {a()}
//   </div>

// )

// ----------------------------------------------------------------------------------------------------------------

function a() {
  return <div>
    <h1 style={{color: 'blue'}}>salam react qardas {2 + 2}</h1>
    <p style={{ color: 'red' }}>senen ne xeber?</p>
  </div>
}
a()

root.render(
  <div>
    {a()}
    {a()}
    {a()}
  </div>

)