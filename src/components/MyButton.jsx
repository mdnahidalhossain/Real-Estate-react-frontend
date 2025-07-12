import React from 'react'

const MyButton = ({...props}) => {
  return (
    <>
    <div>
        <button {...props}></button>
    </div>
    </>
  )
}

export default MyButton