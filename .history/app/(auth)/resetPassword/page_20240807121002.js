"use client"
import React, { Suspense } from 'react';
import { ResetPasswordComponent} from "../../component/resetPassword.js";


const Password =() =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
export D Password