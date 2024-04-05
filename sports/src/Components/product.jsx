// import React from 'react';
// import ProductData from './productData';

// const Product = () => {
//   return (
//     <div className="container">
//       {ProductData.map((curElm, index) => (
//         <div key={index} className="box card">
//           <div className="contact card-body">
//             <div className="img-box mr-3">
//               <img src={curElm.img} alt={curElm.Title} className="img-fluid" />
//             </div>
//             <div className="detail">
//               <div className="info">
//                 <h3 className="card-title">{curElm.Title}</h3>
//                 <p className="card-text">{curElm.Date}</p>
//               </div>
//               <button className="btn btn-primary">View</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;


// import React from 'react';
// import ProductData from './productData';
// import  { useState } from 'react';
// import './pro.css'
// import { FaMapLocationDot } from "react-icons/fa6";


// const Product = () => {
//     const [detail,setDetail]=useState([]);
//     const detailPage=(Product)=>
//     {
//         setDetail([{...Product}])
//     }
//   return (
//     <>
//     <div className="detail_container">
//       <div className="detail_content">
//         {

        
//         detail.map((x)  => {
//           return (
//             <>
//             <div className="detail_info">
//               <div className="img-box">
//                 <img src={x.img} alt={x.Title}></img>
//               </div>
//               <div className="product_detail">
//                 <h2>{x.Title}</h2>
//                 <h3>{x.Date}</h3>
//                 <button> <FaMapLocationDot /> Location </button>
//                 <p>{x.des}</p>
                
//               </div>
//             </div>
//             </>
//           )
//         })
//       }
//       </div>
//     </div>
//     <div className="container">
//       <div className="row">
//         {ProductData.map((curElm, index) => (
//           <div key={index} className="col-md-4">
//             <div className="card mb-3">
//               <img src={curElm.img} alt={curElm.Title} className="card-img-top" />
//               <div className="card-body">
//                 <h5 className="card-title">{curElm.Title}</h5>
//                 <div className='d-flex flex-row'>
//                 <p className="card-text">{curElm.Date}</p>
//                 <p className="card-text">{curElm.location}</p>
                
//                 </div>
//                 <button className="btn btn-danger" onClick={()=> detailPage(curElm)}>View</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Product;


import React, { useState } from 'react';
import ProductData from './productData';
import { FaMapLocationDot } from "react-icons/fa6";

const Product = () => {
  const [detail, setDetail] = useState(null);

  const detailPage = (product) => {
    setDetail(product);
  };

  const closeModal = () => {
    setDetail(null);
  };

  const openGoogleMaps = (location) => {
    window.open(location, '_self');
  };

  return (
    <>
      <br />
      <h2>LOCATION BASED SEARCH</h2>
      <br />
      {detail && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{detail.Title}</h5>
              </div>
              <div className="modal-body">
                <img src={detail.img} alt={detail.Title} className="product-image img-fluid mb-3" />
                <p>{detail.Date}</p>
                <p>{detail.des}</p>
              </div>
              <div className="modal-footer justify-content-between">
                <button className="location-btn btn btn-primary d-flex align-items-center mb-3" onClick={() => openGoogleMaps(detail.location)}>
                  <FaMapLocationDot className="location-icon mr-1" />
                  {' '} &nbsp; Location
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {ProductData.map((curElm, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img src={curElm.img} alt={curElm.Title} className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{curElm.Title}</h5>
                  <div className='d-flex flex-row'>
                    <p className="card-text">{curElm.Date}</p>
                    {/* Hide location text when detail is open */}
                    {/* {detail === null && <p className="card-text">{curElm.location}</p>} */}
                  </div>
                  <button className="btn btn-danger" onClick={() => detailPage(curElm)}>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {detail && <div className="modal-backdrop custom-backdrop fade show"></div>}
    </>
  );
};

export default Product;



















