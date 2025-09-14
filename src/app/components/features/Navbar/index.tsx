import Link from 'next/link';
import Image from 'next/image';
import MenuClosed from '@/app/assets/icons/MenuClosed';
import MenuOpened from '@/app/assets/icons/MenuOpened';
import { getUserSession } from '@/lib/session';
import ButtonLogout from '@/app/components/features/ButtonLogout';

export default async function Navbar() {
  const user = await getUserSession();

  return (
    <nav className="bg-gray-800 border-b h-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuClosed />
              <MenuOpened />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center text-white font-bold">
              Share My Stuff
            </div>
          </div>

          {user ? (
            <div className="ml-3 relative flex items-center gap-4">
              <div className="text-white">{user.name}</div>
              <Image
                src={user.image || '/vercel.svg'}
                alt={user.name || 'User Avatar'}
                width={40}
                height={40}
                className="rounded-full"
              />
              <ButtonLogout />
            </div>
          ) : (
            <div className="ml-3 relative">
              <Link className="text-white" href="/">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
