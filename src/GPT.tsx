import React, { useState, useEffect } from "react";
import {
  Button,
  Snackbar,
  SnackbarContent,
  Typography,
  Box
} from "@mui/material";

type CounterProps = {
  name: string;
  value: number;
  onChange: (value: number) => void;
};

const Counter = ({ name, value, onChange }: CounterProps) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Typography>{name}</Typography>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography>{value}</Typography>
    </div>
  );
};

type InfoBarProps = {
  message: string | undefined;
  onClose: () => void;
};

const InfoBar = ({ message, onClose }: InfoBarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    //   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
        <SnackbarContent message={message} />
    </Snackbar>
  );
};

type AppProps = {};

const DraftApp = ({}: AppProps) => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  });

  const [infoMessage, setInfoMessage] = useState<string | undefined>(undefined);

  const handleCounterChange = (name: string, value: number) => {
    setCounters({ ...counters, [name]: value });
    setInfoMessage(`カウンター${name}の値が${value - counters[name]}増えました`);
  };

  const handleResetClick = () => {
    setCounters({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    setInfoMessage("すべてのカウンターをリセットしました");
  };

  const handleSpecialButtonClick = () => {
    const decreaseAmounts = { A: 2, B: 1, D: 4 };
    let canDecrease = true;

    for (const [name, amount] of Object.entries(decreaseAmounts)) {
      if (counters[name] < amount) {
        canDecrease = false;
        setInfoMessage(`カウンター${name}の値が足りません`);
      }
    }

    if (canDecrease) {
      const newCounters = { ...counters };
      for (const [name, amount] of Object.entries(decreaseAmounts)) {
        newCounters[name] -= amount;
        setInfoMessage(`カウンター${name}の値が${amount}減りました`);
      }
      setCounters(newCounters);
      setInfoMessage("特殊ボタンを発動しました");
    }
  };

  const handleInfoBarClose = () => {
    setInfoMessage(undefined);
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {Object.entries(counters).map(([name, value]) => (
        <Counter
          key={name}
          name={name}
          value={value}
          onChange={(value) => handleCounterChange(name, value)}
        />
      ))}
      <div style={{ display: "flex", gap: "16px" }}>
        <Button variant="contained" onClick={handleResetClick}>
          リセット
        </Button>
        <Button variant="contained" onClick={handleSpecialButtonClick}>
          特殊ボタン
        </Button>
      </div>
      <Box>{infoMessage}</Box>
    </div>
    <InfoBar message={infoMessage} onClose={handleInfoBarClose} />
    </>
  );
};

export default DraftApp;
