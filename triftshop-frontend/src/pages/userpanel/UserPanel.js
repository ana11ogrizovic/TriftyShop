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
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Panel Wrapper */}
      <div style={{
        width: '70%',
        backgroundColor: '#FFF',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Sidebar - Moj Profil i Opcije */}
        <aside style={{
          width: '25%',
          float: 'left',
          padding: '1rem',
          borderRight: '1px solid #E5E3E4'
        }}>
          <h2 style={{
            fontWeight: '600',
            fontSize: '1.8rem',
            color: '#3F3038',
            marginBottom: '1rem'
          }}>
            Moj Profil
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
            <li>Moji oglasi</li>
            <li>Poruke</li>
            <li>Obaveštenja</li>
            <li>Ocene</li>
            <li>Pratim</li>
            <li>Sačuvane pretrage</li>
            <li>Adresar</li>
            <li>Pošiljke</li>
            <li>Zakažite kurira</li>
            <li>Dopuna kredita (45 din)</li>
            <li>kp Izlog</li>
            <li>kp Obnavljač</li>
            <li>Moj nalog</li>
            <li style={{ color: '#F361AF', cursor: 'pointer' }}>Izlogujte se</li>
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
            marginBottom: '2rem',
            borderBottom: '1px solid #E5E3E4',
            paddingBottom: '1.5rem',
            textAlign: 'center',
            flex:1,
          }}>
            <h1 style={{
              fontWeight: '600',
              fontSize: '2.5rem',
              color: '#3F3038',
              marginBottom: '0.5rem'
            }}>
              Dobrodošli, Ana!
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#6D6467'
            }}>
              Ovde možete upravljati svojim nalozima i aktivnostima.
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Statistika */}
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
                Statistika
              </h4>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                fontSize: '1.1rem',
                color: '#6D6467',
                lineHeight: '1.8'
              }}>
                <li>Oglasi: <span style={{ color: '#F361AF' }}>{userStats.ads}</span></li>
                <li>Poruke: <span style={{ color: '#F361AF' }}>{userStats.messages}</span></li>
                <li>Obaveštenja: <span style={{ color: '#F361AF' }}>{userStats.notifications}</span></li>
              </ul>
            </div>

            {/* Obaveštenja */}
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
                Obaveštenja
              </h4>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                fontSize: '1.1rem',
                color: '#6D6467',
                lineHeight: '1.8'
              }}>
                <li style={{ color: '#F361AF', cursor: 'pointer' }}>
                  Novo obaveštenje o isporuci
                </li>
                <li style={{ color: '#F361AF', cursor: 'pointer' }}>
                  Promene u vašem nalogu
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
