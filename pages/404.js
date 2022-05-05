// 404.js
import 'nextra-theme-docs/style.css'
import Link from 'next/link';

export default function FourOhFour() {
    return (<>
        <div className="text-center">
            <h1>Sorry, we moved a LOT of things. Page Not Found</h1><br />
            <Link href="/">
                <a>
                    Click here to back home to guides.easynode.one
                </a>
            </Link>
        </div>
    </>)
}