"use client"

import Link from "next/link";
import { Target, Brain, ShieldCheck, Maximize } from "lucide-react";

const ChooseUsSection = ({ className }) => {
  const iconColor = "#916935";
  const iconSize = 40;

  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          {/* Precision */}
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <Target color={iconColor} size={iconSize} strokeWidth={1.5} />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Precision</h4>
                <p>From Tier-1 Data Center commissioning to exact fiber optic splicing, we deliver technical precision that meets the rigorous standards of global telecom giants.</p>
              </div>
            </div>
          </div>

          {/* Intelligence */}
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <Brain color={iconColor} size={iconSize} strokeWidth={1.5} />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Intelligence</h4>
                <p>We transform raw data into a competitive edge. By applying AI to SKU rationalization and sales data, we turn complex information into actionable business growth.</p>
              </div>
            </div>
          </div>

          {/* Resilience */}
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <ShieldCheck color={iconColor} size={iconSize} strokeWidth={1.5} />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Resilience</h4>
                <p>We provide the 'Physical Layer' of reliability—industrial power backups, SFPs, and core processing hardware designed to keep your infrastructure online 24/7.</p>
              </div>
            </div>
          </div>

          {/* Scalability */}
          <div className="col-xl-3 col-md-6">
            <div className="tekup-iconbox-wrap4">
              <div className="tekup-iconbox-icon4">
                <Maximize color={iconColor} size={iconSize} strokeWidth={1.5} />
              </div>
              <div className="tekup-iconbox-data4">
                <h4>Scalability</h4>
                <p>We modernize logistics and warehousing. From barcode scanning upgrades to AI-powered supply chain optimization, we empower structures to handle tomorrow volume.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;