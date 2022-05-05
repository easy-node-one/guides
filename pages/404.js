// 404.js
import Link from 'next/link';
import 'nextra-theme-docs/style.css';

export default function FourOhFour() {
  return <>
    <h1>Sorry, we moved a LOT of things. 404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}