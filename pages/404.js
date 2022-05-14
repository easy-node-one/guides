// 404.js
import 'nextra-theme-docs/style.css'
import Link from 'next/link';

export default function FourOhFour() {
    return (<>
        <body>
            <div class="justify-content-center flex">
                <p className="text-center">
                    <h1>Easy Node - Harmony ONE Community - 404 Not</h1>
                    <h2>Sorry, we moved a LOT of things while combining all of our old guides into <a href="https://guides.easynode.one">guides.easynode.one</a> for everyone to enjoy in one spot.</h2>
                    <Link href="/">
                        <a>
                            Click here to go to guides.easynode.one and search for your old content at it's new home.
                        </a>
                    </Link>
                </p>
            </div>
        </body>
    </>)
}