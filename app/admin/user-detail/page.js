import React, { Suspense } from 'react';
import UserDetail from "../../component/admin/userdetail"

export default function UserDetails (){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserDetail />
    </Suspense>
  );
}
