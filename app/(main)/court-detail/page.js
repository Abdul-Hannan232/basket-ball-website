import React, { Suspense } from 'react';
import CourtDetail from "../../component/CourtDetail"
import Loader from "../../component/LoadingBall"
export default function UserDetails (){
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <CourtDetail />
    </Suspense>
  );
}
