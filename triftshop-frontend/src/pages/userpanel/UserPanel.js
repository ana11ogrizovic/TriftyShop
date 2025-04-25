import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "../../components/navMenu/NavMenu";
import { jwtDecode } from "jwt-decode"; // Popravljen uvoz
import axios from "axios";
import './UserPanel.css';


export default function UserPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false); // Stanje za otvaranje chat-a
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [userProducts, setUserProducts] = useState([]);
  const [activePanel, setActivePanel] = useState("Messages"); // ili bilo koja početna vrednost


  const handlePanelSwitch = (panelName) => {
    setActivePanel(panelName);
  };

  // Funkcija za odjavu
  const handleLogout = () => {
    // Brisanje tokena iz localStorage
    localStorage.removeItem('token');

    // Preusmeravanje na početnu stranicu (home page)
    navigate('/');
  };

  useEffect(() => {
    fetchUserProducts();
  }, []);

  const fetchUserProducts = async () => {
    try {
      // Povuci token iz localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("🚨 Token nije pronađen u localStorage");
        return;
      }

      // Dekodiraj token
      const decodedToken = jwtDecode(token);
      console.log("✅ Decoded token:", decodedToken);

      // Proveri da li postoji `email` ili `userId` u tokenu
      const userEmail = decodedToken.email || localStorage.getItem("email"); // ✅ Osiguraj da koristimo email iz tokena
      if (!userEmail) {
        console.error("🚨 Email nije pronađen u tokenu ili localStorage");
        return;
      }

      console.log("🔍 Fetching products for email:", userEmail);

      // Pozovi API da povuče proizvode korisnika
      const response = await axios.get(`http://localhost:5000/api/products/user/${userEmail}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.length === 0) {
        console.log("⚠️ Korisnik nema nijedan proizvod.");
      } else {
        setUserProducts(response.data);
        console.log("✅ Proizvodi korisnika:", response.data);
      }
    } catch (error) {
      console.error("❌ Greška pri dohvatanju proizvoda:", error);
    }
  };



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
          <aside style={{ width: "20%", float: "left", padding: "1rem", borderRight: "1px solid #E5E3E4", minHeight: "70vh" }}>
            <h2 style={{ fontWeight: "400", fontSize: "1.5rem", color: "#3F3038", marginBottom: "0.5rem" }}>
              My TriftyShop
            </h2>
            <hr />

            {/* Prikaz email-a ispod "My Profile" */}
            {user?.email && (
              <p style={{ color: "#F361AF", fontSize: "1.2rem", marginBottom: "1rem", padding: "5px 0px", borderRadius: "5px", fontWeight: "bold" }}>
                {user.email}
              </p>
            )}

            <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", color: "#3F3038", lineHeight: "2" }}>
              <li

                onClick={() => setActivePanel("listings")}
                style={{ cursor: "pointer", color: activePanel === "listings" ? "#F361AF" : "#3F3038" }}
              >
                <i className="fa fa-list-alt" style={{ marginRight: '10px' }}></i> My Listings
              </li>
              <li><i className="fa fa-book" style={{ marginRight: '10px' }}></i> Messages</li>
              <hr />
              <li><i className="fa fa-book" style={{ marginRight: '10px' }}></i> Address Book</li>
              <li><i className="fa fa-cube" style={{ marginRight: '10px' }}></i> Shipments</li>
              <li><i className="fa fa-truck" style={{ marginRight: '10px' }}></i> Schedule a Courier</li>
              <hr />
              <li><i className="fa fa-user" style={{ marginRight: '10px' }}></i> My Profile</li>
              <li style={{ color: "#F361AF", cursor: "pointer" }} onClick={handleLogout}><i className="fa fa-sign-out" style={{ marginRight: '10px' }}></i> Log Out</li>
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
                            Obrisi
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

          </main>
        </div>
      </div>
    </div>

  );
}
