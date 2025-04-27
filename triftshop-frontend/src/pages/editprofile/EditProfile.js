import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setCurrentEmail(savedEmail);
    } else {
      setError("Email nije pronađen u localStorage.");
    }
  }, []);

  const handleEmailChange = (e) => setNewEmail(e.target.value);
  const handlePasswordChange = (e) => setNewPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous error messages
    setSuccess(""); // Reset any previous success messages

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Nema pristupnog tokena");
      return;
    }

    // Check if new password is valid (at least 8 characters)
    const passwordRegex = /^.{8,}$/;
    if (newPassword && !passwordRegex.test(newPassword)) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!newEmail && !newPassword) {
      setError("Unesi novi email ili novu šifru.");
      return;
    }

    const payload = {
      email: currentEmail,
      newEmail: newEmail,
      newPassword: newPassword,
    };

    console.log("Poslati podaci na server:", payload);

    try {
      const response = await axios.put(
        "http://localhost:5000/api/user/update",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("API odgovor:", response.data);
      setSuccess(response.data.message || "Uspešno ažurirano.");
      if (newEmail) {
        setCurrentEmail(newEmail);
        localStorage.setItem("email", newEmail); // Čuvanje email-a u localStorage
      }

      setNewEmail("");
      setNewPassword("");
    } catch (error) {
      setError(error.response?.data?.message || "Došlo je do greške");
    }
  };

  const handleBackClick = () => {
    navigate("/userpanel"); // Redirect to user panel page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Edit Profile</h2>

      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label htmlFor="currentEmail" style={styles.label}>Current Email:</label>
          <input
            type="text"
            id="currentEmail"
            value={currentEmail}
            readOnly
            style={styles.inputDisabled}
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="newEmail" style={styles.label}>New Email:</label>
          <input
            type="email"
            id="newEmail"
            value={newEmail}
            onChange={handleEmailChange}
            placeholder="Enter your new email"
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="newPassword" style={styles.label}>New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
            style={styles.input}
          />
        </div>


        <button type="submit" style={styles.button}>Save Changes</button>
      </form>
      <button onClick={handleBackClick} style={styles.button1}>
        <i className="fa fa-arrow-left" style={styles.icon}></i> {/* Add the Font Awesome icon here */}
        Back to User Panel
      </button>


    </div>
  );
}

const styles = {
  container: {
    maxWidth: "60%",
    margin: "20px",
    padding: "30px",
    fontFamily: "'Arial', sans-serif",
    border: "2px solidrgb(255, 171, 223)",
    borderRadius: "15px",
    backgroundColor: "#fdf6fa",
    textAlign: "left", // Sav tekst se poravnava ulevo
    marginLeft: "20rem",
  },
  header: {
    marginBottom: "20px",
    fontSize: "28px",
    color: "#3F3038",
    fontWeight: "700",
    textAlign: "left",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "30%", // Proširena forma
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "600",
    color: "#3F3038",
    fontSize: "16px",
    display: "block",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ffc0cb",
    backgroundColor: "#fff0f5",
    width: "100%",
    transition: "border 0.3s ease",
  },
  inputDisabled: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ffc0cb",
    backgroundColor: "#f8d7da",
    color: "#gray",
    width: "100%",
  },
  button: {
    width: "45%",
    padding: "13px",
    fontSize: "18px",
    backgroundColor: "#ff69b4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "600",
    textAlign: "left",
  },
  buttonHover: {
    backgroundColor: "#ff1493",
  },
  error: {
    color: "#ff4d4d",
    marginBottom: "15px",
    fontWeight: "bold",
    textAlign: "left",
  },
  success: {
    color: "#32cd32",
    marginBottom: "15px",
    fontWeight: "bold",
    textAlign: "left",
  },
  button1: {
    padding: "10px",
    fontSize: "14px",
    backgroundColor: "#3F3038",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "600",
    textAlign: "left",
    marginTop: "20px", // Add some spacing between form and back button
  },
  icon: {
    marginRight: "8px", // Adds space between the icon and the text
    fontSize: "16px", // Adjust the size of the icon
  },

};

