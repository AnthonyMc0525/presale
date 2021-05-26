import React from 'react';
import '../main';

export function Part() {
  return(
    <div className="relative bg-custom-yellow inline-block border-solid border-2 border-black rounded-3xl h-1/2 w-1/2 left-1/5 top-2/3">
      <h2 className="relative text-5xl left-1/3 mb-2 ">Participation</h2>
      <span className="countdown-label relative left-1/2">Count-down: <span id="countdown">10:59:31</span></span>
      <div className="absolute inline-block h-1/4 w-2/3 bg-gradient-to-r from-custom-creme to-custome-yellow border-solid border-2 border-black rounded-3xl top-1/3">
        <div className="absolute top-1/3 left-32 inline-block h-4 w-2/3 bg-gray-200 border-solid border-2 border-black rounded-3xl">
          <div className="relative bottom-1.5 inline-block h-full w-3/4 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl"></div>
        </div>
      </div>
    </div>
  )
}
