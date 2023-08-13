import React from 'react';


function Contact() {
  return (
    <div>
        { /* Header Section */}
        <div className='w-full h-[60vh]'>
        <img className='object-cover w-full h-full ' src="https://images.unsplash.com/photo-1603273904583-bf5d25d9efa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="/"/>
        <div className='max-w-[1140px] m-auto '>
            <div className='absolute top-[40%] w-full  md:-[50%] max-w-[600px] flex flex-col text-white p-4'>
                <h1><span className="pl-2 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]">Contact</span></h1>
                <p className='mt-2 p-4 text-2xl font-bold'>Need help? Contact our support team</p>
            </div>
        </div>
    </div>
        { /* Contact Form */}
        <div>
        <section className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      
      <form action="#" class="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@something.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-white">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea id="message" rows="6" class="block p-2 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-cente rounded-lg bg-white text-indigo-600 hover:scale-105 duration-300">Send message</button>
      </form>
  </div>
</section>
        </div>
        
    </div>
  )
}

export default Contact;