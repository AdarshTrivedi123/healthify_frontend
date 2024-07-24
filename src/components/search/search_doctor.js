import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './search_doctor.css';

const SearchDoctorPage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const doctors = [
    {
      name: "Dr. John Doe",
      qualifications: "MBBS, MD",
      location: "New York, NY",
      description: "Experienced in treating various medical conditions.",
    },
    {
      name: "Dr. Jane Smith",
      qualifications: "MBBS, MD",
      location: "Los Angeles, CA",
      description: "Specializes in chronic disease management.",
    },
    {
      name: "Dr. Alice Brown",
      qualifications: "MBBS, MD",
      location: "Chicago, IL",
      description: "Expert in preventive medicine and health education.",
    },
    {
      name: "Dr. Mark Wilson",
      qualifications: "MBBS, MD",
      location: "Houston, TX",
      description: "Renowned for patient-centered care and treatment.",
    },
    {
      name: "Dr. Linda Davis",
      qualifications: "MBBS, MD",
      location: "Phoenix, AZ",
      description: "Skilled in diagnosing and treating various ailments.",
    },
    {
      name: "Dr. Michael Johnson",
      qualifications: "MBBS, MD",
      location: "Philadelphia, PA",
      description: "Focuses on holistic and integrative approaches.",
    },
    {
      name: "Dr. Michael Johnson",
      qualifications: "MBBS, MD",
      location: "Philadelphia, PA",
      description: "Focuses on holistic and integrative approaches.",
    },
    {
      name: "Dr. Michael Johnson",
      qualifications: "MBBS, MD",
      location: "Philadelphia, PA",
      description: "Focuses on holistic and integrative approaches.",
    },
  ];

  const faqs = [
    {
      question: "What is a general physician?",
      answer: "A general physician is a doctor who treats acute and chronic illnesses and provides preventive care and health education.",
    },
    {
      question: "What is a pediatrician?",
      answer: "A pediatrician is a medical doctor who manages the physical, behavioral, and mental health of children from birth until age 18.",
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website or by calling our customer service.",
    },
    {
      question: "What should I bring to my appointment?",
      answer: "You should bring your ID, insurance card, and any relevant medical records.",
    },
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans. Please contact our office for more details.",
    },
  ];

  return (
    <div className="search-doctor-page">
      <div className="search-filters">
        {/* <input
          type="text"
          className="search-input"
          placeholder={<><FontAwesomeIcon icon={faLocationDot} /> Filter based on City</>}
        /> */}

        <input
          type="text"
          className="search-input"
          placeholder="&#x1F4CD; Filter based on City"
        />
        <input
          type="text"
          className="search-input"
          placeholder="Filter based on Specialization"
        />
      </div>

      <div className="doctor-section">
        <h2 className="searchtype_heading">General Physicians</h2>
        <div className="doctor-cards">
          {doctors.slice(0, 4).map((doctor, index) => (
            <div className="doctor-card-wrap" key={index}>
              <div className="doctor-card">
                <h3>{doctor.name}</h3>
                <p>{doctor.qualifications}</p>
                <p>{doctor.location}</p>
                <p>{doctor.description}</p>
              </div>
              <button className="doctor-card-button"><a href="/profiledoc">View Profile</a></button>
            </div>
          ))}
        </div>
        <div className="doctor-cards">
          {doctors.slice(3, 6).map((doctor, index) => (
            <div className="doctor-card-wrap" key={index}>
              <div className="doctor-card">
                <h3>{doctor.name}</h3>
                <p>{doctor.qualifications}</p>
                <p>{doctor.location}</p>
                <p>{doctor.description}</p>
              </div>
              <button className="doctor-card-button">View Profile</button>
            </div>
          ))}
        </div>
      </div>

      <div className="doctor-section">
        <h2 className="searchtype_heading">Pediatrician</h2>
        <div className="doctor-cards">
          {doctors.slice(0, 4).map((doctor, index) => (
            <div className="doctor-card-wrap" key={index}>
              <div className="doctor-card">
                <h3>{doctor.name}</h3>
                <p>{doctor.qualifications}</p>
                <p>{doctor.location}</p>
                <p>{doctor.description}</p>
              </div>
              <button className="doctor-card-button">View Profile</button>
            </div>
          ))}
        </div>
        <div className="doctor-cards">
          {doctors.slice(4, 8).map((doctor, index) => (
            <div className="doctor-card-wrap" key={index}>
              <div className="doctor-card">
                <h3>{doctor.name}</h3>
                <p>{doctor.qualifications}</p>
                <p>{doctor.location}</p>
                <p>{doctor.description}</p>
              </div>
              <button className="doctor-card-button">View Profile</button>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-section">
        <h2>FAQ</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question}
              <span className="dropdown-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            <hr className="faq-divider" />
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default SearchDoctorPage;
