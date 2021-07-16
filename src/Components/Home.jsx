const Home = () => {
  return (
    <>
      {/* <div className="container-fluid bgimg">
        <div className="banner_content  ">
          <h2
            className="h2tag " >
            Save Life India - Blood Donors
          </h2>
          <p
            className="ptag pt-5">
            Join Now
          </p>
        </div>
      </div> */}


      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active carousel-img">
      <img src="https://th.bing.com/th/id/OIP.SXW6btsloz4s_QunrSM84wHaEe?pid=ImgDet&w=800&h=484&rs=1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item carousel-img">
      <img src="https://www.2j-antennas.com/media/original/blood-donation.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item carousel-img">
      <img src="https://media.istockphoto.com/photos/hand-gives-a-red-heart-to-a-hand-blood-donationworld-blood-donor-day-picture-id693244580?k=6&m=693244580&s=612x612&w=0&h=GyZ7rio9rYlX49wxsJOkqGduFDexVqupIzsuRA8Ky-o=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};
export default Home;
