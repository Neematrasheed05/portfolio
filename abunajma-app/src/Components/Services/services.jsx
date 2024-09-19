import React from 'react';
import img from "../../Assets/outdoor.png";

const Services = () => {
    return (
       
        <div className="container mx-auto bg-white p-4 lg:p-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">
          <div className="flex items-center text-blue-500">
            <p className="text-sm font-bold uppercase">Feature 1 & Feature 2</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-800">SCHOOL PROGRAMS</h2>
          <p className="mt-4 text-lg text-slate-600">
          At "Abu Najma with Kids Program," our commitment extends beyond the television screen. 
          We proudly offer a comprehensive range of services to enrich the lives of young minds in diverse and meaningful ways. Schools that officially book with us gain access to a tailored educational experience at a nominal fee. On specific days, our team visits these schools, delivering engaging and interactive sessions that go beyond conventional teaching methods. As we carry the esteemed Horizon TV, our program serves as a unique advertising platform, allowing institutions to reach a wide audience  </p>
          <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
          <img src={img} />

          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-pink-50 p-4 lg:p-12">
      <div className="flex items-center text-pink-500">
        <p className="text-sm font-bold uppercase">Feature 3 & Feature 4</p>

        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <h2 className="mt-4 text-3xl font-semibold text-slate-800">This is an Amazing Feature</h2>

      <p className="mt-4 text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
      
      </div>
    </div>

    <div className="overflow-hidden rounded-2xl bg-green-50 p-4 lg:p-12">
      <div className="flex items-center text-pink-500">
        <p className="text-sm font-bold uppercase">Feature 3 & Feature 4</p>

        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <h2 className="mt-4 text-3xl font-semibold text-slate-800">This is an Amazing Feature</h2>

      <p className="mt-4 text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
      
      </div>
    </div>
   

    <div className="overflow-hidden rounded-2xl  bg-purple-50  p-4 lg:p-12">
      <div className="flex items-center text-pink-500">
        <p className="text-sm font-bold uppercase">Feature 3 & Feature 4</p>

        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <h2 className="mt-4 text-3xl font-semibold text-slate-800">This is an Amazing Feature</h2>

      <p className="mt-4 text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
      
      </div>
    </div>
      </div>
    </div>
    );
}

export default Services;

