import {FormEventHandler, useState} from 'react';
import Layout from './Layout';

export default function Home() {
  const [name, setName] = useState('');
  const nameIsValid = name.length === 0 ? true : [...(name ?? '').matchAll(/([A-z]{0,12})/gm)].length === 2;
  const allowSubmit = nameIsValid && name.length > 0;

  const onSubmitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const subject = (new FormData(e.currentTarget)).get('name');
    document.location.href = `https://${subject}.es.gay`;
  };

  return (
    <Layout>
        <h1 className="text-6xl font-bold">
          Descubre más, <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">hoy.</span>
        </h1>
        <h3 className="pt-4 text-xl text-center text-slate-400">La respuesta esta a la distancia de un click.</h3>

        <form onSubmit={onSubmitForm} className="flex mt-12 gap-5 mb-3">
          <input onChange={e => setName(e.target.value)} placeholder="Enter a name, any name." name="name" className="block w-full px-3 rounded-md border-gray-300 py-3 text-base placeholder-gray-500 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1" />
          <button disabled={!allowSubmit} className={`mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center ${!allowSubmit ? 'bg-gray-900 text-gray-500' : ''}`}>
            Continue
          </button>
        </form>
        {!nameIsValid ? (<span className="text-sm text-red-500 text-left h-0">Usa solo letras, y no sobrepases el limite de 12 caracteres.</span>) : <span className="h-0">&nbsp;</span>}
    </Layout>
  );
};
