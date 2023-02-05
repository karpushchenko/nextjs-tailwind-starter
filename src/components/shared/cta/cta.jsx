import Image from 'next/image';
import React from 'react';

import Link from 'components/shared/link';


const CTA = () => ( 
    <section className="cta py-30 2xl:py-24 lg:py-19 sm:py-14">
        <div className="container">
            <div className="mx-auto grid max-w-[902px] lg:max-w-[616px] grid-cols-1">
                <div className="text-center relative z-10">
                    <div className="cta__background absolute block h-72 w-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1 opacity-2 blur-[200px] -z-10" />
                    <Image src="/img/tenzo-logotype.png"  width="126" height="96" alt="logotype" className="mx-auto mb-9 lg:max-w-[104px] lg:mb-8 sm:max-w-[80px]" />
                    <h2 className='sm:max-w-[328px] sm:mx-auto'>
                        Speed to Value. 
                        <br className='hidden sm:inline' />
                        Get answers in days, not months.
                    </h2>
                    <p className="max-w-[577px] lg:max-w-[405px] sm:max-w-[306px] mx-auto mb-8 lg:mb-7 sm:mb-6 text-xl lg:text-base leading-normal">
                        Organize your data with the best technology, the best human data analysts, and the best UX
                    </p>
                    <Link size="default" theme="default" to="about">
                        See a Demo
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default CTA;