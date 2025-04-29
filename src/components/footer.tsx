import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <footer>
            <div className='wrapper'>
                <div className='flex-between'>
                    <div className='flex-start'>
                        <Link href='/' className='flex-center gap-2'>
                            <Image src='/images/logo.png' alt={APP_NAME} width={32} height={32} />
                        </Link>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                        © {currentYear} {APP_NAME}. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
     );
}   

export default Footer; 