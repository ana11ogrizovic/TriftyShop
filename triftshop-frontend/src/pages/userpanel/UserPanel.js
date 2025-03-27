import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Pretpostavka da čuvaš token
        const response = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data); // Postavlja user podatke
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "85vh", backgroundColor: "#FDF6FA", fontFamily: "Arial, sans-serif", paddingTop: '4rem', paddingLeft: '5rem' }}>
      <div style={{ width: "70%", backgroundColor: "rgba(255, 255, 255, 0.03)", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>

        {/* Sidebar */}
        <aside style={{ width: "25%", float: "left", padding: "1rem", borderRight: "1px solid #E5E3E4", minHeight: "70vh" }}>
          <h2 style={{ fontWeight: "400", fontSize: "1.5rem", color: "#3F3038", marginBottom: "0.5rem" }}>
            My TriftyShop
          </h2>
          <hr></hr>

          {/* Prikaz email-a ispod "My Profile" */}
          {user?.email && (
            <p style={{ fontSize: "1rem", color: "#6D6467", marginBottom: "1rem", backgroundColor: "rgba(243, 97, 175, 0.1)", padding: "5px 10px", borderRadius: "5px" }}>
              {user.email}
            </p>
          )}

          <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", color: "#3F3038", lineHeight: "2" }}>
            <li><i className="fa fa-list-alt" style={{ marginRight: '10px' }}></i> My Listings</li>
            <li><i className="fa fa-envelope" style={{ marginRight: '10px' }}></i> Messages</li>
            <li><i className="fa fa-bell" style={{ marginRight: '10px' }}></i> Notifications</li>
            <li><i className="fa fa-star" style={{ marginRight: '10px' }}></i> Ratings</li>
            <li><i className="fa fa-user-plus" style={{ marginRight: '10px' }}></i> Following</li>
            <li><i className="fa fa-search" style={{ marginRight: '10px' }}></i> Saved Searches</li>
            <hr></hr>
            <li><i className="fa fa-book" style={{ marginRight: '10px' }}></i> Address Book</li>
            <li><i className="fa fa-cube" style={{ marginRight: '10px' }}></i> Shipments</li>
            <li><i className="fa fa-truck" style={{ marginRight: '10px' }}></i> Schedule a Courier</li>
            <hr></hr>
            <li><i className="fa fa-user" style={{ marginRight: '10px' }}></i> My Profile</li>
            <li style={{ color: "#F361AF", cursor: "pointer" }}><i className="fa fa-sign-out" style={{ marginRight: '10px' }}></i> Log Out</li>
          </ul>

        </aside>

        {/* Glavni deo */}
        <main style={{ flex: 1, padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            {/* 📊 Statistika */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#FFF", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <h4 style={{ fontWeight: "600", fontSize: "1.4rem", marginBottom: "1rem", color: "#3F3038" }}>Statistics</h4>
              <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", color: "#6D6467", lineHeight: "1.8" }}>
                <li>Listings: <span style={{ color: "#F361AF" }}>{user?.ads || 0}</span></li>
                <li>Messages: <span style={{ color: "#F361AF" }}>{user?.messages || 0}</span></li>
                <li>Notifications: <span style={{ color: "#F361AF" }}>{user?.notifications || 0}</span></li>
              </ul>
            </div>

            {/* 📌 Moji oglasi */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#FFF", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <h4 style={{ fontWeight: "600", fontSize: "1.4rem", marginBottom: "1rem", color: "#3F3038" }}>My Listings</h4>
              {user?.ads?.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", color: "#6D6467", lineHeight: "1.8" }}>
                  {user.ads.map((ad, index) => (
                    <li key={index}>{ad.title} - <span style={{ color: "#F361AF" }}>{ad.price}€</span></li>
                  ))}
                </ul>
              ) : (
                <p>No active listings</p>
              )}
            </div>

            {/* ⭐ Omiljeni proizvodi */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#FFF", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <h4 style={{ fontWeight: "600", fontSize: "1.4rem", marginBottom: "1rem", color: "#3F3038" }}>Favorite Products</h4>
              {user?.favorites?.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", color: "#6D6467", lineHeight: "1.8" }}>
                  {user.favorites.map((fav, index) => (
                    <li key={index}>{fav.name} - <span style={{ color: "#F361AF" }}>{fav.category}</span></li>
                  ))}
                </ul>
              ) : (
                <p>No favorites added</p>
              )}
            </div>

            {/* ⚙️ Podešavanja naloga */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#FFF", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <h4 style={{ fontWeight: "600", fontSize: "1.4rem", marginBottom: "1rem", color: "#3F3038" }}>Account Settings</h4>
              <button style={{ backgroundColor: "#F361AF", color: "#FFF", padding: "0.8rem 1.5rem", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "1rem" }}>
                Edit Profile
              </button>
            </div>
          </div>

          {/* ℹ️ Korisne opcije */}
          <div style={{ backgroundColor: "#FFF", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginTop: "1rem" }}>
            <h4 style={{ fontWeight: "600", fontSize: "1.4rem", marginBottom: "1rem", color: "#3F3038" }}>Useful Options</h4>
            <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", color: "#6D6467", lineHeight: "1.8" }}>
              <li>Change Theme</li>
              <li>My Payment Cards</li>
              <li>My Data (GDPR)</li>
              <li>Seller Rights and Responsibilities</li>
            </ul>
          </div>
        </main>

      </div>
    </div>
  );
}
