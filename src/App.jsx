
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import QRCodeGenerator from "./components/qr-code";
import LightDarkMode from "./components/Toggle-theme";
import Scroll from "./components/Custom-scroll";
function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating/>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"5"}
      />
      <QRCodeGenerator/>
      <LightDarkMode/>
      <Scroll url={"https://dummyjson.com/products?limit=100"}/>
    </div>
   );
  }
  
export default App;