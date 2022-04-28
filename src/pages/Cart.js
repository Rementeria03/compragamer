import { Box, Button, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import CartTable from "../components/CartTable/CartTable";
import { CorreoSelect } from "../components/CorreoSelect/CorreoSelect";
import { DescuentoGamer } from "../components/DescuentoGamer/DescuentoGamer";
import { Facturacion } from "../components/Facturacion/Facturacion";
import { GamerCoins } from "../components/GamerCoins/GamerCoins";
import { MetodoDePago } from "../components/MetodoDepago/MetodoDePago";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { cart, vaciarCarrito } = useContext(CartContext);
  const [datosEnvio, setDatosEnvio] = useState({
    enviarA: "",
    cp: "",
    codigoDescuento: false,
    gamerCoins: false,
    metodoDePago: "",
    nameAndSurname: "",
    direction: "",
    dni: "",
  });

  function handlerPedidos() {
    Swal.fire({
      icon: "success",
      title: "Su pedido esta en camino!",
      text: `su numero de seguimiento: ---`
    })
    setDatosEnvio({
      enviarA: "",
      cp: "",
      codigoDescuento: false,
      gamerCoins: false,
      metodoDePago: "",
      nameAndSurname: "",
      direction: "",
      dni: "",
    });
    vaciarCarrito()
  }

  return (
    <Box
      w="full"
      h="full"
      px={8}
      py={4}
      height="full"
      display="flex"
      flexDir="column"
      gap="30px"
      alignItems="center"
      justifyContent="center"
      fontFamily="Urbanist"
      sx={{
        "@media screen and (max-width: 521px)": {
          px: 1,
        },
      }}
    >
      <Box
        my="8"
        fontSize="18px"
        fontWeight="500"
        w="full"
        as="h1"
        sx={{
          // Carrito de compras h1
          "@media screen and (max-width: 521px)": {
            ml: 3,
          },
        }}
      >
        Carrito de compras
      </Box>
      {cart.length > 0 ? (
        <>
          <CartTable />
          <CorreoSelect datosEnvio={datosEnvio} setDatosEnvio={setDatosEnvio} />
          <GamerCoins datosEnvio={datosEnvio} setDatosEnvio={setDatosEnvio} />
          <DescuentoGamer
            datosEnvio={datosEnvio}
            setDatosEnvio={setDatosEnvio}
          />
          <Facturacion datosEnvio={datosEnvio} setDatosEnvio={setDatosEnvio} />
          <MetodoDePago datosEnvio={datosEnvio} setDatosEnvio={setDatosEnvio} />
          <Button
            onClick={handlerPedidos}
            color="#fff"
            bg="#fd611a"
            alignSelf="flex-end"
          >
            Comprar
          </Button>
        </>
      ) : (
        <Text>Su carrito está vacio</Text>
      )}
    </Box>
  );
}

export default Cart;
