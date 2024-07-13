import React from 'react'
import Signup from '../../pages/Signup'

export default function Demat_account() {
    return (
        <div>
            <div class="container">
                <div class="row refer-dash">
                    <div class="col-md-5">
                        <h3 class="text-dark ">Demat Account </h3>
                    </div>
                    <div class="col-md-7 page-titles">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Demat Account</li>
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
                                            <img src={require("../../asset/img/icici_direct.jpeg")} class="img-logo " style={{ height: '50px', width: '100px' }} />
                                        </div>
                                    </div>
                                    <button class="btn btn-secondary mt-4">Earn Upto 250/-</button>
                                </div>
                                <div class="col-6 text-dark">
                                    <h2>ICICI Direct</h2>
                                    <h6>ICICI direct is the one stop solution for all your financial needs</h6>
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
                                            <img src={require("../../asset/img/hdfc-demat.png")} class="img-logo " style={{ height: '50px', width: '100px' }} />
                                        </div>
                                    </div>
                                    <button class="btn btn-secondary mt-4">Earn Upto 250/-</button>
                                </div>
                                <div class="col-6 text-dark">
                                    <h2>HDFC Securities</h2>
                                    <h6>ALL-IN_1 Invesment Account</h6>
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
                                            <img src={require("../../asset/img/kotak_demat.png")} class="img-logo " style={{ height: '50px', width: '100px' }} />
                                        </div>
                                    </div>
                                    <button class="btn btn-secondary mt-4">Earn Upto 250/-</button>
                                </div>
                                <div class="col-6 text-dark">
                                    <h2>Kotak Securities</h2>
                                    <h6>Open a free trading account & pay Rs 0 on intraday trades</h6>
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
