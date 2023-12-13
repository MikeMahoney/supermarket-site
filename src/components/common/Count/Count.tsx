import React from 'react'
import './CountStyles.scss'

interface ICount {
  value: number
}

const Count: React.FC<ICount> = ({ value }) => {
  return <div className='count'>{value}</div>
}

export default Count
