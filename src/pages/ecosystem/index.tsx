import { Button, Typography } from "@mui/material";

const Ecosystem = () => {
  return (
    <>
      {/* begin: Section 1 */}
      <div className="bg-primary bg-opacity-10 px-[5%] mt-[-76px] pt-[140px]">
        <div className="w-1/3">
          <Typography variant="h1">
            A <span className="text-primary">Better Future</span> requires a <br/>
            <span className="text-primary">Better Foundation</span>
          </Typography>
          <Typography className="py-6">
            Decentralized Oracle Network provide tamper-proof inputs, outputs, and computations to support advanced smart contracs on any blockchain.
          </Typography>
          <div className="flex gap-6 mt-3 pb-16">
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
      <div className="px-[5%] mt-24 grid grid-cols-4 gap-5">
        <div className="col-span-2">
          <Typography variant="h1" className="pb-4">
            Reimagine your world
          </Typography>
          <Typography color="text.secondary">
            Through simple, secure, and scalable technology, NEAR empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.
          </Typography>
        </div>
        <div>
          <Typography color="text.secondary" className="uppercase">
            This week
          </Typography>
          <Typography variant="h4" className="py-1">
            Ecosystem Panel: Helping the Climate with Web3
          </Typography>
          <Typography color="text.secondary" className="pb-6">
            Town halls are taking on a new format with a transition into Ecosystem Panels. <br/>
            Join us this Friday for the first one.
          </Typography>
          <Button variant="outlined" color="secondary">
            Develop with Cascadia
          </Button>
        </div>
        <div>
          <Typography color="text.secondary" className="uppercase">
            Featured
          </Typography>
          <Typography variant="h4" className="py-1">
            Early Bird Tickets for NEARCON are live
          </Typography>
          <Typography color="text.secondary" className="pb-6">
            Join the Sophon community, Web3 ecosystem, and 200+ hackers IRL in Lisbon, Portugal from Sept 11-14. Immerse yourself in talks, networking, workshops, and more. Prices increase after July 31st.
          </Typography>
          <Button variant="outlined" color="secondary">
            Register Today
          </Button>
        </div>
      </div>
      {/* end: Section 2 */}
      
    </>
  );
};

export default Ecosystem;