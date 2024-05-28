import Footer from "../Block/Footer";
import Gettoknow from "./Gettoknow";
import Landingpage from "./Landingpage";
import Mail from "./Mail";
import Projects from "./Projects";

const HomeScreen = () => {
  return (
    <div>
      <Landingpage />
      <Gettoknow />
      <Projects />
      <Mail />
      <Footer />
    </div>
  );
};

export default HomeScreen;
