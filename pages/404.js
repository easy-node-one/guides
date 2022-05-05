// 404.js
import 'nextra-theme-docs/style.css'
import Link from 'next/link';

export default function FourOhFour() {
    return (<>
        <div className="justify-content-center flex">
            <p className="text-center ">
                <h1>Sorry, we moved a LOT of things.</h1>
                <h3>Page Not Found</h3>
                <Link href="/">
                    <a className="text-center">
                        Click here to back home to guides.easynode.one
                    </a>
                </Link>
            </p>
        </div>
    </>)
}