import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Fetchcards = () => {
  const [adjointesData, setAdjointesData] = useState([]);
  const [conjointesData, setConjointesData] = useState([]);
  const [error, setError] = useState(null);
  const adjointesRefs = useRef([]);
  const conjointesRefs = useRef([]);

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

    fetchAdjointes();
    fetchConjointes();
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

  return (
    <div className="card-container">
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
// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// const Fetchcards = () => {
//   const [adjointesData, setAdjointesData] = useState([]);
//   const [conjointesData, setConjointesData] = useState([]);
//   const [error, setError] = useState(null);
//   const cardsContainerRef = useRef(null);

// /////// Fetch des tables adjointes et conjointes ///////
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
//     return <p>Erreur: {error}</p>;
//   }

// /////// Manipulation du DOM avec QuerySelector ///////
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
//   },
// [adjointesData, conjointesData]
// );

//   return (
//     <div className="card-container" ref={cardsContainerRef}>
//       <div className="cards-wrapper">
//         <div className="card-section">
//           <h2 className="card-title">Prothèses Adjointes</h2>
//           <div className="card-list">
//             {adjointesData.map((item) => (
//               <div
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
//             {conjointesData.map((item) => (
//               <div
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

