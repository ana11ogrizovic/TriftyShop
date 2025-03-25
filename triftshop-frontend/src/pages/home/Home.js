import React from 'react';
import myImage from '../../assets/images/homephoto.png';
import Image1 from '../../assets/images/img1.png';
import Image2 from '../../assets/images/img2.png';
import Image3 from '../../assets/images/img3.png';
import Image4 from '../../assets/images/img4.png';
import Image5 from '../../assets/images/img5.png';
import Image6 from '../../assets/images/img6.png';
import Image7 from '../../assets/images/img7.png';
import Image8 from '../../assets/images/img8.png';
import Image9 from '../../assets/images/img9.png';
import Image10 from '../../assets/images/img10.png';
import Image11 from '../../assets/images/img11.png';
import Image12 from '../../assets/images/img12.png';
import Image13 from '../../assets/images/img13.png';
import Image14 from '../../assets/images/img14.png';
import Image15 from '../../assets/images/img15.png';
import Image16 from '../../assets/images/img16.png';
import Image17 from '../../assets/images/img17.png';
import Image18 from '../../assets/images/img18.png';
import Image19 from '../../assets/images/img19.jpg';
import Image20 from '../../assets/images/img20.jpg';



const Home = () => {
  return (
    <div style={{ backgroundColor: '#FDF6FA' }}>
      {/* Baner */}
      <img src={myImage} alt="Home" style={{ width: '100%', height: '58rem', marginBottom: '0px' }} />

      {/* Istaknuti proizvodi */}
      <section id="featured" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FDF6FA', paddingTop: '9rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>

          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image1} alt="Proizvod 1" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Shein Mini Dress</h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              A chic and lightweight Shein Mini Dress, perfect for a stylish day.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly', /* Bolje raspoređuje elemente */
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>19.40 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through', marginLeft: '0.9rem' }}>25,40 $</span>
            </div>


            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>

          </div>



          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image2} alt="Proizvod 2" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>The Tote Bag </h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              Stylish and versatile, perfect for every occasion!
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>29.99 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through' }}>34.99 $</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>
          </div>


          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image3} alt="Proizvod 3" style={{ width: '80%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Jumpsuit Shein Light Pink</h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              Sleek and modern, perfect for those who love trendy aesthetics.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>33.99 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through' }}>46.99 $</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>
          </div>


          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image4} alt="Proizvod 4" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Mini Jacket With Fur</h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              Timeless design and premium quality, ideal for every wardrobe.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>49.99 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through' }}>54.99 $</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>
          </div>


          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image5} alt="Proizvod 5" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}> Versace High Heels</h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              Elegant and comfortable, crafted for your daily adventures.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>200.99 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through' }}>221.99 $</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>
          </div>

          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image6} alt="Proizvod 6" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}> Sleepwear Barbie Pink</h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              A classic must-have piece for timeless elegance.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>19.99 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through' }}>24.99 $</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </section>


      <section id="featured" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FDF6FA' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>

          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image7} alt="Proizvod 1" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}> Moonlight Whisper </h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              Elegant and comfortable, designed for everyday charm.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>24.99 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through' }}>37.99 $</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>
          </div>


          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={Image8} alt="Proizvod 2" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Elegant Satin Dress </h3>

            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
              Sophisticated yet casual, perfect for versatile styling.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>29.99 $</span>
              <span style={{ color: '#888', textDecoration: 'line-through' }}>34.99 $</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={{
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
              >
                View
              </button>
              <button style={{
                backgroundColor: '#3F3038',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
              >
                Contact Seller
              </button>
            </div>
          </div>

          <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <img src={Image9} alt="Proizvod 3" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

  <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Classic Fit Shirt</h3>

  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
    Timeless design with premium materials for all-day comfort.
  </p>

  <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1rem',
    fontSize: '1rem'
  }}>
    <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>24.99 $</span>
    <span style={{ color: '#888', textDecoration: 'line-through' }}>29.99 $</span>
  </div>

  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
    <button style={{
      backgroundColor: '#F361AF',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
    >
      View
    </button>
    <button style={{
      backgroundColor: '#3F3038',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
    >
      Contact Seller
    </button>
  </div>
</div>


<div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <img src={Image10} alt="Proizvod 4" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

  <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Vintage Denim Jacket</h3>

  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
    A classic staple perfect for layering and effortless style.
  </p>

  <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1rem',
    fontSize: '1rem'
  }}>
    <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>49.99 $</span>
    <span style={{ color: '#888', textDecoration: 'line-through' }}>59.99 $</span>
  </div>

  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
    <button style={{
      backgroundColor: '#F361AF',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
    >
      View
    </button>
    <button style={{
      backgroundColor: '#3F3038',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
    >
      Contact Seller
    </button>
  </div>
</div>
<div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <img src={Image11} alt="Proizvod 5" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

  <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Classic Leather Bag</h3>

  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
    Sleek design with premium craftsmanship for everyday use.
  </p>

  <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1rem',
    fontSize: '1rem'
  }}>
    <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>14.99 $</span>
    <span style={{ color: '#888', textDecoration: 'line-through' }}>19.99 $</span>
  </div>

  
  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
    <button style={{
      backgroundColor: '#F361AF',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
    >
      View
    </button>
    <button style={{
      backgroundColor: '#3F3038',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
    >
      Contact Seller
    </button>
  </div>
</div>

<div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s'
          }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <img src={Image12} alt="Proizvod 6" style={{ width: '100%', height: '21rem', borderRadius: '8px', marginBottom: '1rem' }} />

  <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>Summer Breeze Scarf</h3>

  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>
    Lightweight and stylish, perfect for warm sunny days.
  </p>

  <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1rem',
    fontSize: '1rem'
  }}>
    <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>14.99 $</span>
    <span style={{ color: '#888', textDecoration: 'line-through' }}>19.99 $</span>
  </div>

  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
    <button style={{
      backgroundColor: '#F361AF',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
    >
      View
    </button>
    <button style={{
      backgroundColor: '#3F3038',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s'
    }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
    >
      Contact Seller
    </button>
  </div>
</div>


        </div>
      </section>

      <div style={{ padding: '1rem 9rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#FDF6FA' }}>
        {/* SHOP POPULAR VINTAGE BRANDS */}
        <section style={{ marginBottom: '1rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)', /* Šest kolona za šest ikona */
            gap: '1rem',
            justifyItems: 'center'
          }}>
            {/* Ikone brendova */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Image13} alt="Nike" style={{ width: '80%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Image14} alt="Pink VS" style={{ width: '80%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Image15} alt="TNF" style={{ width: '80%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Image16} alt="Reebok" style={{ width: '80%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Image17} alt="Converse" style={{ width: '80%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Image18} alt="New Balance" style={{ width: '80%', height: 'auto' }} />
            </div>

          </div>
        </section>
      </div>


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', padding: '0rem 20rem', backgroundColor: '#FDF6FA', paddingBottom: '3rem' }}>
        {/* MENS SECTION */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', height: '50rem' }}>
          <img src={Image19} alt="Mens" style={{ width: '100%',borderRadius:'8px', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(70%)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>MENS</h2>
            <button
              onClick={() => window.location.href = '/mens'}
              style={{
                padding: '0.8rem 2rem',
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* WOMENS SECTION */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', height: '50rem' }}>
          <img src={Image20} alt="Womens" style={{ width: '100%', borderRadius:'8px' ,height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(70%)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>WOMENS</h2>
            <button
              onClick={() => window.location.href = '/womens'}
              style={{
                padding: '0.8rem 2rem',
                backgroundColor: '#F361AF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;
