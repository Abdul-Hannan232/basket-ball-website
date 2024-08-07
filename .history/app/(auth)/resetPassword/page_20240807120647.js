"use "
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ResetPasswordComponent} from "../../component/resetPassword.js";


export default function Page() {
  const [searchParams] = useSearchParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
