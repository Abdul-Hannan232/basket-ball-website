import React, { Suspense } from 'react';
import UserDetail from "../../component/admin/userdetail"
import Loader from "../../component/LoadingBall"
export default function UserDetails (){
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <UserDetail />
    </Suspense>
  );
}
