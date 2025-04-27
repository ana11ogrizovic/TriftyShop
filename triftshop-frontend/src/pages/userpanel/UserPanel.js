import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "../../components/navMenu/NavMenu";
import { jwtDecode } from "jwt-decode"; // Popravljen uvoz
import axios from "axios";
import './UserPanel.css';
import { Link } from 'react-router-dom';



export default function UserPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userProducts, setUserProducts] = useState([]);
  const [activePanel, setActivePanel] = useState("listings"); // Postavlja "My Listings" kao aktivni panel po defaultu

  const [activityData, setActivityData] = useState({
    lastLogin: '', // Ovaj podatak bi trebalo da dođe iz tvoje baze podataka ili iz tokena
    totalListings: 0, // Broj proizvoda (treba da se postavi iz proizvoda korisnika)
    favoriteProducts: 0, // Možeš dobiti ovaj podatak iz nekog drugog API-ja
    awaitingApproval: 0 // Ako postoji, možeš takođe postaviti ovaj broj iz API-ja
  });



  const handlePanelSwitch = (panelName) => {
    setActivePanel(panelName);
  };

  useEffect(() => {
    fetchUserProducts();
  }, []);

  
  // API poziv za proizvode korisnika
  const fetchUserProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("🚨 Token nije pronađen u localStorage");
        return;
      }

      const decodedToken = jwtDecode(token);
      const userEmail = decodedToken.email || localStorage.getItem("email");

      if (!userEmail) {
        console.error("🚨 Email nije pronađen u tokenu ili localStorage");
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/products/user/${userEmail}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.length === 0) {
        console.log("⚠️ Korisnik nema nijedan proizvod.");
      } else {
        setUserProducts(response.data);
        console.log("✅ Proizvodi korisnika:", response.data);

        // Ažuriraj activityData sa brojem proizvoda
        setActivityData(prevState => ({
          ...prevState,
          totalListings: response.data.length // Broj proizvoda postavljamo ovde
        }));
      }
    } catch (error) {
      console.error("❌ Greška pri dohvatanju proizvoda:", error);
    }
  };

  // API poziv za podatke o aktivnosti korisnika (npr. poslednja prijava)
  const fetchActivityData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("🚨 Token nije pronađen u localStorage");
        return;
      }

      const decodedToken = jwtDecode(token);
      const userEmail = decodedToken.email || localStorage.getItem("email");

      if (!userEmail) {
        console.error("🚨 Email nije pronađen u tokenu ili localStorage");
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/activity/${userEmail}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data) {
        setActivityData(prevState => ({
          ...prevState,
          lastLogin: response.data.lastLogin, // Postavi poslednju prijavu ako postoji
          favoriteProducts: response.data.favoriteProducts, // Ovaj podatak možeš koristiti ako ga imaš u bazi
          awaitingApproval: response.data.awaitingApproval // Ako imaš, postavi broj proizvoda koji čeka odobrenje
        }));
      }
    } catch (error) {
      console.error("❌ Greška pri dohvatanju podataka o aktivnosti:", error);
    }
  };

  useEffect(() => {
    fetchActivityData(); // Pozivamo funkciju za aktivnosti korisnika prilikom učitavanja komponente
  }, []);


  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
      if (response.status === 200) {
        // Filtriraj proizvod iz trenutnog niza proizvoda
        setUserProducts(userProducts.filter(product => product._id !== productId));
        alert("Proizvod je uspešno obrisan.");
      }
    } catch (error) {
      console.error("Greška pri brisanju proizvoda:", error);
      alert("Došlo je do greške pri brisanju proizvoda.");
    }
  };


  return (
    <div style={{ backgroundColor: "#FDF6FA", fontFamily: "Arial, sans-serif" }}>

      {/* NavMenu Komponenta */}
      <NavMenu />  {/* Ovdje se dodaje navigacioni meni iznad forme */}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "85vh", paddingTop: '4rem', paddingLeft: '5rem' }}>

        <div style={{ width: "70%", backgroundColor: "rgba(255, 255, 255, 0.03)", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>

          {/* Sidebar */}
          {/* Sidebar */}
          <aside style={{ width: "20%", float: "left", padding: "1rem", borderRight: "1px solid #E5E3E4", minHeight: "70vh" }}>
            <h2 style={{ fontWeight: "400", fontSize: "1.5rem", color: "#3F3038", marginBottom: "0.5rem" }}>
              My TriftyShop
            </h2>
            <hr />

            {/* Display User Info */}
            <div style={{ marginBottom: "1rem" }}>
              {user?.name && (
                <p style={{ color: "#F361AF", fontSize: "1.2rem", fontWeight: "bold" }}>
                  Welcome, {user.name}
                </p>
              )}
              {user?.email && (
                <p style={{ color: "#F361AF", fontSize: "1.2rem", marginBottom: "1rem" }}>
                  {user.email}
                </p>
              )}
            </div>

            <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", color: "#3F3038", lineHeight: "2" }}>
              <li onClick={() => setActivePanel("listings")} style={{ cursor: "pointer", color: activePanel === "listings" ? "#F361AF" : "#3F3038" }}>
                <i className="fa fa-list-alt" style={{ marginRight: '10px' }}></i> My Listings
              </li>
              <li>
                <Link to="/addlisting" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <i className="fa fa-book" style={{ marginRight: '10px' }}></i> Add Listings
                </Link>
              </li>
              <li onClick={() => setActivePanel("activityOverview")} style={{ cursor: "pointer", color: activePanel === "activityOverview" ? "#F361AF" : "#3F3038" }}>
                <i className="fa fa-chart-line" style={{ marginRight: '10px' }}></i> Activity Overview
              </li>
              <hr />
              <li>
                <Link to="/editprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                <i className="fa fa-user" style={{ marginRight: '10px' }}></i> Edit Profile

                </Link>
              </li>
            </ul>
          </aside>


          {/* Glavni deo */}
          <main style={{ width: "75%", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

            {activePanel === "listings" && (
              <div style={{ padding: "1rem", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem", color: "#3F3038" }}>
                  My Listings
                </h3>
                {userProducts.length === 0 ? (
                  <p>Nemate nijedan oglas.</p>
                ) : (
                  <div className="product-list">
                    {userProducts.map(product => (
                      <div key={product._id} className="product-item">
                        <div className="product-image">
                          <img src={`http://localhost:5000/${product.images[0]}`} alt={product.itemName} />
                        </div>
                        <div className="product-details">
                          <h4>{product.itemName}</h4>
                          <p>{product.description}</p>
                          <p><strong>{product.price} RSD</strong></p>
                          <p>{product.condition}</p>
                          <button className="delete-button" onClick={() => deleteProduct(product._id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

            {activePanel === "activityOverview" && (
              <div className="activity-overview">
                <h3>Activity Overview</h3>
                <hr></hr>
                <div className="overview-content">
                  <div className="listing-box">
                    <p><strong>Your current total listings:</strong></p>
                    <h2>{activityData.totalListings}</h2>
                    <p className="listing-description">
                      That's the number of items you currently have available for sale on your profile.
                    </p>
                    <div className="action-buttons">
                      <button onClick={() => setActivePanel("listings")} className="btn-manage">
                        Manage Listings
                      </button>
                      <button onClick={() => navigate("/addlisting")} className="btn-add">
                        Add Listing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>

  );
}
