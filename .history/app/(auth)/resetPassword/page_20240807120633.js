import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ResetPasswordComponent} from "../../component/resetPassword.js";
const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  return <div>Reset Password Component</div>;
};

export default function Page() {
  const [searchParams] = useSearchParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
