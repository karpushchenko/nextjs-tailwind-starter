import Image from 'next/image';
import React from 'react';

import Link from 'components/shared/link';

const CTA = () => (
  <section className="cta py-30 2xl:py-24 lg:py-19 sm:py-14">
    <div className="container">
      <div className="mx-auto grid max-w-[902px] grid-cols-1 lg:max-w-[616px]">
        <div className="relative z-10 text-center">
          <div className="cta__background opacity-2 absolute left-1/2 top-1/2 -z-10 block h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1 blur-[200px]" />
          <Image
            src="/img/tenzo-logotype.png"
            width="126"
            height="96"
            alt="logotype"
            className="mx-auto mb-9 lg:mb-8 lg:max-w-[104px] sm:max-w-[80px]"
          />
          <h2 className="sm:mx-auto sm:max-w-[328px]">
            Speed to Value.
            <br className="hidden sm:inline" />
            Get answers in days, not months.
          </h2>
          <p className="mx-auto mb-8 max-w-[577px] text-xl leading-normal lg:mb-7 lg:max-w-[405px] lg:text-base sm:mb-6 sm:max-w-[306px]">
            Organize your data with the best technology, the best human data analysts, and the best
            UX
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
