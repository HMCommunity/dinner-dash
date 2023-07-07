'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer } from '@/variants';

export default function HeroPage() {
  return (
    // Animations for hero text & image
    <motion.section
      variants={staggerContainer}
      initial='initial'
      animate='animate'
    >
      <motion.div className='flex flex-col lg:flex-row items-center gap-x-5 px-5 md:px-10 mt-8 xxl:mx-auto xxl:w-8/12'>
        <motion.div className='flex md:w-9/12 lg:w-1/2' variants={fadeIn()}>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-[48px] md:leading-tight'>
            The quickest, easiest and the most convenient way to satisfy your
            cravings!
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className='md:w-9/12 lg:w-1/2 flex justify-end mt-8 md:mt-10'
          variants={fadeUp()}
        >
          <Image
            src='/food-img.jpg'
            className='rounded-md'
            alt='food-img'
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
