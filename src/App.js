import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    < Header header="Galería de Imágenes con React"/>
    < Cards url="https://cdn.pixabay.com/photo/2017/04/05/01/16/palm-trees-2203737_960_720.jpg" title=" Puesta de Sol " description="Ubicación: Miami"  />
    < Cards url="https://cdn.pixabay.com/photo/2017/08/29/09/26/disney-2692578_960_720.jpg" title=" Disney World " description="Ubicación: Orlando"  />
    < Cards url="https://cdn.pixabay.com/photo/2016/08/16/17/32/hollywood-sign-1598473_960_720.jpg" title=" Cartel Gigante Hollywood " description="Ubicación: Los Ángeles"  />
    < Footer />
    </>
  );
}

export default App;
