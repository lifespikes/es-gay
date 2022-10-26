import {ReactNode} from 'react';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <main className="bg-stone-900 text-slate-50 min-h-screen flex place-items-center justify-center">
      <div className="w-full flex justify-center flex-col text-center max-w-4xl px-6">
        {children}
      </div>
    </main>
  );
}
