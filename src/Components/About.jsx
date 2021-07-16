const About = () => {
  return (
    <>
      <div className="container ">
        <h1 className="abt mb-5">About</h1>
        <div className="row">
          <div className="col-md-6">
            <div>
              <img className="rounded m-2"
                src="http://blooddonation.unlein.com/Admin/images/030321045045240221111504adds.jpg"
                alt=" a donar"
                width="100%"
                height="350"
              />
            </div>
          </div>
          <div className="col-md-6 abt-content ">
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
export default About;
