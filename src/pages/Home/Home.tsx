import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    let images= [
        "https://scontent.fhmo6-1.fna.fbcdn.net/v/t39.30808-6/317070571_574966504632704_1883308511880263754_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=FCM86zo4OVEAX-m85-A&_nc_oc=AQmxAfl1HqeRDn-ojUQFjJgBbK0LbDS-NFxFTnqEmgcrT4orTPf912CxkWkeAWs4rBUmtGOAmVYni2BfShtzudLS&_nc_ht=scontent.fhmo6-1.fna&oh=00_AfCyIYg4cjyY6tJlW5ikY3shRtOYThyuxexB4E4ezgODYQ&oe=641D2DED",
        "https://www.fundacionjan.cl/wp-content/uploads/mision.png",
        "https://scontent.fhmo6-1.fna.fbcdn.net/v/t39.30808-6/277679096_5138954692831327_808247348657581400_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JPAw1Lh4aUsAX8ZTN0k&_nc_ht=scontent.fhmo6-1.fna&oh=00_AfA7rhhl35aeMHjm_JxtyhT61fM-SgsQJ_sY8DUz5rqHjw&oe=641D7F84"
    ]
  return (
    <div >
     <br />
       <header className="grid grid-cols-1 lg:grid-cols-7 justify-items-center justify-center text-center">
            <img src={images[0]} alt="" className='col-span-4 w-3/6'/>
            <article className='col-span-3'>
                <br /><br />
                <br /><br />
                
                <h1 className='text-3xl'>
                    Congreso Proxy
                </h1>
                <p className='text-3x1'>
                    
                   !Tu puerta de enlace al futuro¡
                   <br />
                   Congreso proxy te esta esperando has <Link to="/">Click aqui</Link> para registrate
                </p>
            </article>
            
       </header>
        <hr />
        <br />
        <hr />
        <div className="">
            <section className='grid grid-cols-1 lg:grid-cols-7'>
                <img src={images[1]} alt=""  className='col-span-2'/>
                <div className=" col-span-4">
                    <h2 className='text-3xl'>
                        Misión
                    </h2>
                    <p className='text-2xl text-justify'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum porro ratione aspernatur officia iure, ab similique perferendis perspiciatis, maxime alias atque voluptatem inventore tempora exercitationem magnam ea qui cumque id!
                    </p>
                </div>
                <img src={images[2]} alt=""  className='col-span-1 w-4/5'/>
            </section>
            <br />
            <section>
                <h2 className='text-3xl'>
                    Visión
                </h2>
                <p className='text-2xl text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum porro ratione aspernatur officia iure, ab similique perferendis perspiciatis, maxime alias atque voluptatem inventore tempora exercitationem magnam ea qui cumque id!
                </p>
            </section>
            <br />
            <section>
                <h2 className='text-3xl'>
                    Sobre nosotros
                </h2>
                <p className='text-2xl text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum porro ratione aspernatur officia iure, ab similique perferendis perspiciatis, maxime alias atque voluptatem inventore tempora exercitationem magnam ea qui cumque id!
                </p>
            </section>
        </div>
    </div>
  )
}

export default Home