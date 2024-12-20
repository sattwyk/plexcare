'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Hospital,
  Calendar,
  ClipboardList,
  UserCircle,
  MapPin,
  Clock,
  Shield,
  Search,
} from 'lucide-react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className='relative min-h-[calc(100vh-4rem)]'>
      <div className='absolute inset-0 -z-10'>
        <div className="absolute inset-0 bg-[url('/hospital-pattern.svg')] opacity-5" />
        <div className='absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950' />
      </div>

      <section className='mx-auto container px-4 pt-20 pb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center max-w-3xl mx-auto mb-20'
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 mb-6'>
            One Stop Solution For All Your Healthcare Needs
          </h1>
          <p className='text-lg text-gray-400 mb-8'>
            Access your medical records, find nearby hospitals, and manage
            appointments all in one place.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              asChild
              size='lg'
              className='bg-orange-500 text-white hover:bg-orange-600'
            >
              <Link href='/signup'>Get Started</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
            >
              <Link href='/about'>Learn More</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
        >
          <motion.div
            variants={item}
            className='group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 p-6 hover:border-orange-500/50 transition-colors'
          >
            <div className='relative z-10'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500'>
                <Hospital className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-lg font-medium text-gray-50'>
                Hospital Locator
              </h3>
              <p className='text-gray-400 mb-4'>
                Find nearby hospitals instantly with our interactive map and get
                detailed information about facilities.
              </p>
              <div className='flex gap-4 text-sm text-gray-400'>
                <span className='flex items-center'>
                  <MapPin className='mr-1 h-4 w-4 text-orange-500' />
                  Real-time Location
                </span>
                <span className='flex items-center'>
                  <Search className='mr-1 h-4 w-4 text-orange-500' />
                  Advanced Search
                </span>
              </div>
            </div>
            <div className='absolute inset-0 z-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
          </motion.div>

          <motion.div
            variants={item}
            className='group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 p-6 hover:border-orange-500/50 transition-colors'
          >
            <div className='relative z-10'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500'>
                <ClipboardList className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-lg font-medium text-gray-50'>
                Health Records
              </h3>
              <p className='text-gray-400 mb-4'>
                Access your complete medical history, prescriptions, and lab
                results securely in one place.
              </p>
              <div className='flex gap-4 text-sm text-gray-400'>
                <span className='flex items-center'>
                  <Shield className='mr-1 h-4 w-4 text-orange-500' />
                  Secure Storage
                </span>
                <span className='flex items-center'>
                  <UserCircle className='mr-1 h-4 w-4 text-orange-500' />
                  Multi-provider Access
                </span>
              </div>
            </div>
            <div className='absolute inset-0 z-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
          </motion.div>

          <motion.div
            variants={item}
            className='group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 p-6 hover:border-orange-500/50 transition-colors md:col-span-2 lg:col-span-1'
          >
            <div className='relative z-10'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500'>
                <Calendar className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-lg font-medium text-gray-50'>
                Smart Scheduling
              </h3>
              <p className='text-gray-400 mb-4'>
                Book, reschedule, or cancel appointments with healthcare
                providers effortlessly.
              </p>
              <div className='flex gap-4 text-sm text-gray-400'>
                <span className='flex items-center'>
                  <Clock className='mr-1 h-4 w-4 text-orange-500' />
                  Real-time Availability
                </span>
                <span className='flex items-center'>
                  <Calendar className='mr-1 h-4 w-4 text-orange-500' />
                  Smart Reminders
                </span>
              </div>
            </div>
            <div className='absolute inset-0 z-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center'
        >
          <div>
            <div className='text-3xl font-bold text-orange-500 mb-2'>500+</div>
            <div className='text-gray-400'>Hospitals</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-orange-500 mb-2'>50k+</div>
            <div className='text-gray-400'>Active Users</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-orange-500 mb-2'>100k+</div>
            <div className='text-gray-400'>Appointments</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-orange-500 mb-2'>24/7</div>
            <div className='text-gray-400'>Support</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className='mt-20 text-center'
        >
          <div className='max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-orange-500/10 to-gray-900/50 border border-orange-500/20'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-50 mb-4'>
              Ready to Take Control of Your Healthcare?
            </h2>
            <p className='text-gray-400 mb-6'>
              Join thousands of users who are already managing their healthcare
              journey with Plexcare.
            </p>
            <Button
              asChild
              size='lg'
              className='bg-orange-500 text-white hover:bg-orange-600'
            >
              <Link href='/signup'>Create Free Account</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
