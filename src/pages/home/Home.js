import React from 'react'

import FlashSale from '../../component/home/flashsale/FlashSale'
import Category from '../../component/category/Category'
import JustFor from '../../component/home/justforyou/JustFor'

function Home() {
  return (
    < div style={{
      background: '#eff0f5',
    }}>

      <FlashSale />
      <Category />
      <JustFor />
    </div>
  )
}

export default Home