import './App.css'

import Carousel from './Carousel'

function App() {

  const CAROUSEL_IMAGES = [
    'https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg',
    'https://img.freepik.com/premium-vector/abstract-pastel-color-background-with-pink-purple-gradient-effect-graphic-design-decoration_120819-463.jpg',
    'https://media.architecturaldigest.com/photos/6080a73d795a7b010f3dd2e0/2:1/w_2700,h_1350,c_limit/GettyImages-1213929929.jpg',
  ]

  return (
    <>
      <h1>캐러샐 코드</h1>
      <Carousel sectionNumberList={[1, 2, 3, 4, 5, 6, 7]} />
    </>
  )
}

export default App
