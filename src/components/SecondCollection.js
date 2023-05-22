import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import groupe from '../Images/Group17.png'
import groupe1 from '../Images/Group18.png'
import groupe2 from '../Images/Group19.png'
import groupe3 from '../Images/Group20.png'
import groupe4 from '../Images/Group21.png'
import groupe5 from '../Images/Group22.png'
import img1 from '../Images/Rectangle39.png'
import img2 from '../Images/Rectangle40.png'
import img3 from '../Images/Rectangle41.png'

function SecondCollection() {
  return (
    <div className='container-fluid bg-white pt-5'>
      <div className="row">
        <div className="col-md-7">
          <div className="d-flex justify-content-between">
            <p className='fs-4 text-lead'>Top Collections</p>
            <p className='fs-4 text-lead '>View All<i className='bi bi-arrow-right'></i></p>
          </div>
          
          <div className="row">
            <div className="col-md-4">
              <img src={groupe} alt="Image1" />
            </div>
            <div className="col-md-4">
              <img src={groupe1} alt="Image2" />
            </div>
            <div className="col-md-4">
              <img src={groupe2} alt="Image3" />
            </div>
          </div>
          <div className="row pt-2">
          <div className="d-flex justify-content-between">
            <p className='fs-4 text-lead'>Trending NFTs</p>
            <p className='fs-4 text-lead '>Marketplace <i className='bi bi-arrow-right'></i></p>
          </div>
            <div className="col-md-4">
              <img src={groupe3} alt="Image1" />
            </div>
            <div className="col-md-4">
              <img src={groupe4} alt="Image2" />
            </div>
            <div className="col-md-4">
              <img src={groupe5} alt="Image3" />
            </div>
          </div>
          
        </div>
        <div className="col-md-5 pt-5">
            <div className="card w-75">
                <div className="card-body d-flex justify-content-between">
                    <p>History</p>
                    <select>
                        <option value="Last Month">Last Month</option>
                    </select>
                </div>
                <div className='d-flex gap-5 pt-3'>
                    <div className="img">
                        <img src={img1} alt=""className='ms-3' />
                    </div>
                    <div className="tx d-flex gap-5">
                        <div>
                        <p>SolPunk Ape #981</p>
                        <p>Bored Ape Solana Club</p>
                        </div>
                        <div className='my-3'>
                            <span>
                                <i className='bi bi-heart'></i>
                                250
                            </span>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-5 pt-3'>
                    <div className="img">
                        <img src={img2} alt=""className='ms-3' />
                    </div>
                    <div className="tx d-flex gap-5">
                        <div>
                        <p>SolPunk Ape #981</p>
                        <p>Bored Ape Solana Club</p>
                        </div>
                        <div className='my-3'>
                            <span>
                                <i className='bi bi-heart'></i>
                                38
                            </span>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-5 pt-3'>
                    <div className="img">
                        <img src={img3} alt=""className='ms-3' />
                    </div>
                    <div className="tx d-flex gap-5">
                        <div>
                        <p>SolPunk Ape #981</p>
                        <p>Bored Ape Solana Club</p>
                        </div>
                        <div className='my-3'>
                            <span>
                                <i className='bi bi-heart'></i>
                                15
                            </span>
                        </div>
                    </div>
                </div>
                <button className='btn btn-warning bordered btn-sm text-white '>Show All</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SecondCollection;
