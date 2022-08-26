import { faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Ecosystem = () => {
  return (
    <>
      {/* begin: Section 1 */}
      <div className="bg-primary bg-opacity-10 px-[5%] mt-[-76px] pt-[140px]">
        <div className="w-full md:w-1/2 sm:w-3/4">
          <Typography variant="h1">
            A <span className="text-primary">Better Future</span> requires a <span className="text-primary">Better Foundation</span>
          </Typography>
          <Typography className="py-6">
            Decentralized Oracle Network provide tamper-proof inputs, outputs, and computations to support advanced smart contracs on any blockchain.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-3 pb-16">
            <Button variant="contained">
              Develop with Cascadia
            </Button>
            <Button variant="outlined">
              Explore solutions
            </Button>
          </div>
        </div>
      </div>
      {/* end: Section 1 */}

      {/* begin: Section 2 */}
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
          <Typography color="text.secondary" className="uppercase">
            This week
          </Typography>
          <Typography variant="h4" className="py-2">
            Ecosystem Panel: Helping the Climate with Web3
          </Typography>
          <Typography color="text.secondary" className="pb-6 flex-auto">
            Town halls are taking on a new format with a transition into Ecosystem Panels. <br/>
            Join us this Friday for the first one.
          </Typography>
          <Button variant="outlined" color="secondary" className="w-full sm:w-fit">
            Develop with Cascadia
          </Button>
        </div>
        <div className="flex flex-col">
          <Typography color="text.secondary" className="uppercase">
            Featured
          </Typography>
          <Typography variant="h4" className="py-2">
            Early Bird Tickets for CascadiaCON are live
          </Typography>
          <Typography color="text.secondary" className="pb-6 flex-auto">
            Join the Sophon community, Web3 ecosystem, and 200+ hackers IRL in Lisbon, Portugal from Sept 11-14. Immerse yourself in talks, networking, workshops, and more. Prices increase after July 31st.
          </Typography>
          <Button variant="outlined" color="secondary" className="w-full sm:w-fit">
            Register Today
          </Button>
        </div>
      </div>
      {/* end: Section 2 */}
      
      {/* begin: Section 3 */}
      <div className="px-[5%] mt-12 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div>
          <Typography variant="h3">
            Founders
          </Typography>
          <Typography color="text.secondary" className="py-6">
            The Creator Economy requires robust infrastructure including a set of intuitive developer tools, and an engaged, decentralized community.
          </Typography>
          <Link to="#" className="text-primary">
            Learn aboutthe Creator Ecosystem on Cascadia
          </Link>
        </div>
        <div className="w-full h-[300px] bg-[#E9EBEE] hidden sm:block" />
      </div>
      {/* end: Section 3 */}
      
      {/* begin: Section 4 */}
      <div className="px-[5%] mt-12 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="w-full h-[300px] bg-[#E9EBEE] hidden sm:block " />
        <div>
          <Typography variant="h3">
            Creators
          </Typography>
          <Typography color="text.secondary" className="py-6">
            Cascadia is eliminating the barriers to Web 3 adoption. With high speeds, low fees, and progressive UX, Cascadia's climate-neutral blockchain is ready for explosive growth.
          </Typography>
          <Link to="#" className="text-primary">
            Follow progress on sharding
          </Link>
        </div>
      </div>
      {/* end: Section 4 */}
      
      {/* begin: Section 5 */}
      <div className="px-[5%] my-12 sm:my-24 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div>
          <Typography variant="h3">
            Developers
          </Typography>
          <Typography color="text.secondary" className="py-6">
            Cascadia runs in concert with Ethereum, Polkadot, Cosmos, and more, allowing for the free flow of assets and communication between networks for the betterment of all.
          </Typography>
          <div className="flex flex-col gap-2">
            <Link to="#" className="text-primary">
              Aurora: Ethereum Bridge & EVM
            </Link>
            <Link to="#" className="text-primary">
              Octopus Network: App Chain Interoperability
            </Link>
            <Link to="#" className="text-primary">
              Allbridge: Bridge from Solana, Terra, Celo & More
            </Link>
          </div>
        </div>
        <div className="w-full h-[300px] bg-[#E9EBEE] hidden sm:block" />
      </div>
      {/* end: Section 5 */}

      {/* begin: Section 6 */}
      {/* <div className="mx-[5%] my-24 grid grid-cols-4 gap-x-10 relative">
        <div className="col-start-3 col-span-2">
          <Typography variant="h1">
            Create an account & choose a path
          </Typography>
          <Typography color="text.secondary" className="py-6">
            The best way to stake your claim in the Sophon verse is by creating an account (wallet). Then, choose the first step in your journey.
          </Typography>
          <Button variant="contained" color="secondary">
            Create an Account
          </Button>
        </div>
        <div className="col-start-2 col-span-3 bg-white p-6 grid grid-cols-3 gap-6 mt-8">
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
            <Button variant="outlined" color="secondary" className="w-fit">
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
            <Button variant="outlined" color="secondary" className="w-fit">
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
            <Button variant="outlined" color="secondary" className="w-fit">
              Explore Community
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 -z-10 w-1/2 h-full pr-10">
          <div className="w-full h-full bg-[#E9EBEE]" />
        </div>
      </div> */}
      {/* end: Section 6 */}
    </>
  );
};

export default Ecosystem;