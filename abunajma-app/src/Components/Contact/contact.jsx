import React from "react";

function Contact(){
    return(
        <div className="py-12 relative overflow-hidden bg-white">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white py-12">
            <div className="max-w-screen-lg mx-auto">
              <h2 className="font-black text-sky-950 text-3xl mb-4">Contact Us</h2>
              <p className="text-base text-sky-950 mb-8">
                Have questions? Get in touch with us for more information.
              </p>
              <form className="grid grid-cols-1 gap-4">
                <input type="text" placeholder="Name" className="p-4 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded-lg" />
                <textarea placeholder="Message" className="p-4 border border-gray-300 rounded-lg h-32"></textarea>
                <button className="text-white uppercase py-3 text-base px-10 bg-sky-950 hover:bg-sky-900">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">ABUNAJMA WITH KIDS PROGRAM </h2>
              <p className="text-white text-sm">
                Whether you need Us to do a kids program In your schools or any other kids related programs we are here for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Contact;