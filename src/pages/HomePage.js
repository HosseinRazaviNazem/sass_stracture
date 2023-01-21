import React from 'react';

import {Header, Slider, Portfolio, Footer, MyBtn} from "../components/index"



function HomePage(props) {
    return (

      <div className="container">
       <Header/>
          {/*<Slider/>*/}
          <div className="homeSlider" style={{ display:"flex", width:"100%"  ,justifyContent:"center" }}>
              <img src="https://vornaco.com/wp-content/uploads/2022/09/slider11.jpg"/>
          </div>

      <div className="portfolios-section">
          <h2 className="hr-lines"> محصولات و خدمات آساک </h2>
          <div className="portfolios">
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
          </div>
      </div>
          <div className="portfolios-section">
              <h2 className="hr-lines"> عضو خانواده آساک شوید  </h2>
              <div className="portfolios">
                  <div className="membership"></div>
                    <p> جهت دریافت مشاوره و استفاده از محولات و خدمات آساک فرم درخواست را تکمیل نمایید </p>
                  <MyBtn title="فرم درخواست" type="primary" bRadius="10"/>


              </div>


          </div>
          <div className="portfolios-section">
              <h2 className="hr-lines"> با آساک با اطمینان  قدم بردارید   </h2>
              <div className="portfolios">
                    <div className="etemad">
                        <p>  دلیل اعتماد شما به اساک چندین سال تجربه و کار حرفه ای است با خیال راحت همراه همیشگی آساک خواهد شد مطمنیم</p>
                    </div>
              </div>


          </div>

<Footer/>
      </div>


    );
}

export default HomePage;