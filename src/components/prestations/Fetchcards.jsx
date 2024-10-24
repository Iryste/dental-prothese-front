// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// const Fetchcards = () => {
//   const [adjointesData, setAdjointesData] = useState([]);
//   const [conjointesData, setConjointesData] = useState([]);
//   const [error, setError] = useState(null);
//   const adjointesRefs = useRef([]);
//   const conjointesRefs = useRef([]);
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     const fetchAdjointes = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/adjointes');
//         setAdjointesData(response.data['hydra:member']);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     const fetchConjointes = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/conjointes');
//         setConjointesData(response.data['hydra:member']);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchAdjointes();
//     fetchConjointes();
//   }, []);

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   const createRef = (index) => {
//     adjointesRefs.current[index] = adjointesRefs.current[index] || React.createRef();
//     return adjointesRefs.current[index];
//   };

//   const createRefConjointes = (index) => {
//     conjointesRefs.current[index] = conjointesRefs.current[index] || React.createRef();
//     return conjointesRefs.current[index];
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const card = entry.target;
//           card.classList.add('visible');
//           observer.unobserve(card);
//         }
//       });
//     });

//     adjointesRefs.current.forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     conjointesRefs.current.forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [adjointesData, conjointesData]);


//   useEffect(() => {
//     const handleMouseEnter = (event) => {
//       event.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
//     };

//     const handleMouseLeave = (event) => {
//       event.currentTarget.style.boxShadow = 'none';
//     };

//     const cardElements = cardsContainerRef.current.querySelectorAll('.card');

//     cardElements.forEach((card) => {
//       card.addEventListener('mouseenter', handleMouseEnter);
//       card.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       cardElements.forEach((card) => {
//         card.removeEventListener('mouseenter', handleMouseEnter);
//         card.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, [adjointesData, conjointesData]);
//   return (
//     <div className="card-container" ref={cardsContainerRef}>
//       <div className="cards-wrapper">
//         <div className="card-section">
//           <h2 className="card-title">Prothèses Adjointes</h2>
//           <div className="card-list">
//             {adjointesData.map((item, index) => (
//               <div
//                 ref={createRef(index)}
//                 key={item.id}
//                 className="card"
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="card-section">
//           <h2 className="card-title">Prothèses Conjointes</h2>
//           <div className="card-list">
//             {conjointesData.map((item, index) => (
//               <div
//                 ref={createRefConjointes(index)}
//                 key={item.id}
//                 className="card"
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fetchcards;





















// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// const Fetchcards = () => {
//   const [adjointesData, setAdjointesData] = useState([]);
//   const [conjointesData, setConjointesData] = useState([]);
//   const [error, setError] = useState(null);
//   const adjointesRefs = useRef([]);
//   const conjointesRefs = useRef([]);
//   const cardsContainerRef = useRef(null);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchAdjointes = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/adjointes');
//         setAdjointesData(response.data['hydra:member']);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     const fetchConjointes = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/conjointes');
//         setConjointesData(response.data['hydra:member']);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchAdjointes();
//     fetchConjointes();
//   }, []);

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Create refs for adjointes and conjointes cards
//   const createRef = (index) => {
//     adjointesRefs.current[index] = adjointesRefs.current[index] || React.createRef();
//     return adjointesRefs.current[index];
//   };

//   const createRefConjointes = (index) => {
//     conjointesRefs.current[index] = conjointesRefs.current[index] || React.createRef();
//     return conjointesRefs.current[index];
//   };

//   // Observe visibility of cards and add animations
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const card = entry.target;
//           card.classList.add('visible');
//           observer.unobserve(card);
//         }
//       });
//     });

//     adjointesRefs.current.forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     conjointesRefs.current.forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [adjointesData, conjointesData]);

//   // Handle mouse enter and leave events for card lift effect
//   useEffect(() => {
//     const handleMouseEnter = (event) => {
//       event.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
//       event.currentTarget.style.transform = 'translateY(-10px)';
//     };

//     const handleMouseLeave = (event) => {
//       event.currentTarget.style.boxShadow = 'none';
//       event.currentTarget.style.transform = 'translateY(0)';
//     };

//     const cardElements = cardsContainerRef.current.querySelectorAll('.card');

//     cardElements.forEach((card) => {
//       card.addEventListener('mouseenter', handleMouseEnter);
//       card.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       cardElements.forEach((card) => {
//         card.removeEventListener('mouseenter', handleMouseEnter);
//         card.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, [adjointesData, conjointesData]);

//   return (
//     <div className="card-container" ref={cardsContainerRef}>
//       <div className="cards-wrapper">
//         <div className="card-section">
//           <h2 className="card-title">Prothèses Adjointes</h2>
//           <div className="card-list">
//             {adjointesData.map((item, index) => (
//               <div
//                 ref={createRef(index)}
//                 key={item.id}
//                 className="card"
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="card-section">
//           <h2 className="card-title">Prothèses Conjointes</h2>
//           <div className="card-list">
//             {conjointesData.map((item, index) => (
//               <div
//                 ref={createRefConjointes(index)}
//                 key={item.id}
//                 className="card"
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fetchcards;








import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Fetchcards = () => {
  const [adjointesData, setAdjointesData] = useState([]);
  const [conjointesData, setConjointesData] = useState([]);
  const [materiauxData, setMateriauxData] = useState({});
  const [error, setError] = useState(null);
  const adjointesRefs = useRef([]);
  const conjointesRefs = useRef([]);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const fetchAdjointes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/adjointes');
        setAdjointesData(response.data['hydra:member']);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchConjointes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/conjointes');
        setConjointesData(response.data['hydra:member']);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchMateriaux = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/materiaus');
        const materiauxMap = response.data['hydra:member'].reduce((map, materiau) => {
          map[materiau['@id']] = materiau;
          return map;
        }, {});
        setMateriauxData(materiauxMap);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAdjointes();
    fetchConjointes();
    fetchMateriaux();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const createRef = (index) => {
    adjointesRefs.current[index] = adjointesRefs.current[index] || React.createRef();
    return adjointesRefs.current[index];
  };

  const createRefConjointes = (index) => {
    conjointesRefs.current[index] = conjointesRefs.current[index] || React.createRef();
    return conjointesRefs.current[index];
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          card.classList.add('visible');
          observer.unobserve(card);
        }
      });
    });

    adjointesRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    conjointesRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [adjointesData, conjointesData]);

  // DOM manipulation for card lift effect
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
      event.currentTarget.style.transform = 'translateY(-10px)'
    };

    const handleMouseLeave = (event) => {
      event.currentTarget.style.boxShadow = 'none';
      event.currentTarget.style.transform = 'translateY(0)';
      event.currentTarget.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    };

    const cardElements = cardsContainerRef.current.querySelectorAll('.card');

    cardElements.forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cardElements.forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [adjointesData, conjointesData]);

  return (
    <div className="card-container" ref={cardsContainerRef}>
      <div className="cards-wrapper">
        <div className="card-section">
          <h2 className="card-title">Prothèses Adjointes</h2>
          <div className="card-list">
            {adjointesData.map((item, index) => (
              <div
                ref={createRef(index)}
                key={item.id}
                className="card"
              >
                <h3>{item.title}</h3>
                <p className='card-materiau'>{materiauxData[item.materiau]?.title || 'Matériau non spécifié'}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-section">
          <h2 className="card-title">Prothèses Conjointes</h2>
          <div className="card-list">
            {conjointesData.map((item, index) => (
              <div
                ref={createRefConjointes(index)}
                key={item.id}
                className="card"
              >
                <h3>{item.title}</h3>
                <p className='card-materiau'>{materiauxData[item.materiau]?.title || 'Matériau non spécifié'}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetchcards;
