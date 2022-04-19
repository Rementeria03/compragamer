import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

export const AccordionHelp = () => {
  const styles = {
    subtittle: {
      marginBottom: "20px",
      color: "#ff7c40",
    },
    accPanel: {
      fontSize: "14",
    },
  };
  return (
    <Box boxShadow="xl">
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Realizar un pedido
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={styles.subtittle}>¿Cómo realizo un pedido?</h4>
            Solo tenés que seleccionar todos los productos que deseas adquirir.
            Seguidamente, en el carrito de compras, para conocer el costo del
            envío colocás tu código postal en el recuadro correspondiente,
            elegís la mensajería de tu preferencia y debajo seleccionas la forma
            de pago. Luego hacés clic en el botón COMPRAR y podés acceder como
            cliente (si ya tenés cuenta en Compra Gamer) o crear un cliente
            nuevo. Por último, completás los pasos brindados por el asistente,
            hasta confirmar la compra. Se te asignará un número de pedido y se
            mostrarán los datos del mismo. También enviaremos un mail a tu
            correo electrónico registrado con los detalles del pedido realizado.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Precio
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿El precio que figura en la web es el precio final?
            </h4>
            Todos los precios en la web incluyen el IVA, y se encuentran
            expresados en pesos argentinos.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Formas de pago
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Cuáles son las formas de pago?
            </h4>
            Contamos con dos formas de pago: a través de depósito/transferencia
            bancaria, con la cual obtenés el precio especial, o bien, a través
            de los métodos Pago Gamer (Visa o MasterCard) o MercadoPago
            (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar
            en cuotas, al precio de lista.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Depósito - Transferencia bancaria
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Cómo abono a través de depósito/transferencia?
            </h4>
            Una vez se realiza el pedido, te facilitamos los datos del CBU.
            Debes abonar e informar el pago desde nuestra web, antes de la fecha
            de vencimiento de la reserva.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Pago Gamer
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Qué es Pago Gamer?
            </h4>
            Es un método exclusivo de Compra Gamer, para abonar de manera online
            a través de tarjetas Visa y Mastercard, con el cual podés acceder a
            3 y 12 cuotas sin interés si empleas una tarjeta de crédito brindada
            por una entidad bancaria.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                MercadoPago
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Cómo puedo abonar a través de MercadoPago?
            </h4>
            Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se
            puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil
            (se abona al precio de lista, pero no se pueden hacer cuotas, sólo
            se puede abonar en un pago); y realizando una transferencia desde tu
            cuenta de MercadoPago.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Envíos
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Cómo gestiono el envío de mi pedido?
            </h4>
            En primer lugar, para conocer el costo del envío, una vez al
            agregues al carrito tu compra, solo debes colocar tu código postal
            en el recuadro correspondiente, seleccionar la mensajería de tu
            preferencia y elegir si deseas el retiro en alguna sucursal o la
            entrega a domicilio. Actualmente realizamos envíos a todo el país
            través de Oca y Andreani; y si te encontrás en CABA o alrededores,
            podrás seleccionar el servicio de Mensajería Privada que es
            exclusivo de Compra Gamer. Tené en cuenta que, para calcular el
            costo del envío, se toman en consideración tanto las dimensiones y
            peso del paquete como la distancia de la localidad de entrega.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Facturación
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Cómo tramito la factura de mi compra?
            </h4>
            En todas las compras efectuadas en la web, brindamos sin excepción
            alguna, la factura de compra. Una vez que realiza y abona el pedido,
            enviamos a tu dirección de correo electrónico la factura
            correspondiente. Por supuesto, también podés descargarla desde la
            sección Mi cuenta, Mis facturas. En caso de que precises factura A,
            solo debes ingresar tu CUIT al cargar el pedido por la web. Tené en
            cuenta que la factura A puede tener percepciones.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Garantías
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Cómo utilizo el servicio de PosVenta y garantías?
            </h4>
            {`Para realizar consultas/reclamos relacionadas con la garantía o
                devolución de alguna de tus compras, al final de esta sección
                contamos con el apartado “Compra Gamer te ayuda. ¿Cuál es tu
                consulta?” donde debes exponer tu caso, seleccionando el motivo de
                “Posventa” que se adapte a tu requerimiento y uno de nuestros
                representantes te ofrecerá la información correspondiente sobre cómo
                proceder. En caso de preferir venir a la empresa a gestionar un tema
                de PosVenta o garantía, podés hacerlo sacando un turno haciendo `}
            <Link to="/">CLICK ACÁ</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Canjes y promociones
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Cómo obtengo el juego y/o beneficios de los productos en
              promoción?
            </h4>
            {`Todos los canjes de los juegos y/o beneficios se realizan de forma
                posterior a la entrega del producto y son totalmente digitales. Los
                canjes se realizan desde `}
            <Link to="/"> ACÁ </Link>
            {` con los datos de la factura de compra y
                el mail registrado en la compra. Se toma como fecha válida, para la
                vigencia de las promociones, el día en que fue creado el pedido y no
                la fecha de pago, ni la fecha de emisión de la factura. Considerá
                que, si realizó la compra del producto en promoción, en tiempo y
                forma pero no puede realizar el canje dentro de la fecha, ello se
                debe a que no se cuenta con stock de códigos. Así mismo, sepa que la
                disponibilidad de códigos es limitada, y una vez que se agotan, no
                será posible realizar el canje.`}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="16px">
                Gamercoins
              </Box>
              <AccordionIcon color="#ff7c40" />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={styles.accPanel}>
            <h4 style={{ marginBottom: "20px", color: "#ff7c40" }}>
              ¿Qué son los Gamercoins?
            </h4>
            {`Es un beneficio que brinda COMPRA GAMER a sus clientes, premiando
                sus compras. Se pueden utilizar en descuentos parciales sobre
                cualquier producto que se encuentre en stock en la web de Compra
                Gamer Para mayor información, le invitamos a consultar el siguiente
                enlace: `}
            <Link to="/">ACÁ</Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
