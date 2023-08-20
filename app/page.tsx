import { ThemeToggle } from '@/components/custom/ThemeToggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='relative w-full h-screen flex justify-center items-center'>
      <Button>Masquerade Manor</Button>
      <div className='absolute top-4 right-2'>
        <ThemeToggle />
      </div>
    </main>
  );
}
