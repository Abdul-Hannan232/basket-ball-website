import React, { Suspense } from 'react';
import ResetPasswordComponent from "../../component/auth-component/ResetPassword";


const Password =() =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
export default Password