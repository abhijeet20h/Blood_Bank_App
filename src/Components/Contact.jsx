const Contact = () => {
  return (
    <>
      <div className="container mb-4">
        <h1 className="abt mb-4">Contact</h1>
        <div className="row">
          <div className="col-md-6 ">
            <form className="contact p-5">
              <div className="mb-3">
                <label className="form-label ">E-Mail Address</label>
                <input type="text" className="form-control p-3" />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control p-3" />
              </div>
              <label className="form-label">Blood Group</label>
              <select
                class="form-select mb-3 p-3"
                aria-label="Default select example"
              >
                <option selected> Select Blood Group</option>
                <option value="1">A</option>
                <option value="2">A+</option>
                <option value="3">B</option>
                <option value="4">O</option>
              </select>
              <div class="form-check mt-4">
                <input
                  class="form-check-input  p-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div class="form-check mt-4">
                <input
                  class="form-check-input  p-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Femail{" "}
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-4 frm-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 abt-content">
            {" "}
            <h2 className="hed">Why Blood Donation Is Important?</h2>
            <p>
              Lorem ipsum dolor sit amet, qui case probo velit no, an postea
              scaevola partiendo mei. Id mea fuisset perpetua referrentur. Ut
              everti ceteros mei, alii discere eum no, duo id malis iuvaret. Ut
              everti ceteros mei, alii discere eum no, duo id malis iuvaret.
              Lorem ipsum dolor sit amet, qui case probo velit no, an postea
              scaevola partiendo mei. Id mea fuisset perpetua referrentur. Ut
              everti ceteros mei, alii discere eum no, duo id malis iuvaret. Ut
              everti ceteros mei, alii discere eum no, duo id malis iuvaret.
            </p>
            <button className="btn btn-success bt1 p-3">Check</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
