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
    </>
  );
};

export default Ecosystem;