import React, { Suspense } from "react";
import Court from "../../component/Court"
import Loader from "../../component/LoadingBall";
const page = () => { 
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Court/>
      </Suspense>
    </div>
  )
}

export default page
