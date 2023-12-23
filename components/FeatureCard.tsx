import React from 'react'

type Props = {
    text: string
}

const FeatureCard = ({text}: Props) => {
  return (
    <div className="w-[300px] py-3 px-4 bg-white text-blue-800 rounded-[1rem] text-justify items-center flex h-[150px]">
        <p>{text}</p>
    </div>
  )
}

export default FeatureCard