import React from 'react'
import './Common.css';


const Common = (props) => {
  return (
    <section className='d-flex align-items-center' id="header">
      <div className='container-fluid nav-bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='text col-md-4 my-5  pt-lg-0 order-2 order-1'>
                <div className='circle'></div>
                <div className='circle1'></div>
                <div className='text-box'>

                  <p className='mt-5'> Unique <span className="d">Design</span> and  <span className="d">Development</span> </p>

                  <h1 className=' title' >{props.name}</h1>
                  <p className='my-3'>We are a team of world renouned experts who collectively work together to bring the best out for your brand. </p>
                  <div className='mt-3'>
                    <div className="buttonIn">
                      <input type="text" id="enter" placeholder='Enter Your Email Adress:' />
                      <button id="clear">Send Now</button>
                    </div>


                  </div>

                </div>


              </div>


              <div className='col-md-5  pt-lg-0 order-2 order-1 header-img ms-5'>
                <img src={props.imgsrc} className="img-fluid-animated" alt="home img" style={{ height: '620px', width: '800px' }}></img>

              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
export default Common;