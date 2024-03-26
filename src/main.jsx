import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

import "./a.css"

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

// function a() {
//   return <div>
//     <h1 style={{color: 'blue'}}>salam react qardas {2 + 2}</h1>
//     <p style={{ color: 'red' }}>senen ne xeber?</p>
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

// const qirmizi = { color: 'red' }

// function a() {
//   return <div>
//     <h1 style={qirmizi}>salam Ruslan qardas</h1>
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



// function a(ad) {
//   console.log(ad);
//   return <div>
//     <h1 style={{ color: 'red' }}>salam {ad} Ruslan qardas</h1>
//   </div>
// }
// a()

// root.render(
//   <div>
//     {a("sebine")}
//     {a("sada")}
//     {a("ali")}
//   </div>

// )

// ----------------------------------------------------------------------------------------------------------------


// function a(ad, age) {
//   console.log(ad);
//   return <div>
//     <h1 style={{ color: 'red' }}>{ad}: salam  Ruslan qardas, menim {age} yasim var</h1>
//   </div>
// }
// a()

// root.render(
//   <div>
//     {a("sebine", 26)}
//     {a("sada", 40)}
//     {a("ali", 30)}
//   </div>

// )

// ----------------------------------------------------------------------------------------------------------------


function A(obj) {
  console.log(obj);
  return <div>
    <h1 style={{ color: 'red' }}>{obj.ad}: salam  Ruslan qardas, menim {obj.age} yasim var</h1>
  </div>
}


root.render(
  <div>
    <A ad="sebine" age={26} />
    <A ad="sada" age={40} />
    <A ad="ali" age={30} />
  </div>

)