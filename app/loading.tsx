import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='loading'>
        <Image src={'/nex.png'} height={300} width={300} alt='LOGO' />
        <h1>Loading.....</h1>
    </div>
  )
}

export default loading