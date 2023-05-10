import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  // background: theme.palette.common.white,
  [theme.breakpoints.up("sm")]: {
    height: 70,
  },
}));

export default Toolbar;
