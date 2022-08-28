import { faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Typography, InputBase, Paper } from "@mui/material";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Ecosystem = () => {
  return (
    <>
      {/* begin: Reimagine Section */}
      <div className="px-[5%] mt-12 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2">
          <Typography variant="h1" className="pb-4 text-center md:text-left">
            Reimagine your world
          </Typography>
          <Typography color="text.secondary" className="text-center md:text-left">
            Through simple, secure, and scalable technology, Cascadia empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.
          </Typography>
        </div>
        <div className="flex flex-col">
          <Typography color="text.secondary" className="uppercase text-center sm:text-left">
            This week
          </Typography>
          <Typography variant="h4" className="py-2 text-center sm:text-left">
            Ecosystem Panel: Helping the Climate with Web3
          </Typography>
          <Typography color="text.secondary" className="pb-6 flex-auto text-center sm:text-left">
            Town halls are taking on a new format with a transition into Ecosystem Panels. <br/>
            Join us this Friday for the first one.
          </Typography>
          <Button variant="outlined" color="secondary" className="w-full sm:w-fit">
            Develop with Cascadia
          </Button>
        </div>
        <div className="flex flex-col">
          <Typography color="text.secondary" className="uppercase text-center sm:text-left">
            Featured
          </Typography>
          <Typography variant="h4" className="py-2 text-center sm:text-left">
            Early Bird Tickets for CascadiaCON are live
          </Typography>
          <Typography color="text.secondary" className="pb-6 flex-auto text-center sm:text-left">
            Join the Sophon community, Web3 ecosystem, and 200+ hackers IRL in Lisbon, Portugal from Sept 11-14. Immerse yourself in talks, networking, workshops, and more. Prices increase after July 31st.
          </Typography>
          <Button variant="outlined" color="secondary" className="w-full sm:w-fit">
            Register Today
          </Button>
        </div>
      </div>
      {/* end: Reimagine Section */}

      {/* begin: Account and Path Section */}
      <div className="mx-[5%] mt-24 lg:grid grid-cols-4 gap-x-10 relative">
        <div className="lg:col-start-3 col-span-2">
          <Typography variant="h1" className="text-center md:text-left">
            Create an account & choose a path
          </Typography>
          <Typography color="text.secondary" className="py-6 text-center md:text-left">
            The best way to stake your claim in the Cascadia verse is by creating an account (wallet). Then, choose the first step in your journey.
          </Typography>
          <Button variant="contained" color="secondary" className="w-full sm:w-fit">
            Create an Account
          </Button>
        </div>
        <div className="hidden lg:grid col-start-2 col-span-3 bg-white p-6 grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <Avatar className="bg-primary" color="primary">
                <FontAwesomeIcon icon={faImages} className="text-grey-light"/>
              </Avatar>
              <Typography variant="h2">Build</Typography>
            </div>
            <Typography color="text.secondary" className="py-4">
              Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.
            </Typography>
            <Button variant="outlined" color="secondary" className="w-fit normal-case">
              I'm a Developer
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <Avatar className="bg-primary" color="primary">
                <FontAwesomeIcon icon={faImages} className="text-grey-light"/>
              </Avatar>
              <Typography variant="h2">Grow</Typography>
            </div>
            <Typography color="text.secondary" className="py-4 flex-auto">
              Startup or grow up on a platform that sets you up for success. Investors, partners, and users are waiting.
            </Typography>
            <Button variant="outlined" color="secondary" className="w-fit normal-case">
              I'm a Founder / Creator
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <Avatar className="bg-primary" color="primary">
                <FontAwesomeIcon icon={faImages} className="text-grey-light"/>
              </Avatar>
              <Typography variant="h2">Develop</Typography>
            </div>
            <Typography color="text.secondary" className="py-4 flex-auto">
              When you find your purpose, you find your people. Pick a wallet, create an account, and start contributing today.
            </Typography>
            <Button variant="outlined" color="secondary" className="w-fit normal-case">
              Explore Community
            </Button>
          </div>
        </div>
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Paper className="p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <Avatar className="bg-primary" color="primary">
                <FontAwesomeIcon icon={faImages} className="text-grey-light"/>
              </Avatar>
              <Typography variant="h2">Build</Typography>
            </div>
            <Typography color="text.secondary" className="py-4">
              Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.
            </Typography>
            <Button variant="outlined" color="secondary" className="normal-case w-full sm:w-fit">
              I'm a Developer
            </Button>
          </Paper>
          <Paper className="p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <Avatar className="bg-primary" color="primary">
                <FontAwesomeIcon icon={faImages} className="text-grey-light"/>
              </Avatar>
              <Typography variant="h2">Grow</Typography>
            </div>
            <Typography color="text.secondary" className="py-4 flex-auto">
              Startup or grow up on a platform that sets you up for success. Investors, partners, and users are waiting.
            </Typography>
            <Button variant="outlined" color="secondary" className="normal-case w-full sm:w-fit">
              I'm a Founder / Creator
            </Button>
          </Paper>
          <Paper className="p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <Avatar className="bg-primary" color="primary">
                <FontAwesomeIcon icon={faImages} className="text-grey-light"/>
              </Avatar>
              <Typography variant="h2">Develop</Typography>
            </div>
            <Typography color="text.secondary" className="py-4 flex-auto">
              When you find your purpose, you find your people. Pick a wallet, create an account, and start contributing today.
            </Typography>
            <Button variant="outlined" color="secondary" className="normal-case w-full sm:w-fit">
              Explore Community
            </Button>
          </Paper>
        </div>
        <div className="hidden lg:block absolute top-0 left-0 -z-10 w-1/2 h-full pr-10">
          <div className="w-full h-full bg-[#E9EBEE]" />
        </div>
      </div>
      {/* end: Account and Path Section */}

      {/* begin: Community Section */}
      <div className="mx-[5%] my-24 gap-x-10 text-center">
        <Typography variant="h1" color="primary" className="pb-6">
          Cascadia Community
        </Typography>
        <Typography variant="h3" color="text.secondary" className="font-normal pb-12">
          Join the movement. Follow along, meet fellow builders on Discord or get updates.
        </Typography>        
        <div className="flex items-center bg-white w-full lg:w-1/3 sm:w-1/2 border border-primary mx-auto mb-6">
          <FontAwesomeIcon icon={faEnvelope} className="text-grey-dark p-2" />
          <InputBase placeholder="Receive email updates" className="flex-auto"/>
          <Button variant="contained">Subscribe</Button>
        </div>
        <div className="flex items-center justify-center gap-16 mt-12">
          <Link to="#">
            <FontAwesomeIcon icon={faDiscord} className="text-primary text-5xl" />            
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faTwitter} className="text-primary text-5xl" />
          </Link>
        </div>
      </div>
      {/* end: Community Section */}
    </>
  );
};

export default Ecosystem;