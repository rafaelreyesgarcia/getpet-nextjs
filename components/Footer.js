import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className='
        snap-start flex flex-col relative h-screen justify-end
        snap-y snap-mandatory overflow-hidden'
    >
      <div className='w-[500px] mx-auto hidden md:block'>
        <img src='/footer.png' className='w-full object-cover'/>
      </div>
      {/* CONTENT */}
      <div
        className='
          flex flex-col justify-evenly text-center
          md:flex-row snap-start overflow-y-scroll pt-32 md:pt-0 md:overflow-y-hidden'
      >
        {/* GET IN TOUCH */}
        <div
          className='
            flex-col items-center justify-center gap-4 p-4'
        >
          <h2 className='font-heading uppercase text-lg mb-2'>get in touch</h2>
          {/* SOCIALS, EMAIL, PHONE */}
          <div
            className='
              flex justify-center gap-4
              md:flex-col'
          >
            <div>
              <h3 className='font-heading uppercase'>socials</h3>
              <Link
                href="https://www.facebook.com/Petservicesinelmwoodpark"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
            </div>
            <div>
              <h3 className='font-heading uppercase'>email</h3>
              <Link href="mailto:kelleypetlover@gmail.com" className='font-body'>kelleypetlover@gmail.com</Link>
            </div>
            <div>
              <h3 className='font-heading uppercase'>phone</h3>
              <Link href="tel:+17087699451">708-769-9451</Link>
            </div>
          </div>
        </div>
        {/* SERVICES & HOURS */}
        <div className='flex flex-col items-center gap-4 p-4'>
          <div>
            <h2 className='font-heading uppercase text-lg mb-2'>services</h2>
            <div
              className='
                flex gap-4
                md:flex-col'
            >
              <Link
                href="/services"
                className="
                  uppercase rounded-lg
                  px-2
                  bg-gradient-to-l from-indigo-500/40 to-blue-500/40
                hover:from-indigo-500 hover:to-blue-500"
              >
                Dog Walking
              </Link>
              <Link
                href="/services"
                className="
                  uppercase rounded-lg
                  px-2
                  bg-gradient-to-l from-indigo-500/40 to-blue-500/40
                hover:from-indigo-500 hover:to-blue-500"
              >
                Pet Sitting
              </Link>
              <Link
                href="/services"
                className="
                  uppercase rounded-lg
                  px-2
                  bg-gradient-to-l from-indigo-500/40 to-blue-500/40
                hover:from-indigo-500 hover:to-blue-500"
              >
                waste cleanups
              </Link>
            </div>
          </div>
          <div>
            <h2 className='font-heading uppercase text-lg mb-2'>Hours</h2>
            <p><b>Monday - Saturday</b></p>
            <p><b>10:00am - 4:00pm</b></p>
          </div>
        </div>
        {/* AREA & MAP */}
        <div
          className='
            flex flex-col items-center gap-4 p-4'
        >
          <h2 className='font-heading uppercase text-lg'>area</h2>
          <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
            <ul className='hidden md:flex gap-2 capitalize md:flex-col'>
              <li className='item'>elmwood park</li>
              <li className='item'>montclare</li>
              <li className='item'>galewood</li>
              <li className='item'>river grove</li>
              <li className='item'>franklin park</li>
            </ul>
            <div className=''>
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1pbrOtULe9fHZLC8FxSbUcK9YsjrUOfA&ehbc=2E312F" height="200"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center pt-4'>&#169; 2023 GetPet Elmwood Park, Chicago, Il</div>
    </footer>
  );
}

export default Footer;