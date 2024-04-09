import Image from 'next/image';
import MIC_ACTIVE from '@/public/microphone_active.svg';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export default function RecordingSection() {
  return (
    <section className='flex h-screen flex-col w-full items-center justify-center'>
      <div className='w-full bg-red-500'>
        <div className='m-auto w-1/4 rounded-md border bg-gray-900 p-4 text-white space-y-1'>
          <p className='text-sm font-medium leading-none'>
            Click the button to start recording...
          </p>
        </div>
      </div>
      <div className='flex w-full items-center bg-gray-600'>
        <button className='justifiy-center m-auto mt-10 flex items-center bg-black text-white hover:bg-green-950'>
          <Image
            src={MIC_ACTIVE}
            alt='Microphone_Active'
            width={36}
            height={36}
          />
        </button>
      </div>
    </section>
  );
}
