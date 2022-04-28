import logo from "../../img/logo-compragamer.png";
import { Box } from "@chakra-ui/react";

function Logo() {
  return (
    <Box as="a" href="/">
      <img src={logo} alt="logo compraGamer" />
    </Box>
  );
}

export default Logo;
