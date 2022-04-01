import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import MyworkList from "./components/MyworkList/MyworkList";
import Contactme from "./components/contact/contact";
const App = () => {
    return <div>
        <Intro/>
        <About/>
        <MyworkList/>
        <Contactme/>
    </div>;
};

export default App;