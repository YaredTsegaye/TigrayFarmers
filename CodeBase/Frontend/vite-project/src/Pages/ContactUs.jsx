import React, { useEffect } from "react";
import { useBreadcrumb } from "./BreadcrumbContext";
import ContactUsContent from "./ContactUsContent";

function ContactUs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    // Set the breadcrumb path for the DonationCollection page and make it visible
    setBreadcrumbs({
      items: [
        { label: "Home", href: "/" },
        { label: "Contact Us", href: "/ContactUs" },
      ],
      isVisible: true,
    });
  }, [setBreadcrumbs]);

  return (
    <>
      {/* Contact area S t a r t*/}
      <section className="volunteer-details top-bottom-padding2">
        <ContactUsContent />
      </section>
      {/* End-of contact*/}
    </>
  );
}

export default ContactUs;
