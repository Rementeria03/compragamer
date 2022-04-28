import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import "./navInp.css";
import { BsSearch } from "react-icons/bs";

function NavInp({ searchKey, setSearchKey }) {
  const handleActualizar = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <Box
      className="navInp"
      sx={{
        "@media (max-width: 584px)": {
          mt: 2,
          mx: 2,
        },
      }}
    >
      <InputGroup
        w="100%"
        h="max"
        display="flex"
        alignItems="center"
        fontFamily="Urbanist"
      >
        <Input
          w="100%"
          h="52px"
          value={searchKey}
          onChange={handleActualizar}
          placeholder="Buscador"
          _placeholder={{
            color: "#888",
          }}
        />
        <InputRightElement
          top="10%"
          children={<BsSearch w={8} h={8} color="#888" />}
        />
      </InputGroup>
    </Box>
  );
}

export default NavInp;
