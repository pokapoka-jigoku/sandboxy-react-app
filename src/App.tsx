import { useState } from 'react';
import './App.css';
import {Button, Container, Box, Grid, Paper, AppBar, Typography} from "@mui/material";
import {shadows, spacing, display, grid} from "@mui/system";
import {  PossessedResources } from './features/PossessedResources';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2)
}));
const Footer = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1),
}));
const InfoBar = styled(Paper)(({theme}) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(2)
}));
const ButtonMenu = styled(Box)(({theme}) => ({
  margin: theme.spacing(1)
}));

function App() {
  const [possessedResources, setPossessedResources] = useState(new PossessedResources(0, 0, 0, 0, 0));
  const [infoText, setInfoText] = useState("ここに情報が表示されます。");
  const iconSet = {
    wool: "🐑",
    wood: "🌲",
    wheat: "🌾",
    brick: "🧱",
    ore: "🪨"
  };
  const woolProps = {
    icon: iconSet.wool,
    name: "羊毛",
    number: possessedResources.wool,
    increment: () => {
      // setInfoText((text) => "Wool was incremented.");
      setPossessedResources((res) => res.incrementWool());
    },
    decrement: () => setPossessedResources((res) => res.decrementWool()),
  };
  const woodProps = {
    icon: iconSet.wood,
    name: "木材",
    number: possessedResources.wood,
    increment: () => setPossessedResources((res) => res.incrementWood()),
    decrement: () => setPossessedResources((res) => res.decrementWood()),
  };
  const wheatProps = {
    icon: iconSet.wheat,
    name: "小麦",
    number: possessedResources.wheat,
    increment: () => setPossessedResources((res) => res.incrementWheat()),
    decrement: () => setPossessedResources((res) => res.decrementWheat()),
  };
  const brickProps = {
    icon: iconSet.brick,
    name: "土材",
    number: possessedResources.brick,
    increment: () => setPossessedResources((res) => res.incrementBrick()),
    decrement: () => setPossessedResources((res) => res.decrementBrick()),
  };
  const oreProps = {
    icon: iconSet.ore,
    name: "石材",
    number: possessedResources.ore,
    increment: () => setPossessedResources((res) => res.incrementOre()),
    decrement: () => setPossessedResources((res) => res.decrementOre()),
  };

  return (
    <div className="App">
      <Header>
        <Typography fontSize="large">Katan Dashboard</Typography>
      </Header>

      <Container maxWidth="sm">
        <InfoBar>
          {infoText}
        </InfoBar>
        <ButtonMenu>
          <Button variant="contained"
          onClick={() => setPossessedResources((res) => res.setToZero())}
          sx={{m: 1}}
          >
            初期化
          </Button>
          <Button variant="contained"
          onClick={() => setPossessedResources((res) => res)}
          sx={{m: 1}}
          >
            ＊
          </Button>
          <Button variant="contained"
          onClick={() => setPossessedResources((res) => res)}
          sx={{m: 1}}
          >
            ＊
          </Button>
        </ButtonMenu>
        <Paper sx={{m: 1, p: 2}}>
          <ResourceItemRow {...woolProps}></ResourceItemRow>
          <ResourceItemRow {...woodProps}></ResourceItemRow>
          <ResourceItemRow {...wheatProps}></ResourceItemRow>
          <ResourceItemRow {...brickProps}></ResourceItemRow>
          <ResourceItemRow {...oreProps}></ResourceItemRow>
        </Paper>
        <ButtonMenu>
          <Button variant="contained"
          onClick={() => setPossessedResources((res) => res)}
          sx={{m: 1}}
          >
            未実装
          </Button>
          <Button variant="contained"
          onClick={() => setPossessedResources((res) => res)}
          sx={{m: 1}}
          >
            未実装
          </Button>
        </ButtonMenu>
      </Container>

      <Footer>
        <Typography fontSize="small">開発中のアプリのため、動作の保証はありません。</Typography>
      </Footer>
    </div>
  )
}

interface ResourceItemRowProps {
  icon: String,
  name: String,
  number: number,
  increment: () => void,
  decrement: () => void,
};

const ResourceItemRow = (props: ResourceItemRowProps) => {
  const {icon, name, number, increment, decrement} = props;
  return (
    <Grid container spacing={1} alignItems="center" justifyItems="center"
     sx={{m: 1}}
    >
    <Grid item xs={2}><Box>{icon}</Box></Grid>
    <Grid item xs={2}><Box>{name}</Box></Grid>
    <Grid item xs={2}><Box>{number} 個</Box></Grid>
    <Grid item xs={3}>
      <Button variant="contained" onClick={increment}>＋</Button>
    </Grid>
    <Grid item xs={3}>
      <Button variant="contained" onClick={decrement}>−</Button>
    </Grid>
  </Grid>
);
}

export default App
