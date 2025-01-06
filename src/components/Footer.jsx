import React from 'react'

function Footer() {
  return (
    <footer className="border-t-2 ">
      <div className="flex flex-col md:flex-row justify-around my-10 md:px-60 text-center md:text-start gap-8">
        <div>
          <h1 className="text-[#1E1E1E] text-[20px] font-bold">About</h1>
          <p className="text-[#5E5E5E]">About MyFeedback</p>
          <p className="text-[#5E5E5E]">Investor Relations</p>
          <p className="text-[#5E5E5E]">Trust & Safety</p>
          <p className="text-[#5E5E5E]">Content Guidelines</p>
          <p className="text-[#5E5E5E]">Terms of Service</p>
          <p className="text-[#5E5E5E]">Privacy Policy</p>
          <p className="text-[#5E5E5E]">Your Privacy Choices</p>
        </div>
        <div>
          <h1 className="text-[#1E1E1E] text-[20px] font-bold">MyFeedback</h1>
          <p className="text-[#5E5E5E]">MyFeedback for business</p>
          <p className="text-[#5E5E5E]">Collections</p>
          <p className="text-[#5E5E5E]">Talk</p>
          <p className="text-[#5E5E5E]">Events</p>
          <p className="text-[#5E5E5E]">MyFeedback blog</p>
          <p className="text-[#5E5E5E]">Support</p>
          <p className="text-[#5E5E5E]">Developers</p>
        </div>
        <div>
          <h1 className="text-[#1E1E1E] text-[20px] font-bold">Languages</h1>
          <select className='outline-none'>
            <option className="text-[#5E5E5E] border-none">English</option>
            <option className="text-[#5E5E5E] border-none">Bangla</option>
          </select>
          <h1 className="text-[#1E1E1E] text-[20px] font-bold mt-8">Countries</h1>
          <select className='outline-none'>
            <option className="text-[#5E5E5E] border-none">Japan</option>
            <option className="text-[#5E5E5E] border-none">UK</option>
          </select>
        </div>
      </div>

      <p className="font-roboto font-semibold text-sm leading-4 text-EerieBlack1E text-center  py-4  md:px-3">
        Copyright &copy; Septembre 2023 myfeedback, designed by scott
      </p>
    </footer>
  );
}

export default Footer