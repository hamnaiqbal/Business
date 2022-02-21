import React from 'react'
import Card from '../Card/Card';
import data from '../SampleData/data';

const Services = (props) => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>

      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {data.map((val,index,key)=>{
                return <Card imgsrc={val.imgsrc} title={val.title} />
              })}
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
export default Services; 
