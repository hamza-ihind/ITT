import styles from "./App.module.css";
import { Layout } from "./Layout/Layout";
import { Topbar } from "./components/Topbar";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.bar}>
        <Topbar />
        <Navigation />
      </div>
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
