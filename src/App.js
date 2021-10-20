import styles from './app.module.css';
import { AppUpper } from './components/app-upper/app-upper';
import { Footer } from './components/footer/footer';
import './index.css';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppUpper />
      <Footer />
    </div>
  );
};

export default App;
