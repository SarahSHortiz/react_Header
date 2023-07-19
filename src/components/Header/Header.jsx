import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#f59e07",
  padding: "10px 20px",
  
});

const HeaderLink = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
  textDecoration: "none",
  
    
  },
}));

export default function Header() {
  return (
    <>
    <HeaderBox>
      <HeaderLink style={{
        fontFamily: "Calibri",
        fontSize: '38px',
        lineHeight: "normal",
        marginLeft:'5%',
        }} 
        href="/">Pet Feliz</HeaderLink>
      <div style={{marginRight: '5%'}}>
        <HeaderLink component="a" href="/">
        <Button variant="text" style={{ color:"black" }}>Sobre Nós</Button>
        </HeaderLink>
        <HeaderLink component="a" href="/">
        <Button variant="text" style={{ color:"black" }}>Adote</Button>
        </HeaderLink>
        <HeaderLink component="a" href="/">
        <Button variant="text" style={{ color:"black" }}>Doe</Button>
        </HeaderLink>
        <HeaderLink component="a" href="/">
        <Button variant="text" style={{ color:"black" }}>FAQ</Button>
        </HeaderLink>
        <HeaderLink component="a" href="/">
        <Button variant="text" style={{ color:"black", fontWeight: "bold", }}>Login</Button>
        </HeaderLink>
        <Button style={{ backgroundColor: 'black', color: 'white', borderRadius:'20px', }} component="a" href="/" variant="contained">
          Cadastrar-se
        </Button>
      </div>
    </HeaderBox>
    </>
  );
}
