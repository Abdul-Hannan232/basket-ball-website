"use client"
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ResetPasswordComponent} from "../../component/resetPassword.js";


const Page=() {
  const [searchParams] = useSearchParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
