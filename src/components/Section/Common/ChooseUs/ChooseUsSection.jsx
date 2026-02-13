"use client"

import Link from "next/link";

const ChooseUsSection = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <img src="/images/iconbox/icon8.png" alt="" />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Precision</h4>
                <p>From Tier-1 Data Center commissioning to exact fiber optic splicing, we deliver technical precision that meets the rigorous standards of global telecom giants.</p>
                {/* <Link className="tekup-iconbox-btn" href="single-service">Learn More <i className="ri-arrow-right-up-line"></i></Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <img src="/images/iconbox/icon9.png" alt="" />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Intelligence</h4>
                <p>We transform raw data into a competitive edge. By applying AI to SKU rationalization and sales data, we turn complex information into actionable business growth.</p>
                {/* <Link className="tekup-iconbox-btn" href="single-service">Learn More <i className="ri-arrow-right-up-line"></i></Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <img src="/images/iconbox/icon10.png" alt="" />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Resilience</h4>
                <p>We provide the 'Physical Layer' of reliability—industrial power backups, SFPs, and core processing hardware designed to keep your infrastructure online 24/7.</p>
                {/* <Link className="tekup-iconbox-btn" href="single-service">Learn More <i className="ri-arrow-right-up-line"></i></Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <img src="/images/iconbox/icon8.png" alt="" />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Scalability</h4>
                <p>We modernize logistics and warehousing. From barcode scanning upgrades to AI-powered supply chain optimization, we empower structures to handle tomorrow volume.</p>
                {/* <Link className="tekup-iconbox-btn" href="single-service">Learn More <i className="ri-arrow-right-up-line"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;