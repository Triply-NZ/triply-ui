'use client';

import { useState } from 'react';

export default function TestComp() {
  const [city, setCity] = useState('');
  const [days, setDays] = useState('');
  const [advise, setAdvise] = useState('');
  const [isPending, setIsPending] = useState(false);
  const onSubmit = async () => {
    setIsPending(true);
    const resp = await fetch(`/api/advisor?city=${city}&days=${days}`);
    const results = await resp.json();
    setAdvise(JSON.stringify(results));
    setIsPending(false);
  };
  return (
    <>
      <div className='flex w-full justify-center items-center gap-4 m-4'>
        <input
          value={city}
          onChange={({ target }) => setCity(target.value)}
          className='border'
          placeholder='input city'
        />
        <input
          value={days}
          onChange={({ target }) => setDays(target.value)}
          className='border'
          placeholder='input days'
        />
        <button disabled={isPending} onClick={onSubmit}>
          {isPending ? 'Pending...' : 'Submit'}
        </button>
      </div>
      <div className='px-36'>{advise}</div>
    </>
  );
}
