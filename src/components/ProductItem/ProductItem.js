import { Box, Button, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductItem({...prod}) {

    const {agregarAlCarrito, estaEnCarrito, setCart, cart} = useContext(CartContext);

    function handleAdd() {
      if (!estaEnCarrito(prod.id)) {
        agregarAlCarrito({ ...prod, cantidad: 1 });
      } else {
        setCart(
          cart.map((item) => {
            if (item.id === prod.id) {
              return { ...item, cantidad: item.cantidad + 1 };
            } else {
              return item;
            }
          })
        );
      }
    }

    return (
      <Box
        maxW="lg"
        mt="3"
        p="3"
        gap="10px"
        display="flex"
        flexWrap="wrap"
        boxShadow="xl"
        borderRadius="base"
        sx={{
          "@media (max-width: 520px)": {
            flexDir: "column",
            alignItems: "center",
          },
        }}
      >
        <Image src={prod.img} />
        <Box
          minW="320px"
          display="flex"
          justifyContent="space-around"
          flexDirection="column"
          sx={{
            "@media (max-width: 520px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Box as="h3">{prod.nombre}</Box>
          <Box as="h4">
            <Box as="span" color="gray.600" fontSize="sm">
              $
            </Box>
            {prod.precio}
          </Box>
          <Button
            as="button"
            w="min"
            display="flex"
            alignItems="center"
            height="40px"
            backgroundColor="#fd611a"
            borderRadius="base"
            color="#ffff"
            fontWeight="light"
            fontFamily="Urbanist"
            boxShadow="1px 1px .3em grey"
            onClick={handleAdd}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    );
}

export default ProductItem;