import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Style/Navbar.scss';
import ReorderIcon from '@mui/icons-material/Reorder';
import ButtonUnderlined from './ButtonUnderlined';

const Navbar = ({ skillsRef, projectRef, experienceRef, contactRef }) => {
  const [expendNavbar, setExpendNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpendNavbar(false);
  }, [location]);

  return (
    <div className='navbar' id={expendNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button
          onClick={() => {
            setExpendNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <button
          onClick={(e) =>
            skillsRef.current?.scrollIntoView(
              { behavior: 'smooth' },
              e.preventDefault()
            )
          }
        >
          <ButtonUnderlined text='Skills' mode='light' />
        </button>
        <button
          onClick={(e) =>
            projectRef.current?.scrollIntoView(
              { behavior: 'smooth' },
              e.preventDefault()
            )
          }
        >
          <ButtonUnderlined text='Projets' mode='light' />
        </button>
        <button
          onClick={(e) =>
            experienceRef.current?.scrollIntoView(
              { behavior: 'smooth' },
              e.preventDefault()
            )
          }
        >
          <ButtonUnderlined text='Expériences' mode='light' />
        </button>
        <button
          onClick={(e) =>
            contactRef.current?.scrollIntoView(
              { behavior: 'smooth' },
              e.preventDefault()
            )
          }
        >
          <ButtonUnderlined text='Contact' mode='light' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
