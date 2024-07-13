

import React from 'react';

export default function Settle_to_bank() {
  return (
    <div className="container-fluid  vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Settle to bank</h2>
                <form>
                <div  className="form-group" class="mb-2 " >
                    
                    <input type="name" className="form-control " id="email" placeholder="Enter bank Name" />
                  </div>
                  <div  className="form-group" class="mb-2" >
                    
                    <input type="password" className="form-control" id="password" placeholder="Mobile number" />
                  </div>

                  <div  className="form-group" class="mb-2" >
                    
                    <input type="password" className="form-control" id="password" placeholder="Mobile number" />
                  </div>
                  
                  <div className="form-group form-check" class="mb-2">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </form>
                <div className="text-center mt-3">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



