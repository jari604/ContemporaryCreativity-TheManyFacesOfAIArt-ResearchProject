'use server';

// import type { IExample } from 'app/server/example/interfaces';
import { getExample } from 'app/server/example/service';

export async function getExampleData() {
  const data = await getExample(); // <- this is where you would call your service

  return data;
}
