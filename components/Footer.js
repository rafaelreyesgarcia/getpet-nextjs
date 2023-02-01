import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='flex-row'>
        <div>
          <h2>get in touch</h2>
          <div>
            <h3>socials</h3>
            <Link href="https://www.facebook.com/Petservicesinelmwoodpark">
              <FacebookIcon />
            </Link>
          </div>
          <div>
            <h3>email</h3>
            <Link href="mailto:kelleypetlover@gmail.com">kelleypetlover@gmail.com</Link>
          </div>
          <div>
            <h3>phone</h3>
            <Link href="tel:+17087699451">708-769-9451</Link>
          </div>
        </div>
        <div className='flex-column'>
          <div>
            <h2>services</h2>
            <div className='flex-column'>
              <Link href="/services">Dog Walking</Link>
              <Link href="/services">Pet Sitting</Link>
              <Link href="/services">Yard Cleanups</Link>
            </div>
          </div>
          <div>
            <h2>Hours</h2>
            <p><b>Monday - Saturday</b></p>
            <p><b>10:00am - 4:00pm</b></p>
          </div>
        </div>
        <div>
          <h2>area</h2>
        </div>
      </div>
      <div className='accent'>&#169; 2023 GetPet Elmwood Park, Chicago, Il</div>
    </footer>
  );
}

export default Footer;