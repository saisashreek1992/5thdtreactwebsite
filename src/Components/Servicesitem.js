import React from "react";
import logo from "../logo.svg";
import  ServiceLists from "./data"
const Servicesitem = () => {
 
return (
    <>
{

    ServiceLists.map((data)=>( 


      
          
        <div className="row justify-content-around px-5 my-5 ">

        <div className="col-lg-3 col-sm-12  px-5 my-5 ">
          <img src={logo} className="card-img-top team-img " alt="logo" />
        </div>
  
  
        <div className="col-lg-9  col-sm-12   px-5 my-5 ">
          <font className="service_item_head">{data.serviceTitle}</font>
          <p className="service_item_para">
          {data.serviceInfo}
          </p>
          <div className="row justify-content-around px-5 my-5 ">
            <div className="col-lg-5  ">
              <img src={logo} className="card-img-top team-img  " alt="" />
            </div>
        
          </div>
        </div>
      </div>
       
   )) 

}  </>
);
  



};

export default Servicesitem;
