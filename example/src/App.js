import React from 'react'
import ReactResponsiveSlider from './Components/ReactResponsiveSlider'

import 'domestika-slider-library/dist/index.css'

const App = () => {
  return <ReactResponsiveSlider
    startingSlide={1}
    timing={'.5s'}
    timingFunction={'ease-out'}
    controls
  />
}

export default App
