import React from 'react';
import image from '../Images/image.png'

function Collectioncard() {
  return (
    <div>
        <div className="card mt-2">
            <div className="card-body d-flex">
              <div>
                <img src={image} alt="img" width={150}/>
              </div>
              <div>
                <p className='text-lead'>Metroverse Genesis</p>
                <p className='fs-4'>Block #1460</p>
                <p className='text-lead'> Owned by <span className='text-warning'>BabyKee</span></p>
                <div className="d-flex justify-content-between">
                <p><i className='bi bi-heart'></i> 1K</p>
                <p><i className='bi bi-collection'></i> 1K</p>

                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Collectioncard