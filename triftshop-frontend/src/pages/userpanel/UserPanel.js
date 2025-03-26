import { useNavigate } from "react-router-dom";

const userStats = {
  ads: 12,
  messages: 8,
  notifications: 4,
};

export default function UserPanel() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      backgroundColor: '#FDF6FA',
      fontFamily: 'Arial, sans-serif',
      paddingTop: '20px',
    }}>
      {/* Panel Wrapper */}
      <div style={{
        width: '70%',
        backgroundColor: ' rgba(243, 97, 175, 0.03)',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Sidebar - Moj Profil i Opcije */}
        <aside style={{
          width: '25%',
          float: 'left',
          padding: '1rem',
          borderRight: '1px solid #E5E3E4',
          minHeight:'100vh'
        }}>
          <h2 style={{
            fontWeight: '600',
            fontSize: '1.8rem',
            color: '#3F3038',
            marginBottom: '1rem'
          }}>
            My Profile
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#6D6467',
            marginBottom: '2rem'
          }}>
            <strong>Email:</strong> anaogrizovic11@gmail.com
          </p>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            fontSize: '1.1rem',
            color: '#3F3038',
            lineHeight: '2'
          }}>
            <li>My Listings</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>Ratings</li>
            <li>Following</li>
            <li>Saved Searches</li>
            <li>Address Book</li>
            <li>Shipments</li>
            <li>Schedule a Courier</li>
            <li style={{ color: '#F361AF', cursor: 'pointer' }}>Log Out</li>

          </ul>
        </aside>

        {/* Glavni deo - Kartice */}
        <main style={{
          flex: 1, // Ovo omogućava da glavni deo zauzima preostali prostor
          padding: '1rem',
          display: 'flex', // Koristi Flexbox da postavi unutrašnje elemente
          flexDirection: 'column', // Obezbeđuje vertikalno poravnavanje unutar glavnog dela
          gap: '1rem' // Dodaje razmak između unutrašnjih elemenata
        }}>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Statistics */}
            <div style={{
              flex: 1,
              minWidth: '300px',
              backgroundColor: '#FFF',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #E5E3E4',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h4 style={{
                fontWeight: '600',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                color: '#3F3038'
              }}>
                Statistics
              </h4>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                fontSize: '1.1rem',
                color: '#6D6467',
                lineHeight: '1.8'
              }}>
                <li>Listings: <span style={{ color: '#F361AF' }}>{userStats.ads}</span></li>
                <li>Messages: <span style={{ color: '#F361AF' }}>{userStats.messages}</span></li>
                <li>Notifications: <span style={{ color: '#F361AF' }}>{userStats.notifications}</span></li>
              </ul>
            </div>

            {/* Notifications */}
            <div style={{
              flex: 1,
              minWidth: '300px',
              backgroundColor: '#FFF',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #E5E3E4',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h4 style={{
                fontWeight: '600',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                color: '#3F3038'
              }}>
                Notifications
              </h4>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                fontSize: '1.1rem',
                color: '#6D6467',
                lineHeight: '1.8'
              }}>
                <li style={{ color: '#F361AF', cursor: 'pointer' }}>
                  New delivery notification
                </li>
                <li style={{ color: '#F361AF', cursor: 'pointer' }}>
                  Changes in your account
                </li>
              </ul>
            </div>

            {/* Sales Overview */}
            <div style={{
              flex: 1,
              minWidth: '300px',
              backgroundColor: '#FFF',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #E5E3E4',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h4 style={{
                fontWeight: '600',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                color: '#3F3038'
              }}>
                Sales Overview
              </h4>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                fontSize: '1.1rem',
                color: '#6D6467',
                lineHeight: '1.8'
              }}>
                <li>Total Sales: <span style={{ color: '#F361AF' }}>${userStats.salesTotal}</span></li>
                <li>Pending Orders: <span style={{ color: '#F361AF' }}>{userStats.pendingOrders}</span></li>
                <li>Completed Orders: <span style={{ color: '#F361AF' }}>{userStats.completedOrders}</span></li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div style={{
              flex: 1,
              minWidth: '300px',
              backgroundColor: '#FFF',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #E5E3E4',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h4 style={{
                fontWeight: '600',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                color: '#3F3038'
              }}>
                Inventory Management
              </h4>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                fontSize: '1.1rem',
                color: '#6D6467',
                lineHeight: '1.8'
              }}>
                <li>Active Listings: <span style={{ color: '#F361AF' }}>{userStats.activeListings}</span></li>
                <li>Out of Stock: <span style={{ color: '#F361AF' }}>{userStats.outOfStock}</span></li>
                <li>Recently Added: <span style={{ color: '#F361AF' }}>{userStats.recentlyAdded}</span></li>
              </ul>
            </div>

            {/* Financial Reports */}
            <div style={{
              flex: 1,
              minWidth: '300px',
              backgroundColor: '#FFF',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #E5E3E4',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h4 style={{
                fontWeight: '600',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                color: '#3F3038'
              }}>
                Financial Reports
              </h4>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                fontSize: '1.1rem',
                color: '#6D6467',
                lineHeight: '1.8'
              }}>
                <li>Monthly Revenue: <span style={{ color: '#F361AF' }}>${userStats.monthlyRevenue}</span></li>
                <li>Last Payout: <span style={{ color: '#F361AF' }}>${userStats.lastPayout}</span></li>
                <li>Upcoming Payout: <span style={{ color: '#F361AF' }}>${userStats.upcomingPayout}</span></li>
              </ul>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
