'use client';

import { TextInput } from '@layouts/components/';
import { Search } from '@layouts/icons/Search';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const WeatherSearchForm = () => {
  const router = useRouter();
  const [city, setCity] = useState<string>();
  return (
    <form
      aria-label="weather-search-form"
      onSubmit={e => {
        e.preventDefault();
        router.push(`/weather/?city=${city}`);
      }}
    >
      <TextInput
        name="weather"
        submitIcon={<Search />}
        onChange={e => {
          setCity(e.currentTarget.value.toLowerCase());
        }}
        placeholder="Example seoul, tokyo.."
      />
    </form>
  );
};
