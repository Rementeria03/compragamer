import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CategorysContainer from "../components/CategorysContainer/CatergorysContainer";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [view, setView] = useState(false);

  function showCategorys() {
    setView(!view);
  }

  return (
    <Box
      w="full"
      h="full"
      display="flex"
      position="relative"
      justifyContent="center"
      gap="10px"
      flexWrap="wrap"
      sx={{
        "@media screen and (max-width: 940px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Box
        display="none"
        alignItems="center"
        justifyContent="center"
        as="button"
        height="40px"
        backgroundColor="#fd611a"
        p="10px 20px"
        borderRadius="base"
        color="#ffff"
        fontWeight="medium"
        m="10px 0"
        fontFamily="Urbanist"
        boxShadow="1px 1px .3em grey"
        onClick={showCategorys}
        sx={{
          "@media screen and (max-width: 940px)": {
            display: "flex",
          },
        }}
      >
        Ver categorias
      </Box>
      <CategorysContainer view={view}></CategorysContainer>
      <ProductsContainer
        productos={productos}
        setProductos={setProductos}
      ></ProductsContainer>
    </Box>
  );
}

export default Productos;
