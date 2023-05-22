import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import image from '../Images/image.png'
import Collectioncard from './Collectioncard';

const Content = () => {
  return (
    <div className="container-fluid pt-5 bg-white">
      <div className="row">
        <div className="col-md-7 pt-4">
          <div className="card position-relative">
            <div className="card-body">
              <div>
              <h5 className="card-title text-warning pt-3">Create MetroVerse Genesis</h5>
              <p className="card-text text-lead pt-3">physical claim for issue #1 now live. please check that the token is available for claim via website</p>
              <button className="btn btn-outline-warning button">Explore Now</button>
              </div>
              
              <div className="table-responsive w-50 pt-3">
                <table className="table table-bordered tbln table-sm border-warning ">
                  <thead>
                    <tr>
                      <th className="vertical-line">24.8K </th>
                      <th className="vertical-line">4.1K</th>
                      <th className="vertical-line">0.221</th>
                      <th>43.1K</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="vertical-line">Items</td>
                      <td className="vertical-line">Owners</td>
                      <td className="vertical-line">Floor Rice</td>
                      <td>Volume traded</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <img src={image} alt="Superposée" className=" imgtwo img-fluid" style={{ zIndex: '1' }} />
          </div>
        </div>
        <div className="col-md-5">
          <p>New NFT's</p>
          <Collectioncard />
          <Collectioncard />
          <Collectioncard />
        </div>
      </div>
    </div>
  );
};

export default Content;
