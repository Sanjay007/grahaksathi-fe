import React from 'react'
import Signup from '../../pages/Signup'

export default function Small_loan() {
    return (
        <div>
            <div class="container">
                <div class="row refer-dash">
                    <div class="col-md-5">
                        <h3 class="text-dark ">Small Loan </h3>
                    </div>
                    <div class="col-md-7 page-titles">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="Services.js">Home</a></li>
                            <li class="breadcrumb-item active">Small Loan</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="col-lg-12 col-md-12 mb-4">
                    <div class="card ">
                        <div class="card-body" data-toggle="" data-target="#">
                            <div class="row">
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src={require("../../asset/img/freecharge-small-loan.png")} class="img-logo " style={{ height: '50px', width: '100px' }} />
                                        </div>
                                    </div>
                                    <button class="btn btn-secondary mt-4">Earn Upto 250/-</button>
                                </div>
                                <div class="col-6 text-dark">
                                    <h2>Freecharge Pay Later</h2>
                                    <h6>Spends now, Pay Later with Freecharge Pay Later</h6>
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-secondary mt-4"> Share Now</button>
                                    <a href="/Login" class="btn btn-secondary mt-3 share-btn"> Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="col-lg-12 col-md-12 mb-4">
                    <div class="card ">
                        <div class="card-body" data-toggle="" data-target="#">
                            <div class="row">
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src={require("../../asset/img/money-tap-small-loan.png")} class="img-logo " style={{ height: '50px', width: '100px' }} />
                                        </div>
                                    </div>
                                    <button class="btn btn-secondary mt-4">Earn Upto 600/-</button>
                                </div>
                                <div class="col-6 text-dark">
                                    <h2>Money Tap</h2>
                                    <h6>Get Instant Personal Loan on just one tap</h6>
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-secondary mt-4"> Share Now</button>
                                    <a href="/Login" class="btn btn-secondary mt-3 share-btn"> Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
