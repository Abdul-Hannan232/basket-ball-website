import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ResetPasswordApi } from "../../component/";
const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  return <div>Reset Password Component</div>;
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
