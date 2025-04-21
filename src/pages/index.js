import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          DOMINA EL INSPECTOR DE ELEMENTOS COMO UN PRO<br></br> <span className={styles.brand}>Aprende sin complicaciones</span>
        </h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.customButton} to="/docs/intro">
            Empieza a aprender ahora con un solo click
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Bienvenido lector"
      description="Explora la documentación de forma intuitiva y moderna.">
      <HomepageHeader />
    </Layout>
  );
}
