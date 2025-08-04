import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>Welcome to the home page!</p>
      <Link href="/dashboard">
        <Button>Create Bug</Button>
      </Link>
    </>
  );
}
