import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Ecosystem = () => {
  return (
    <>
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
    </>
  );
};

export default Ecosystem;