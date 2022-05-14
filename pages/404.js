// 404.js
import 'nextra-theme-docs/style.css'
import Link from 'next/link';

export default function FourOhFour() {
    return (<>
        <div class="justify-content-center flex">
            <p class="text-center">
                <h2>Sorry, we moved a LOT of things while combining all of our old guides into <a href="https://guides.harmony.one">guides.harmony.one</a> for everyone to enjoy in one spot.</h2>
                <h3>Old Page Not Found - It's been moved to our new website.</h3><br /><br />
                <Link href="/">
                    <a>
                        Click here to go to guides.easynode.one and search for your old content at it's new home.
                    </a>
                </Link>
            </p>
        </div>
    </>)
}