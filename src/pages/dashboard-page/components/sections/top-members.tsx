import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";

function createData(image: string, name: string, date: string) {
  return { image, name, date };
}

const rows = [
  createData("https://i.pravatar.cc/200?u=4", "Harry Porter", "2 Jan 2021"),
  createData("https://i.pravatar.cc/200?u=4", "Andrew Garfield", "2 Jan 2021"),
  createData("https://i.pravatar.cc/200?u=4", "Tylor Swift", "2 Jan 2021"),
  createData("https://i.pravatar.cc/200?u=4", "Harry Styles", "2 Jan 2021"),
];
const TopMembers = () => {
  return (
    <TableContainer sx={{ background: "#eeeeee"}} component={Paper} style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontSize: "12px", fontWeight: "600", width: "60%" }}
            >
              TOP MEMBERS
            </TableCell>
            <TableCell align="right" sx={{ fontSize: "12px", width: "40%" }}>
              MEMBER SINCE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                <div className="flex items-center">
                <img
                  src={row.image}
                  alt="User Image"
                  className="rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
                <span className="ml-3">{row.name}</span>
                </div>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopMembers;
