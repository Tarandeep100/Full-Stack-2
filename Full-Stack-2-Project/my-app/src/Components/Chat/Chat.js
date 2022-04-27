import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
var isLoading = false;

const headers = {
  'Content-Type': 'application/json',
  // 'Authorization': 'JWT fefege...'
}

// console.log(backendUrl);
const columns = [
  { field: "_id", headerName: "ID", flex: 1 },
  { field: "socketId", headerName: "Socket ID", flex: 1 },
  {
    field: "chat",
    headerName: "Chat",
    flex: 1,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    flex: 1,
  },
];

class Chat extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Chat constructor");
    // console.log(props);
    this.state = {
      ChatData: [],
      deletedRows: [],
      open: false,
    };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

   this.setState({
     open: false
   });
  };
  handleRowSelection = (e) => {
    // console.log("selection");
    // console.log(this.state.ChatData);
    // console.log("e=>", e);
    // console.log(this.state.ChatData.filter((r) => r._id == e));
    this.setState({
      // deletedRows: [this.state.ChatData.filter((r) => e.includes(r._id))],
      deletedRows: e,
    });
  };

  handlePurge = () => {
    // console.log("purge");
    // console.log(this.state.deletedRows);
    //TO-DO delete data from backend
    // var newChatData= this.state.ChatData.filter(
    //     (r) => this.state.deletedRows.filter((sr) => sr == r._id).length < 1
    //   );
    // console.log(newChatData);
    this.setState({
      ChatData: this.state.ChatData.filter(
        (r) => this.state.deletedRows.filter((sr) => sr == r._id).length < 1
      ),
    });
    
    axios.post(backendUrl+'/deleteChatData', {
      rows: this.state.deletedRows
    }, {headers: headers}).then(res => {
      // console.log("delete success");
      this.setState({
        open:true
      })
    }).catch(err => {
      // console.log("err:");
    });
  };

  fetchData() {
    if (!isLoading) {
      isLoading = true;
      axios
        .get(backendUrl + "/getChatData")
        .then((res) => {
          //   console.log(res.data);
          isLoading = false;
          this.setState({
            ChatData: res.data,
          });
        })
        .catch((err) => {
          // console.log(err);
          isLoading = false;
        });
    }
  }
  componentDidMount() {
    this.fetchData();
    // console.log("Chat Mount");
  }

  render() {
    // console.log("Chat render");

    // console.log(this.state.deletedRows);
    // console.log(this.state.ChatData);
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={this.state.ChatData}
          columns={columns}
          disableSelectionOnClick
          checkboxSelection = {this.props.isAdmin}
          onSelectionModelChange={this.handleRowSelection}
        />
        <Stack direction="row" spacing={2}>
          <Button disabled={!this.props.isAdmin} variant="outlined" startIcon={<DeleteIcon />} onClick={this.handlePurge}>
            Delete
          </Button>
        </Stack>
        
        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
            <Alert
              onClose={this.handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {"Deletion is successful"}
            </Alert>
          </Snackbar>
      </div>
    );
  }
}

export default Chat;
