import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "../../components/navMenu/NavMenu";
import { jwtDecode } from "jwt-decode"; // Popravljen uvoz
import axios from "axios";

export default function UserPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [messageCount, setMessageCount] = useState(0); // Stanje za broj poruka
  const [isChatOpen, setIsChatOpen] = useState(false); // Stanje za otvaranje chat-a
  const [messages, setMessages] = useState([]); // Stanje za prikaz poruka
  const [newMessage, setNewMessage] = useState(""); // Stanje za unos nove poruke
  const [selectedProductId, setSelectedProductId] = useState(null);


  // Funkcija za odjavu
  const handleLogout = () => {
    // Brisanje tokena iz localStorage
    localStorage.removeItem('token');

    // Preusmeravanje na početnu stranicu (home page)
    navigate('/');
  };

  

  useEffect(() => {
    // Inicijalizacija korisničkih podataka iz localStorage
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      setUser({ email: userEmail });
    }

    const fetchUserProducts = async () => {
      const token = localStorage.getItem('token');  // Povlači token iz localStorage

      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/user/products', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}` // Dodaješ token u Authorization header
          }
        });

        if (!response.ok) {
          throw new Error('Error fetching products');
        }

        const data = await response.json();
        console.log(data);  // Prikazuješ podatke u konzoli
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchUserProducts();
  }, []);


  // Funkcija za povlačenje poruka
  const fetchMessages = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
  
    try {
      const decoded = jwtDecode(token); // Dekodiranje tokena
      const userId = decoded.userId;
  
      const response = await axios.get(`http://localhost:5000/api/messages/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setMessages(response.data);
      console.log(response.data); // Proveri vraća li proizvode sa ispravnim podacima
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  

  // Funkcija za slanje poruka
  const handleSendMessage = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token); // Dekodiranje tokena
    const senderId = decoded.userId;

    if (!newMessage) {
      alert("Please enter a message.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/messages/sendMessage", {
        content: newMessage,
        sender: senderId,
        productId: selectedProductId
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Message sent!");
      setNewMessage(""); // Resetuj unos poruke
      fetchMessages(); // Osveži poruke
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  // U ovoj funkciji proveravaš da li je name proizvoda prazan i ako jeste, postavljaš neki podrazumevani naziv
const groupMessagesByProduct = (messages) => {
  return messages.reduce((groups, message) => {
    const product = message.productId;
    const productKey = product._id;

    if (!groups[productKey]) {
      groups[productKey] = {
        product,
        messages: [],
      };
    }

    groups[productKey].messages.push(message);
    return groups;
  }, {});
};

// U JSX-u, kada prikazuješ proizvod
{Object.entries(groupMessagesByProduct(messages)).map(([productKey, { product, messages }]) => {
  const productName = product.name || "Unnamed Product"; // Koristiš naziv proizvoda
  return (
    <div key={product._id} style={{ marginBottom: "2rem" }}>
      <h4
        style={{
          cursor: "pointer",
          color: selectedProductId === product._id ? "#F361AF" : "#3F3038",
        }}
        onClick={() => setSelectedProductId(product._id)}
      >
        📦 {productName} {/* Prikazivanje naziva proizvoda */}
      </h4>

      {messages.map((message) => (
        <div key={message._id}>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
})}




  // Funkcija za prikaz chat-a
  useEffect(() => {
    if (isChatOpen) {
      fetchMessages(); // Povuci poruke kada se otvori chat
    }
  }, [isChatOpen]);

  return (
    <div style={{ backgroundColor: "#FDF6FA", fontFamily: "Arial, sans-serif" }}>

      {/* NavMenu Komponenta */}
      <NavMenu />  {/* Ovdje se dodaje navigacioni meni iznad forme */}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "85vh", paddingTop: '4rem', paddingLeft: '5rem' }}>

        <div style={{ width: "70%", backgroundColor: "rgba(255, 255, 255, 0.03)", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>

          {/* Dugme za dodavanje listinga */}
          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <button
              onClick={() => navigate("/addlisting")}
              style={{
                backgroundColor: "#F361AF",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              Add Listing
            </button>
          </div>



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
              <li><i className="fa fa-list-alt" style={{ marginRight: '10px' }}></i> My Listings</li>
              <li
                onClick={() => setIsChatOpen((prev) => !prev)} // Preklopi stanje chat-a
                style={{ cursor: "pointer", position: "relative" }}
              >
                <i className="fa fa-envelope" style={{ marginRight: "10px" }}></i> Messages
                {messageCount > 0 && (
                  <span style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "20px",
                  }}>
                    {messageCount}
                  </span>
                )}
              </li>
              <li><i className="fa fa-bell" style={{ marginRight: '10px' }}></i> Notifications</li>
              <li><i className="fa fa-star" style={{ marginRight: '10px' }}></i> Ratings</li>
              <li><i className="fa fa-user-plus" style={{ marginRight: '10px' }}></i> Following</li>
              <li><i className="fa fa-search" style={{ marginRight: '10px' }}></i> Saved Searches</li>
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
            {isChatOpen && (
              <div style={{ padding: "1rem", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem", color: "#3F3038" }}>
                  Messages
                </h3>

                {messages.length === 0 ? (
                  <p>No messages available.</p>
                ) : (
                  Object.entries(groupMessagesByProduct(messages)).map(([productKey, { product, messages }]) => {
                    const groupedBySender = messages.reduce((acc, msg) => {
                      const senderId = msg.sender?._id || "Unknown";
                      if (!acc[senderId]) {
                        acc[senderId] = [];
                      }
                      acc[senderId].push(msg);
                      return acc;
                    }, {});

                    return (
                      <div key={product._id} style={{ marginBottom: "2rem" }}>
                        <h4
                          style={{
                            cursor: "pointer",
                            color: selectedProductId === product._id ? "#F361AF" : "#3F3038",
                          }}
                          onClick={() => setSelectedProductId(product._id)}
                        >
                          📦 {product.name || "Unnamed Product"}
                        </h4>
                    
                        {Object.entries(groupedBySender).map(([senderId, msgs]) => (
                          <div key={senderId} style={{ marginBottom: "1rem", paddingLeft: "1rem" }}>
                            <h5 style={{ marginBottom: "0.5rem", color: "#3F3038" }}>
                              👤 {msgs[0].sender?.fullName || msgs[0].sender?.email || "Unknown User"}
                            </h5>
                            {msgs.map((message) => (
                              <div
                                key={message._id}
                                style={{
                                  marginBottom: "8px",
                                  padding: "8px",
                                  backgroundColor: "#F9F9F9",
                                  borderRadius: "5px",
                                }}
                              >
                                <p style={{ margin: 0 }}>{message.content}</p>
                                <small style={{ color: "#999" }}>
                                  {new Date(message.timestamp).toLocaleString()}
                                </small>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    );
                  })
                )}

                {/* Input za novu poruku */}
            {/* Unos nove poruke */}
            {selectedProductId && (
              <div style={{ marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
                <textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows="3"
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
                />
                <button
                  onClick={handleSendMessage}
                  style={{
                    marginTop: "0.5rem",
                    backgroundColor: "#F361AF",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Send Message
                </button>
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
