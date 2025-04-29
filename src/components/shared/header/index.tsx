import { ShoppingCart,UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';


const Header = () => {
    return ( 
        <header className='fw-fullborder-b'>
            <div className='wrapper flex-between'>
                <div className='flex-start'>
                    <Link href='/' className='flex-center gap-2'>
                        <Image 
                        src='/images/logo.png' 
                        alt={`${APP_NAME} logo` } 
                        width={32} 
                        height={32} 
                        />
                        <span className='hidden block-lg'>
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <div className='space-x-2'>
                    <Button variant='outline' size='icon'>
                        <Link href='/cart'>
                            <ShoppingCart /> Cart
                        </Link>
                    </Button>
                    <Button variant='outline' size='icon'>
                        <Link href='/login'>
                            <UserIcon /> Sign in 
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
     );
};
 
export default Header;