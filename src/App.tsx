import "react";
import { useState } from 'react';
import './App.css';
import {Button, Container, Box, Grid, Paper, AppBar, Typography} from "@mui/material";
import {shadows, spacing, display, grid} from "@mui/system";
import { PossessedResources, CanInvestSpecification } from './features/PossessedResources';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {usePossessedResourcesState} from './hooks/usePossessedResourcesState';

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
  // const [possessedResources, setPossessedResources] = useState(new PossessedResources(0, 0, 0, 0, 0));
  const [infoText, setInfoText] = useState("ここに情報が表示されます。");
  const [possessedResources, increment, decrement, invest, reset] = usePossessedResourcesState();
  const iconSet = {
    wool: "🐑",
    wood: "🌲",
    wheat: "🌾",
    brick: "🧱",
    ore: "🪨"
  };
  const woolProps: ResourceItemRowProps = {
    icon: iconSet.wool,
    name: "羊毛",
    number: possessedResources.wool,
    increment: () => {
      increment("Wool")();
      setInfoText(`羊毛を１つ増やしました（${possessedResources.wool + 1} 個）`);
    },
    decrement: () => {
      decrement("Wool")();
      if(possessedResources.wool < 1) {
        setInfoText(`羊毛を持っていません。`);
      } else {
        setInfoText(`羊毛を１つ減らしました（${possessedResources.wool - 1} 個）`);
      }
    },
  };
  const woodProps: ResourceItemRowProps = {
    icon: iconSet.wood,
    name: "木材",
    number: possessedResources.wood,
    increment: () => {
      increment("Wood")();
      setInfoText(`木材を１つ増やしました（${possessedResources.wood + 1} 個）`);
    },
    decrement: () => {
      decrement("Wood")();
      if(possessedResources.wood < 1) {
        setInfoText(`木材を持っていません。`);
      } else {
        setInfoText(`木材を１つ減らしました（${possessedResources.wood - 1} 個）`);
      }
    },
  };
  const wheatProps: ResourceItemRowProps = {
    icon: iconSet.wheat,
    name: "小麦",
    number: possessedResources.wheat,
    increment: () => {
      increment("Wheat")();
      setInfoText(`小麦を１つ増やしました（${possessedResources.wheat + 1} 個）`);
    },
    decrement: () => {
      decrement("Wheat")();
      if(possessedResources.wheat < 1) {
        setInfoText(`小麦を持っていません。`);
      } else {
        setInfoText(`小麦を１つ減らしました（${possessedResources.wheat - 1} 個）`);
      }
    },
  };
  const brickProps: ResourceItemRowProps = {
    icon: iconSet.brick,
    name: "土材",
    number: possessedResources.brick,
    increment: () => {
      increment("Brick")();
      setInfoText(`土材を１つ増やしました（${possessedResources.brick + 1} 個）`);
    },
    decrement: () => {
      decrement("Brick")();
      if(possessedResources.brick < 1) {
        setInfoText(`土材を持っていません。`);
      } else {
        setInfoText(`土材を１つ減らしました（${possessedResources.brick - 1} 個）`);
      }
    },
  };

  const oreProps: ResourceItemRowProps = {
    icon: iconSet.ore,
    name: "石材",
    number: possessedResources.ore,
    increment: () => {
      increment("Ore")();
      setInfoText(`石材を１つ増やしました（${possessedResources.ore + 1} 個）`);
    },
    decrement: () => {
      decrement("Ore")();
      if(possessedResources.ore < 1) {
        setInfoText(`石材を持っていません。`);
      } else {
        setInfoText(`石材を１つ減らしました（${possessedResources.ore - 1} 個）`);
      }
    },
  };

  return (
    <div className="App">
      <Header>
        <Typography fontSize="large">Katan Dashboard</Typography>
      </Header>

      <Container maxWidth="md">
        <InfoBar>
          {infoText}
        </InfoBar>
        <ButtonMenu>
          <Button variant="contained"
          onClick={() => {
            setInfoText("手持ち資源をリセットしました。");
            reset();
          }}
          sx={{m: 1}}
          >
            初期化
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
          <Button variant="outlined"
          onClick={() => {
            if(new CanInvestSpecification().isSatisfiedForRoadBy(possessedResources)){
              invest("Road")();
              setInfoText("街道をつくりました！");
            } else {
              setInfoText("資源が足りません。");
            }
          }}
          sx={{m: 1}}
          >
            街道　{iconSet.brick}{iconSet.wood}
          </Button>
          <Button variant="outlined"
          onClick={() => {
            if(new CanInvestSpecification().isSatisfiedForFrontierBy(possessedResources)){
              invest("Frontier")();
              setInfoText("開拓地をつくりました！");
            } else {
              setInfoText("資源が足りません。");
            }
          }}
          sx={{m: 1}}
          >
            開拓地　{iconSet.brick}{iconSet.wood}{iconSet.wheat}{iconSet.wool}
          </Button>
          <Button variant="outlined"
          onClick={() => {
            if(new CanInvestSpecification().isSatisfiedForUrbanizationBy(possessedResources)){
              invest("Urbanization")();
              setInfoText("都市をつくりました！");
            } else {
              setInfoText("資源が足りません。");
            }
          }}
          sx={{m: 1}}
          >
            都市　{iconSet.wheat}{iconSet.wheat}{iconSet.ore}{iconSet.ore}{iconSet.ore}
          </Button>
          <Button variant="outlined"
          onClick={() => {
            if(new CanInvestSpecification().isSatisfiedForDevelopmentBy(possessedResources)){
              invest("Development")();
              setInfoText("開発を行ないました！");
            } else {
              setInfoText("資源が足りません。");
            }
          }}
          sx={{m: 1}}
          >
            発展　{iconSet.wheat}{iconSet.ore}{iconSet.wool}
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

const ResourceItemRow: React.FC<ResourceItemRowProps> = (props: ResourceItemRowProps) => {
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
