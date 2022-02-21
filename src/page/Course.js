import AppBar from "../component/AppBar";
import KakaoMapPolyline from "../component/KakaomapPolyline";
import KakaomapTest from "../component/KakaomapTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AppBar />
      </header>
      <KakaoMapPolyline />
    </div>
  );
}

export default App;
