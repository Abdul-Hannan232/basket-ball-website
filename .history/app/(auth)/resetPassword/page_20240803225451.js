import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
impor
const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  // Your component logic
  return <div>Reset Password Component</div>;
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
