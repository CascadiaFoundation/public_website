import { Link } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  
  return (
    <div className="px-[5%] bg-primary">
      <div className="grid grind-cols-2 sm:grid-cols-6 my-8 sm:my-16 gap-y-8 lg:gap-y-0">
        <div className="sm:col-span-2 lg:col-span-1 grid sm:block grid-cols-2">
          <Typography color="white" variant="h2" className="pb-6">Cascadia</Typography>
          <div className="flex flex-col gap-1">
            <Link to="#" className="text-grey-light hover:text-white text-right sm:text-left">
              Wallet
            </Link>
            <Link to="#" className="text-grey-light hover:text-white text-right sm:text-left">
              Explorer
            </Link>
            <Link to="#" className="text-grey-light hover:text-white text-right sm:text-left">
              Cascadia Bridge
            </Link>
            <Link to="#" className="text-grey-light hover:text-white text-right sm:text-left">
              Brand Toolkit
            </Link>
          </div>
        </div>
        <div className="hidden sm:block col-span-2 lg:col-span-1">
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
        <div className="hidden sm:block col-span-2 lg:col-span-1">
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
        <div className="hidden sm:block col-span-2 lg:col-span-1">
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
        <div className="hidden sm:block col-span-2 lg:col-span-1">
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
        <div className="hidden sm:block col-span-2 lg:col-span-1">
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
      <div className="block sm:hidden mb-8">
        <Accordion className="bg-primary before:bg-transparent">
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} color="white" size="sm" />}
          >
            <Typography color="white" variant="h4">Learn</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-primary before:bg-grey-light">
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} color="white" size="sm" />}
          >
            <Typography color="white" variant="h4">Build</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-primary before:bg-grey-light">
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} color="white" size="sm" />}
          >
            <Typography color="white" variant="h4">Grow</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-primary before:bg-grey-light">
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} color="white" size="sm" />}
          >
            <Typography color="white" variant="h4">Belong</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-primary before:bg-grey-light">
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} color="white" size="sm"/>}
          >
            <Typography color="white" variant="h4">Choose a Path</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
      </div>


      <div className="pb-6 flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between">
        <div className="flex items-center  gap-6">
          <Link to="#" className="text-grey-light hover:text-white">Privacy Policy</Link>
          <Link to="#" className="text-grey-light hover:text-white">Terms of Use</Link>
        </div>
        <Typography className="text-grey-light hidden md:block">@ 2022 Cascadia</Typography>
        <Typography className="text-grey-light">contact@cascadia.foundation</Typography>
      </div>
    </div>
  );
};

export default Footer;