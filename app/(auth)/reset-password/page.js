import React, { Suspense } from 'react';
import ResetPasswordComponent from "../../component/ResetPassword.js";


const Password =() =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
export default Password