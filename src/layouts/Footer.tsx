import { Link } from 'react-router-dom'
import { Button, InputBase, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  
  return (
    <div className="px-[5%] bg-primary">
      <div className="grid grid-cols-6 my-16">
        <div>
          <Typography color="white" variant="h2" className="pb-6">Cascadia</Typography>
          <div className="flex flex-col gap-1">
            <Link to="#" className="text-grey-light hover:text-white">
              Wallet
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Explorer
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Cascadia Bridge
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Brand Toolkit
            </Link>
          </div>
        </div>
        <div>
          <Typography color="white" variant="h4" className="pb-4">Learn</Typography>
          <div className="flex flex-col gap-1">
            <Link to="#" className="text-grey-light hover:text-white">
              Platform
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Blog
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Technology
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Use Cases
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Education
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              About
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Careers
            </Link>
          </div>
        </div>
        <div>
          <Typography color="white" variant="h4" className="pb-4">Build</Typography>
          <div className="flex flex-col gap-1">
            <Link to="#" className="text-grey-light hover:text-white">
              Documentation
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Platform
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Office Hours
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Examples
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Bounties
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Security Report
            </Link>
          </div>
        </div>
        <div>
          <Typography color="white" variant="h4" className="pb-4">Grow</Typography>
          <div className="flex flex-col gap-1">
            <Link to="#" className="text-grey-light hover:text-white">
              Work with Us
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Grants & Funding
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Join the Accelerator
            </Link>
          </div>
        </div>
        <div>
          <Typography color="white" variant="h4" className="pb-4">Belong</Typography>
          <div className="flex flex-col gap-1">
            <Link to="#" className="text-grey-light hover:text-white">
              Open Web Sandbox
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Guilds
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              DAOs
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Events
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Community Blog
            </Link>
          </div>
        </div>
        <div>
          <Typography color="white" variant="h4" className="pb-4">Choose a Path</Typography>
          <div className="flex flex-col gap-1">
            <Link to="#" className="text-grey-light hover:text-white">
              Developer Path
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Founder Path
            </Link>
            <Link to="#" className="text-grey-light hover:text-white">
              Community Path
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-white w-1/2 p-[2px] mx-auto mb-6">
        <FontAwesomeIcon icon={faEnvelope} className="text-grey-dark p-2" />
        <InputBase placeholder="Receive email updates" className="flex-auto"/>
        <Button variant="contained">Subscribe</Button>
      </div>

      <div className="py-6 flex items-center justify-between">
        <Typography className="text-grey-light">@ 2022 Cascadia</Typography>
        <div className="flex items-center gap-6">
          <Link to="#" className="text-grey-light hover:text-white">Privacy Policy</Link>
          <Link to="#" className="text-grey-light hover:text-white">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;