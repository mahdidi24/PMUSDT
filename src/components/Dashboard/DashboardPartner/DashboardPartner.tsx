import {
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  Typography,
  useTheme,
  Dialog,
  DialogContent,
  TextField, IconButton,
} from "@mui/material";
import { useState } from "react";

import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import CloseIcon from '@mui/icons-material/Close';

const columns: GridColDef[] = [
  {
    field: "Amount",
    headerName: "Amount",
    width: 70,
    flex: 1,
    renderCell: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "18px",
          justifyContent: "center",
        }}
      >
        <img
          src="/theter.png"
          width="28"
          height="28"
          style={{ borderRadius: "50%" }}
          alt="USDT"
        />
        <Typography fontSize="14px">100</Typography>
      </Box>
    ),
  },
  {
    field: "To",
    headerName: "To",
    width: 130,
    flex: 2,
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
];

const rows = [
  {
    id: 1,
    Amount: "100",
    To: "x09aa998ee454c456255daf3ac94908f1dcfb7033",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "unsuccessful",
    Link: "see more",
  },
  {
    id: 2,
    Amount: "100",
    To: "x09aa998ee454c456255daf3ac94908f1dcfb7033",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "checking",
    Link: "see more",
  },
  {
    id: 3,
    Amount: "100",
    To: "x09aa998ee454c456255daf3ac94908f1dcfb7033",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "see more",
  },
  {
    id: 4,
    Amount: "100",
    To: "x09aa998ee454c456255daf3ac94908f1dcfb7033",
    Recived: "1200",
    Date: "25-02-2023",
    Status: "successful",
    Link: "see more",
  },
];

function DashboardPartner() {
  const [openD , setOpenD] = useState(false)
  const [open, setOpen] = useState(false);
  const affiliateLink =
    "https://en.flashobmen.com/ref/acc0c4c8-c799-4216-a281-6d3d3c43a480";
  const theme = useTheme();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(affiliateLink);
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleOpen = () => setOpenD(true);
  const handleClose = () => setOpenD(false);

  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "20px",
        padding: 2,
        boxShadow: 0,
        display: "flex",
      }}
    >
      <Box>
        <Box sx={{ width: "100%", flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "start", marginBottom: "15px", fontSize:'20px', color:'#ABABAB'}}
          >
            Your Affiliate Link :
          </Typography>
          <Stack direction="row" width="100%" position={'relative'}>
            <Typography
              variant="subtitle1"
              color={theme.palette.text.primary}
              sx={{
                flexGrow: 1,
                paddingRight: "20px",
                textAlign: "start",
                padding: 2,
                backgroundColor: theme.palette.background.default,
                borderRadius: "10px"
                
              }}
            >
              https://en.flashobmen.com/ref/acc0c4c8-c799-4216-a281-6d3d3c43a480
            </Typography>
            <Button
              onClick={handleCopy}
              startIcon={<img src="copy.png" />}
              sx={{
                alignItems: "center",
                backgroundColor: "#353F50",
                boxShadow: 0,
                width:'106px',
                position:'absolute',
                right:'0',
                height:'60px',
                color:'#ABABAB'
              }}
            >
              Copy
            </Button>
          </Stack>
        </Box>
        <Stack direction="row" sx={{ marginTop: 2, gap: 2 }}>
          <Stack direction="row">
            <Stack
              direction="row"
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                padding: 2,
                backgroundColor: theme.palette.background.default,
                borderRadius: "10px",
              }}
            >
              <Box
                width="67px"
                height="67px"
                sx={{
                  borderRadius: "100%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#40A578",
                  boxShadow: "0px 4px 10px 0px #40A57880",
                }}
              >
                <DiamondOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="h6" color={theme.palette.text.primary}>
                  Your Wallet Balance{" "}
                </Typography>
                <Typography variant="h5" color="#40A578">
                  320 USDT
                </Typography>
              </Box>
              <Button
              onClick={handleOpen}
                sx={{
                  width: "133px",
                  height: "51px",
                  alignItems: "center",
                  marginLeft: 9,
                  backgroundColor: '#40A578',
                  boxShadow :0
                }}
              >
                Withdraw
              </Button>
            </Stack>
          </Stack>

          <Stack direction="row">
            <Stack
              direction="row"
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                padding: 2,
                backgroundColor: theme.palette.background.default,
                borderRadius: "10px",
              }}
            >
              <Box
                width="67px"
                height="67px"
                sx={{
                  borderRadius: "100%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#F05A7E",
                  boxShadow: "0px 4px 10px 0px #F05A7E80",
                }}
              >
                <DiamondOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="h6" color={theme.palette.text.primary}>
                  Your Friends
                </Typography>
                <Typography variant="h5" color="#F05A7E">
                  32
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginTop: 1,
            marginBottom: 5,
          }}
        >
          <Typography variant="subtitle1" color="#ABABAB">
            Get 10
          </Typography>
          <DiamondOutlinedIcon color="success" />
          <Typography variant="subtitle1" color="#ABABAB">
            For Each Invited User
          </Typography>
        </Stack>
        <Box sx={{ marginY: 3 }}>
          <Typography variant="h5" color="primary">
            Your Impressions
          </Typography>
        </Box>

        <DataGrid
        rowHeight={65}
          rows={rows}
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
            marginBottom: 5,
          }}
          disableColumnSorting
          disableColumnMenu
          disableColumnFilter
          // pageSizeOptions={[7]}
        />
      </Box>
      <Dialog open={openD} onClose={handleClose}  PaperProps={{
          sx: {
            borderRadius: "16px",
            padding: 2,
            minWidth: 700,
            height : 370,
            backgroundColor: theme.palette.background.paper,
          },
        }}>
            <DialogContent sx={{width : '100%' }}>
                <Stack direction='row' sx={{alignItems : 'center' , paddingBottom : 2 , borderBottom : '1px solid #364153'}}>
                <Typography sx={{fontSize:'32px', width:'100%', display:'flex'  }}>Withdraw</Typography>
                <IconButton aria-label="" onClick={handleClose}>
                  <CloseIcon sx={{color :theme.palette.text.primary}}/>
                </IconButton>
                </Stack>
                <Typography variant="subtitle1" color="secondry" sx={{ marginY : 2 , padding : '5px'}}>Your Wallet Address (Tether TRC20)</Typography>
                <TextField sx={{width:'100%' , backgroundColor : theme.palette.background.default}}
                label='Address'
                />
                <Button sx={{width:'100%', padding : 2 , marginTop : 3}}>Confirm</Button>
            </DialogContent>

      </Dialog>



      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="✅ Link copied!"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Paper>
  );
}

export default DashboardPartner;
