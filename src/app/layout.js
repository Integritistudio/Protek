"use client"
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/remixicon.css";
import "~/assets/css/fontawesome.css";
import "~/assets/css/main.css";
import "~/assets/css/app.css";
import "~/assets/css/app.min.css";
import "~/assets/css/animate.css";
import "~/assets/css/react-adjustment.css";
import "~/assets/css/aos.css";
import "~/assets/css/magnific-popup.css";
import React, { useEffect, useState } from "react";
import { Metadata } from "~/components/Section/Common/Metadata/Metadata";
import { usePathname } from "next/navigation";
import Loading from "~/components/Section/Common/Loading/Loading";
import FooterThreeSection from '~/components/Section/Common/FooterThree/FooterThreeSection';

const serviceTitleMap = {
  "data-center-telecom": "Data Center & Telecom",
  "logistics-supply-chain-ai-powered": "Logistics & Supply Chain (AI-Powered)",
  "beauty-ecommerce-incubation": "Beauty & E-Commerce Incubation",
};

const getPageTitle = (pathname) => {
  if (!pathname) return "Protek";

  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (normalizedPath === "/") return "Protek";
  if (normalizedPath === "/about-us") return "Protek About";
  if (normalizedPath === "/contact-us") return "Protek Contact";
  if (normalizedPath === "/service") return "Protek Services";

  if (normalizedPath.startsWith("/service/")) {
    const serviceSlug = normalizedPath.split("/")[2];
    const serviceLabel = serviceTitleMap[serviceSlug];
    if (serviceLabel) {
      return `Protek Service | ${serviceLabel}`;
    }
    return "Protek Service";
  }

  return "Protek";
};




export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Adjust the loading duration as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <html lang="en">
           <head>
        <title>{pageTitle}</title>
        <meta name="description" content={Metadata.description} />
        {/* Other Metadata properties */}
        {Metadata.icons && (
          <React.Fragment>
            {Metadata.icons.icon.map((icon, index) => (
              <link key={index} rel="icon" href={icon} />
            ))}
            {Metadata.icons.apple && Metadata.icons.apple.map((appleIcon, index) => (
              <link key={index} rel="apple-touch-icon" href={appleIcon} />
            ))}
            {Metadata.icons.shortcut && Metadata.icons.shortcut.map((shortcutIcon, index) => (
              <link key={index} rel="shortcut icon" href={shortcutIcon} />
            ))}
          </React.Fragment>
        )}
      </head>
      <body >   <Loading isLoading={isLoading} />
        {!isLoading && (
          <>
            {children}
            <FooterThreeSection />
          </>
        )}
      </body>
    </html>
  );
}
