import { useState } from "react";
import image from '../assets/image.png'

export default function Hero() {
  return (
    <>
      <main>
        <div className="container">
            <div className="grid grid-cols-2">
               {/* Text */}
                <div>
                    <p>Hero</p>
                </div>
                {/* image */}
                <div>
                    <p>Image</p>
                    <img src={image} alt="...." />
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
