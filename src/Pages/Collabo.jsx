import React from 'react'
import SearchAndPost from '../Components/CollaboComponents/SearchAndPost'
import CardCollabo from '../Components/CollaboComponents/CardCollabo'
import styled from 'styled-components'

const Collabo = () => {
  return (
    <div>

      <WRAPPER>
        <SearchAndPost/>
        <CardCollabo/>
      </WRAPPER>
     
      
    </div>
  )
}

export default Collabo

const WRAPPER = styled.div`
  padding: 10px;
`