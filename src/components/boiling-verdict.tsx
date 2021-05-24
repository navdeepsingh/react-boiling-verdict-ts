import React from 'react'

type IProps = {
  celsius: number
}

const BoilingVerdict: React.FC<IProps> = ({celsius}) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict
