import InputForm from "./ContentInput";
import {
  ContactBanner,
  ContactContainer,
  ContactForm,
  ContactPlannet,
  ContactWrapper,
  FormArea,
} from "./styled";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactBanner>
          <div className="gradian"></div>
          <h2 className="banner-title">
            Getting in touch is easy! Let 's work together!
          </h2>
        </ContactBanner>
        <ContactPlannet src="/assets/images/contact/planet-form.webp" />
        <ContactForm>
          <h3 className="title-contact">Contact us form</h3>
          <InputForm text="Name" />
          <InputForm text="Name" />
          <InputForm text="Name" />
          <FormArea>
            <label className="input-label is-area">Name</label>
            <textarea name="area" className="textarea"></textarea>
            <span className="error"></span>
          </FormArea>
          <div className="form-footer">
            <button className="form-footer-inner">
              <div>
                <span className="text">Send</span>
                <div className="form-button">
                  <svg
                    className="form-button__tick-container"
                    viewBox="0 0 40 40"
                  >
                    <path
                      className="form-button__tick"
                      d="M6 20.594L15.6715 32L34 7.5"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
