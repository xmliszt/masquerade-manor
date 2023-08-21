import { RoomTable } from '@/components/custom/RoomTable';
import { ThemeToggle } from '@/components/custom/ThemeToggle';

export default function Home() {
  return (
    <main className='relative w-full h-screen flex justify-center items-center'>
      <div className='absolute top-4 right-2'>
        <ThemeToggle />
      </div>
      <div className='w-4/5 h-3/5'>
        <RoomTable />
      </div>
    </main>
  );
}
