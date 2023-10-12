import React from 'react'

export default function Preloader() {
  return (
    <div className=" fixed w-[100%] h-[100%] top-[0] left-[0] bg-[#fff] z-[9999999999] flex justify-center items-center" style={{
      background: '#000'
  }} >
    <div class="bg">
      <div class="loader"></div>
    </div>
  </div>
  )
}
