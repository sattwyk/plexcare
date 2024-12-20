import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className='border-t border-gray-800 bg-gray-950/50'>
      <div className='mx-auto container py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Link href='/' className='text-xl font-bold text-orange-500'>
              Plexcare
            </Link>
            <p className='text-sm text-gray-400'>
              Your trusted healthcare management platform. Access medical
              records, find hospitals, and manage appointments seamlessly.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-100 mb-3'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/hospitals'
                  className='text-sm text-gray-400 hover:text-orange-500'
                >
                  Find Hospitals
                </Link>
              </li>
              <li>
                <Link
                  href='/appointments'
                  className='text-sm text-gray-400 hover:text-orange-500'
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href='/records'
                  className='text-sm text-gray-400 hover:text-orange-500'
                >
                  Medical Records
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-gray-100 mb-3'>Support</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/help'
                  className='text-sm text-gray-400 hover:text-orange-500'
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-sm text-gray-400 hover:text-orange-500'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-sm text-gray-400 hover:text-orange-500'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-gray-100 mb-3'>Connect</h3>
            <div className='flex space-x-4'>
              <Link href='#' className='text-gray-400 hover:text-orange-500'>
                <Facebook className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link href='#' className='text-gray-400 hover:text-orange-500'>
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link href='#' className='text-gray-400 hover:text-orange-500'>
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-800'>
          <p className='text-center text-sm text-gray-400'>
            © {new Date().getFullYear()} Plexcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
