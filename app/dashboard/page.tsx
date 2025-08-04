// app/dashboard/page.tsx
'use client';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, Bug, Settings, Menu, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mockBugs } from '@/data/mockBug';

const navItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: <Home className="w-4 h-4 mr-2" />,
  },
  { href: '/bugs', label: 'All Bugs', icon: <Bug className="w-4 h-4 mr-2" /> },
  {
    href: '/my-bugs',
    label: 'My Bugs',
    icon: <Bug className="w-4 h-4 mr-2" />,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <Settings className="w-4 h-4 mr-2" />,
  },
];

export default function DashboardPage() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - visible on desktop */}
      <aside className="hidden md:flex flex-col justify-between w-[240px] p-4 border-r bg-muted">
        <nav className="space-y-2 mt-4">
          <div className="mb-8">
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              <Link href="/bugs/create" className="flex items-center gap-2">
                Create Bug
              </Link>
            </Button>
          </div>
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center p-2 rounded-md text-sm font-medium hover:bg-accent ${
                pathname === href
                  ? 'bg-accent text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 mt-6">
          <Avatar>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>ND</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Natnael</span>
        </div>
      </aside>

      {/* Mobile sidebar using Sheet */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <SheetHeader className="px-4 pt-4">
              <SheetTitle className="text-base">Menu</SheetTitle>
            </SheetHeader>
            <aside className="flex h-[calc(100%-3rem)] flex-col justify-between w-full p-4 pt-2">
              {/* nav and avatar go here */}
            </aside>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to BugNet</h1>
        <p>You can only access this page if you are logged in.</p>
        <div className="max-w-[1300px] mx-auto border-b border-slate-200 py-4 px-2 mb-4" />

        {mockBugs.map((bug) => {
          return (
            <div key={bug.id} className="bg-white rounded-lg shadow p-4 mb-4">
              <h2 className="text-xl font-semibold">{bug.title}</h2>
              <div className="mt-2">
                {bug.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 mr-2 rounded-full "
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {bug.description}
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
}
