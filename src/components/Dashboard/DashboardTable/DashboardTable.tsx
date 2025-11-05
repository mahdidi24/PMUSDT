import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { TextField, Typography, Box, useTheme, Button, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const columns: GridColDef[] = [
  {
    field: "From",
    headerName: "Form",
    width: 70,
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, string>) => {
      const value = params.value;

      const icons: Record<string, string> = {
        USDT: "/theter.png",
      };

      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "10px",
          }}
        >
          <img
            src={icons[value as string]}
            width="28"
            height="28"
            style={{ borderRadius: "50%" }}
            alt={value}
          />
          <Typography fontSize="14px">{value}</Typography>
        </Box>
      );
    },
  },
  {
    field: "To",
    headerName: "To",
    width: 130,
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, string>) => {
      const value = params.value;

      const icons: Record<string, string> = {
        PM: "/pm.png",
      };

      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <img
            src={icons[value as string]}
            width="28"
            height="28"
            style={{ borderRadius: "50%" }}
            alt={value}
          />
          <Typography fontSize="14px">{value}</Typography>
        </Box>
      );
    },
  },
  { field: "Amount", headerName: "Amount", width: 130, flex: 1 },
  {
    field: "Recived",
    flex: 1,
    headerName: "Recived",
  },
  {
    field: "Date",
    headerName: "Date",
    flex: 1,
    type: "number",
    width: 90,
  },
  {
    field: "Status",
    headerName: "Status",
    flex: 1,
    width: 90,
    renderCell: (params: GridRenderCellParams<any, string>) => {
      const value = params.value;

      let color: any = "primary";
      let text: string | undefined = value;

      if (value === "successful") {
        color = "#40A578";
        text = "Successful";
      } else if (value === "unsuccessful") {
        color = "#F66066";
        text = "unsuccessful";
      } else if (value === "checking") {
        color = "#F3AC76";
        text = "Checking";
      }

      return (
        <Button
          sx={{
            width: "90px",
            backgroundColor: color,
            boxShadow: "none",
            color: "#343434",
            fontSize: "12px",
            cursor: "auto",
            p: "5px 20px",
          }}
          size="small"
        >
          {text}
        </Button>
      );
    },
  },
  {
    field: "Link",
    headerName: "Link",
    flex: 1,
    width: 90,
    
  },
];

const rows = [
  {
    id: 1,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "unsuccessful",
    Link: "See More",
  },
  {
    id: 2,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "checking",
    Link: "See More",
  },
  {
    id: 3,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 4,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 5,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 6,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 7,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 8,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 9,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "unsuccessful",
    Link: "See More",
  },
  {
    id: 10,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "checking",
    Link: "See More",
  },
  {
    id: 11,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 12,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "unsuccessful",
    Link: "See More",
  },
  {
    id: 13,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
  {
    id: 14,
    From: "USDT",
    To: "PM",
    Amount: "1000",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "See More",
  },
];

export default function DashboardTable() {
  const [page , setPage] = useState(1)
  const pageSize = 7
  const theme = useTheme();

  const start = (page - 1) * pageSize
  const end = start + pageSize
  const paginatedRow = rows.slice (start , end)
  const pageCount = Math.ceil (rows.length / pageSize)


  return (
    <Paper
      sx={{ height: "100%", width: "100%", borderRadius: "20px", padding: 3 , boxShadow : 0}}
    >
      <Box
        display="flex"
        alignItems="center"
        px="20px"
        borderRadius={theme.shape.borderRadius}
        sx={{
          marginBottom: 3,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <SearchIcon />
        <TextField
          fullWidth
          placeholder="Search..."
          variant="outlined"
          sx={{
            m: 0,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
            },
          }}
        />
      </Box>
      <Typography
        variant="h4"
        color={theme.palette.text.secondary}
        sx={{marginTop:'41px', marginBottom: 3, fontSize: "24px" }}
      >
        Latest Transactions
      </Typography>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={paginatedRow}
          columns={columns}
          hideFooter
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: "10px",
            border: "solid 1px #313A4B",
            "& .MuiDataGrid-cell": {
              borderTop: "solid 1px #313A4B",
              textAlign: "center",
              overflow: "visible !important",
              textOverflow: "unset !important",
              whiteSpace: "normal !important",
            },
            
            "& .MuiDataGrid-cellContent": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "1px solid #313A4B",
              textAlign: "center",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              justifyContent: "center",
            },
            "& .MuiDataGrid-footerContainer": {
              display: "none",
              minHeight: 0,
              height: 0,
            },
            "& .MuiDataGrid-columnSeparator": { display: "none" },
            "& .MuiDataGrid-filler": { display: "none" },
          }}
          disableColumnSorting
          disableColumnMenu
          disableColumnFilter
          // pageSizeOptions={[7]}
        />
      </Box>

      <Pagination count={pageCount} page={page} onChange={(_, value) => setPage(value)} sx={{justifyContent : 'center', display : 'flex', padding : 2 , "& .MuiPaginationItem-root.Mui-selected": {
                              backgroundColor: "#40A578",
                              boxShadow: "0px 4px 10px 0px #40A57880",
                              color: "#fff",
                            },
                            "& .MuiPaginationItem-root": {
                              border: "1px solid #313A4B",
                              color:theme.palette.text.secondary
                            },
                            "& .MuiPaginationItem-previousNext": {
                              display: "none",
                            },  }}/>
    </Paper>
  );
}
