"use client";
import Head from "next/head";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
  DialogTitle,
  IconButton,
  DialogContent,
  TextField,
  Dialog,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import privateAxiosClient from "src/configs/httpClient/privateAxiosClient";
import publicAxiosClient from "src/configs/httpClient/publicAxiosClient";

const Page = () => {
  const [coupons, setCoupons] = useState([]);
  const [open, openchange] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");

  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  const getCoupons = async () => {
    try {
      const { data } = await publicAxiosClient.get("Coupon");

      setCoupons(data);
    } catch (error) {}
  };

  const createCoupons = async () => {
    if (couponCode != null && minAmount != null && discountAmount != null) {
      try {
        await privateAxiosClient.post("Coupon", {
          couponCode,
          minAmount,
          discountAmount,
        });

        getCoupons();
      } catch (error) {}
    } else {
      return;
    }
  };

  useEffect(() => {
    getCoupons();
  }, []);

  return (
    <>
      <Head>
        <title>Coupons | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Dialog
          // fullScreen
          open={open}
          onClose={closepopup}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Create Coupon{" "}
            <IconButton onClick={closepopup} style={{ float: "right" }}>
              <CloseIcon color="primary"></CloseIcon>
            </IconButton>{" "}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
            <Stack spacing={2} margin={2}>
              <TextField
                variant="outlined"
                label="CouponCode"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="MinAmount"
                value={minAmount}
                type="number"
                onChange={(e) => setMinAmount(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="DiscountAmount"
                type="number"
                value={discountAmount}
                onChange={(e) => setDiscountAmount(e.target.value)}
              ></TextField>
              <Button color="primary" variant="contained" onClick={createCoupons}>
                Submit
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Coupons</Typography>
                <Stack alignItems="center" direction="row" spacing={1}></Stack>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => openchange(!open)}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <Grid container spacing={3}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Coupon ID</TableCell>
                      <TableCell align="right">Coupon Code</TableCell>
                      <TableCell align="right">Min Amount</TableCell>
                      <TableCell align="right">Discount Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {coupons.map((coupon) => (
                      <TableRow
                        key={coupon.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {coupon.id}
                        </TableCell>
                        <TableCell align="right">{coupon.couponCode}</TableCell>
                        <TableCell align="right">{coupon.minAmount}</TableCell>
                        <TableCell align="right">{coupon.discountAmount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            ></Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
