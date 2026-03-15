"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)


export default function GoogleMap() {

      return (
            <div>
                  {/* google map */}
                  <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded h-100">
                              <iframe
                                    className="rounded w-100"
                                    style={{ height: 500 }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.910750056003!2d-0.3874402244863501!3d51.4781525128409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672d128c17069%3A0xdd8356537b12e8e6!2s15%20Shenley%20Rd%2C%20Hounslow%20TW5%200AD%2C%20UK!5e0!3m2!1sen!2s!4v1761359710732!5m2!1sen!2s"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                              />
                        </div>
                  </div>
                  {/* Contact End */}
            </div>
      );
}