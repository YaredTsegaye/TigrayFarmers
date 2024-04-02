import React from "react";

function ContactForm() {
  return (
    <div className="send-box">
      <form action="contact-us.html" className="custom-form">
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label class="custom-label" for="exampleFormControlInput1">
                Full Name
              </label>
              <input type="text" class="form-control custom-input" id="exampleFormControlInput1" placeholder="Alex Jordan" />
            </div>
          </div>
          <div class="col-xl-12">
            <div class="form-group">
              <label class="custom-label" for="exampleFormControlInput5">
                Phone
              </label>
              <input type="text" class="form-control custom-input" id="exampleFormControlInput5" placeholder="Phone" />
            </div>
          </div>
          <div class="col-xl-12">
            <div class="form-group">
              <label class="custom-label" for="exampleFormControlInput2">
                Email address
              </label>
              <input type="email" class="form-control custom-input" id="exampleFormControlInput2" placeholder="name@example.com" />
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="form-group">
            <label class="custom-label" for="exampleFormControlTextarea1">
              Message
            </label>
            <textarea class="form-control custom-textarea" id="exampleFormControlTextarea1" placeholder="Type You message here"></textarea>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
