import React from 'react';

import {Header, Slider, Portfolio, Footer, MyBtn, Search} from "../components/index"



function HomePage(props) {
    return (

      <div className="container">
       <Header/>
          <div className="homeSlider" style={{ display:"flex", width:"100%"  ,justifyContent:"center" }}>
          <Slider/>
          </div>

      <div className="portfolios-section">
          <h2 className="hr-lines"> محصولات و خدمات آساک </h2>
          <div className="portfolios">
              <div className="cover">
                  <Portfolio btnTitle="بیشتر بدانید" mainTitle="راهکار های مالیاتی"/>
                  <Portfolio btnTitle="بیشتر بدانید" mainTitle="راهکار های مالیاتی"/>
                  <Portfolio btnTitle="بیشتر بدانید" mainTitle="راهکار های مالیاتی"/>
                  <Portfolio btnTitle="بیشتر بدانید" mainTitle="راهکار های مالیاتی"/>

              </div>

          </div>
      </div>
          <div className="portfolios-section">
              <h2 className="hr-lines"> عضو خانواده آساک شوید  </h2>
              <div className="portfolios">
                  <div className="membership"></div>
                    <p className="text"> جهت دریافت مشاوره و استفاده از محولات و خدمات آساک فرم درخواست را تکمیل نمایید </p>
                  <MyBtn title="فرم درخواست" type="primary" bRadius="10"/>


              </div>


          </div>
          <div className="portfolios-section">
              <h2 className="hr-lines"> با آساک با اطمینان  قدم بردارید   </h2>
              <div className="portfolios">
                    <div className="text">
                        <p>  دلیل اعتماد شما به اساک چندین سال تجربه و کار حرفه ای است با خیال راحت همراه همیشگی آساک خواهد شد مطمنیم</p>
                    </div>
              </div>
              <div id="search" className="search">
             <Search/>
              </div>


          </div>

<Footer/>
      </div>


    );
}

export default HomePage;