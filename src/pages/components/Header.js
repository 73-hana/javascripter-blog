import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>JavaScripter</h1>
      <nav>
        <ul className={styles.header_links}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/js">JS</Link></li>
        </ul>
      </nav>
    </header>
  );
}