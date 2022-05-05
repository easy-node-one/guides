// 404.js
import 'nextra-theme-docs/style.css'
import Link from 'next/link';

export default function FourOhFour() {
    return (<>
        <div class="justify-content-center flex">
            <p class="text-center">
                <h1>Sorry, we moved a LOT of things.</h1>
                <h3>Page Not Found</h3><br /><br />
                <Link href="/">
                    <a>
                        Click here to back home to guides.easynode.one
                    </a>
                </Link>
            </p>
        </div>
    </>)
}