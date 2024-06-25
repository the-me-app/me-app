import { redirect } from 'next/navigation';

function Page() {
  redirect('/home');
  return null;
}

export default Page;
