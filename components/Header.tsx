import { BrainIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className='flex gap-1 items-center'>
      <BrainIcon color='red' size={40} data-testid='brain-icon' />
      <div>
        <h1 className='text-lg md:text-2xl'>Personality Test</h1>
        <p>By Dobeen Kim and Michelle</p>
      </div>
    </header>
  )
}

export default Header;