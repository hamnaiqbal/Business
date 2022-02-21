import React from 'react'

export default function Contact() {
  return (
    <div className='my-5'>
      <h1 className='text-center'> Contact Us</h1>
      <div className='container contact-div'>
        <div className='row'>
          <div className=' col-md -6 col-10 mx-auto'>
            <form>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Enter Your Number</label>
                  <input type="Number" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Enter your Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
