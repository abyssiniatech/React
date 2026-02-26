
const Jsx = () => {
  return (
    <div className="min-h-screen 
      bg-gray-100">
      {/* header or nav section in react typescript tailwind css */}
        <header className='bg-gray-800 text-white p-4'>
            <nav className='bg-gray-800 text-white p-4'>
                <ul className='flex space-x-4'>
                    <li><a href="#" className='hover:text-gray-400'>Home</a></li>
                    <li><a href="#" className='hover:text-gray-400'>About</a></li>
                    <li><a href="#" className='hover:text-gray-400'>Services</a></li>
                    <li><a href="#" className='hover:text-gray-400'>Contact</a></li>
                </ul>
            </nav>
        </header>
        {/* hero section */}
        <section className='bg-blue-500 text-white p-8 text-center '>
            <h1 className='text-4xl font-bold mb-4'>Welcome to My Website</h1>
            <p className='text-lg'>This is a simple hero section created with React, TypeScript, and Tailwind CSS.</p>
        </section>
     {/* body section */}
        
        
        <section className='p-4 space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-500 text-white p-2 '>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vel dolorem quae praesentium aut numquam ipsam quia optio harum corporis maiores ea non officiis officia perspiciatis libero consectetur nobis dolore?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laudantium earum cum veritatis reiciendis voluptatibus fuga? Nemo, id? Magnam laudantium quis neque omnis nemo veritatis eos doloribus incidunt obcaecati quo.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat et aperiam aut excepturi voluptates vero quas. Non necessitatibus, quos illum accusantium quo quod sint quisquam molestiae placeat explicabo laudantium ut.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea ab perspiciatis rerum illum cum nisi veritatis cumque. Sequi doloribus, quibusdam corporis voluptatem nobis illum. Iste pariatur aperiam quod. Quod.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, veniam quidem. Repellat, eius repudiandae deserunt unde pariatur rem nulla facere ab ad, dolor voluptate ducimus. Ab maiores sapiente sunt! Dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae repellendus dignissimos expedita dolor ipsa, libero necessitatibus dolorem maiores consectetur omnis cum nulla nam, tempore ducimus quaerat mollitia minus inventore.</p>
        </section>
       {/* footer section */}

        <footer className='bg-gray-800 text-white p-4 mt-4 text-center'>
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Jsx
