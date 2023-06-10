import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = ["Modulo", "Minimo partecipanti", "Quota di partecipazione"];

const rows = [
  createData("Uscita ½ giornata", 5, "€ 45"),
  createData("Uscita 1 giornata", 5, "€ 75"),
  createData("Corso base (4 giornate)", 5, "€ 200"),
  createData("Corso di perfezionamento (4 giornate)", 5, "€ 250"),
  createData("Corso di altura (1 week end)", 5, "€ 160"),
];

function createData(name: string, minPerson: number, price: string) {
  return { name, minPerson, price };
}

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell align="left">{columns[0]}</TableCell>
            <TableCell align="left">{columns[1]}</TableCell>
            <TableCell align="left">{columns[2]}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.minPerson}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
