import React ,{useState}from 'react'
import Sidebar from './Sidebar';
 
import './Header.css'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  return (
    <div>
         <header>
      <nav>
        <div className="left">Tasty Food</div>
        <div className="right">
          <ul>
            
            <a href='/'><li>Search</li></a>
          
            <a href="/"><li>Offer</li></a>
            <a href=''><li>Help</li></a>
            <a href=''><li>Sign in</li></a>
            <a href=''><li>Cart</li></a>
             <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <button  className="openbtn" onClick={toggleSidebar}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></button>   
          </ul>
        </div>
      </nav>
    </header>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://picsum.photos/200/300?{food}" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/200/300?{food}" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/200/300?{food}" className="d-block w-100" alt="..."/>
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
    </div>
  )
}
