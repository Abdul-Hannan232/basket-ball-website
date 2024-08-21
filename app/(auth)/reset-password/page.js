import React, { Suspense } from 'react';
import ResetPasswordComponent from "../../component/ResetPassword.js";


export default function ResetPassword (){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
