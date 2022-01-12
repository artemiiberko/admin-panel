import React, { useState } from "react"
import { FormControl, TextField, MenuItem, Select, Stack } from "@mui/material"
import countries from "../data/countries.json"
import cities from "all-countries-and-cities-json"
import BootstrapTable from "react-bootstrap-table-next"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Form, Modal } from "react-bootstrap"
import paginationFactory from "react-bootstrap-table2-paginator"
import "bootstrap-icons/font/bootstrap-icons.css"
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter"

const appstatuslist = [
  "Entered",
  "Link Sent",
  "Form Submitted",
  "Hold Incomplete Details",
  "Under Process",
  "Hotel Booked",
  "Completed",
  "Cancelled",
  "No Reply",
]

const attendeetypelist = [
  "Local",
  "International",
  "VIP Local",
  "VIP International",
]

const roleslist = [
  "VIP Guest",
  "Media",
  "Speakers",
  "Moderator",
  "EPC Staff",
  "Volunteers",
  "Security",
  "Administration",
]

const titlelist = ["Mr.", "Mrs."]

const statuslist = ["Active", "Inactive"]

const rsvplist = ["Open", "Attended", "Not Attended", "Remind"]

let statusfilter
let appstatusfilter

const columnsdata = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" }
    },
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    headerStyle: () => {
      return { width: "5%" }
    },
  },
  {
    dataField: "fname",
    text: "First Name",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "lname",
    text: "Last Name",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "email",
    text: "Email Address",
    sort: true,
    headerStyle: () => {
      return { width: "25%" }
    },
  },
  {
    dataField: "app_status",
    text: "Application Status",
    sort: true,
    filter: selectFilter({
      options: appstatuslist,
      getFilter: (filter) => {
        appstatusfilter = filter
      },
      className: "head-filter",
    }),
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "sub_date",
    text: "Submitted Date",
    sort: true,
    headerStyle: () => {
      return { width: "15%" }
    },
  },
  {
    dataField: "attendee_status",
    text: "Status",
    sort: true,
    filter: selectFilter({
      options: statuslist,
      getFilter: (filter) => {
        statusfilter = filter
      },
      className: "head-filter",
    }),
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "buttons",
    text: "Actions",
    headerStyle: () => {
      return { width: "10%" }
    },
  },
]

const attendeesdata = [
  {
    id: 1,
    title: "Mr.",
    fname: "John",
    lname: "Smith",
    email: "john.smith@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-11-10",
    attendee_status: "Active",
  },
  {
    id: 2346787654,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },
  {
    id: 92374624,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },
  {
    id: 3453298787,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },
  {
    id: 886114,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },
  {
    id: 458638406,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },
  {
    id: 812375,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },
  {
    id: 309458027375,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },

  {
    id: 2490897264,
    title: "Mrs.",
    fname: "Ewa",
    lname: "Brown",
    email: "ewa.brown@mail.com",
    app_status: "Link Sent",
    sub_date: "2021-12-10",
    attendee_status: "Active",
  },
]

const Attendees = () => {
  const selectcountry = (e) => {
    let selectedcountry = e.target.value
    console.log(cities[selectedcountry])
  }
  let rowStyle = (row, rowIndex) => {
    row.index = rowIndex
    const style = {}
    if (rowIndex % 2 === 0) {
      style.backgroundColor = "transparent"
    } else {
      style.backgroundColor = "#faf9fc"
    }
    style.borderTop = "none"

    return style
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [changeAttendees, setChangeAttendees] = useState(attendeesdata)
  const [addattendeeerror, setAddattendeeerror] = useState("")

  const [newAttendee, setNewAttendee] = useState({
    id: 0,
    title: "",
    fname: "",
    lname: "",
    email: "",
    app_status: "",
    sub_date: "",
    attendee_status: "",
  })
  const addAttendee = (attendee) => {
    setChangeAttendees((prevState) => [...prevState, attendee])
  }
  const onAttendeeChange = (e) => {
    const { name, value } = e.target
    setNewAttendee((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  function idExists(id) {
    return changeAttendees.some(function (e) {
      return e.id === id
    })
  }
  const handleSubmit = (e) => {
    if (
      (newAttendee.id !== "") &
      (newAttendee.title !== "") &
      (newAttendee.fname !== "") &
      (newAttendee.lname !== "") &
      (newAttendee.email !== "") &
      (newAttendee.app_status !== "") &
      (newAttendee.sub_date !== "") &
      (newAttendee.attendee_status !== "")
    ) {
      if (idExists(newAttendee.id)) {
        console.log("id exist")
        setAddattendeeerror("ID уже существует")
      } else {
        console.log(changeAttendees)
        console.log("ok")
        setAddattendeeerror("")
        addAttendee(newAttendee)
        setShow(false)
      }
    } else {
      setAddattendeeerror("Заполните все поля")
    }
  }
  const statusFilterChange = (e) => {
    statusfilter(e.target.value)
  }
  const appstatusFilterChange = (e) => {
    appstatusfilter(e.target.value)
  }

  return (
    <div className="attendees">
      <div className="attendees-head">
        <div className="page-header">Attendees List</div>
        <div className="buttons">
          <button className="button-head" onClick={handleShow}>
            <i className="bi bi-plus-lg"></i> New Attendee
          </button>
          <button className="button-head">Export</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add new attendee</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", justifyContent: "space-around" }}>
          <Stack>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="ID"
                onChange={onAttendeeChange}
                value={newAttendee.id}
                name="id"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Select
                type="text"
                placeholder="Title"
                onChange={onAttendeeChange}
                value={newAttendee.title}
                name="title"
              >
                <option key="title"></option>
                {titlelist.map((title) => (
                  <option key={title}>{title}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={onAttendeeChange}
                value={newAttendee.fname}
                name="fname"
              />
            </Form.Group>
          </Stack>
          <Stack>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={onAttendeeChange}
                value={newAttendee.lname}
                name="lname"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-mail"
                onChange={onAttendeeChange}
                value={newAttendee.email}
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Application Status</Form.Label>
              <Form.Select
                type="text"
                placeholder="Application Status"
                onChange={onAttendeeChange}
                value={newAttendee.app_status}
                name="app_status"
              >
                <option key="app_status"></option>
                {appstatuslist.map((app_status) => (
                  <option key={app_status}>{app_status}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Stack>
          <Stack>
            <Form.Group className="mb-3">
              <Form.Label>Submitted Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Submitted Date"
                onChange={onAttendeeChange}
                value={newAttendee.sub_date}
                name="sub_date"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                type="text"
                placeholder="Status"
                onChange={onAttendeeChange}
                value={newAttendee.attendee_status}
                name="attendee_status"
              >
                <option key="status"></option>
                {statuslist.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="addattendee-error">{addattendeeerror}</div>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="table-wrapper">
        <div className="filter">
          <Stack style={{ flexBasis: "25%" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px" }}>
              <Select
                id="country"
                displayEmpty
                defaultValue={""}
                onChange={selectcountry}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem key="country" value="">
                  <font color="grey">All Country</font>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <Select
                id="application-status"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
                onChange={appstatusFilterChange}
              >
                <MenuItem key="appstatus" value="">
                  <font color="grey">All Application Status</font>
                </MenuItem>
                {appstatuslist.map((appstatus) => (
                  <MenuItem key={appstatus} value={appstatus}>
                    {appstatus}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack style={{ flexBasis: "25%" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px" }}>
              <Select
                id="city"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem key="city" value="">
                  <font color="grey">All City</font>
                </MenuItem>
                {cities["Afghanistan"].map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <Select
                id="attendee-type"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem key="attendeetype" value="">
                  <font color="grey">All Attendee Type</font>
                </MenuItem>
                {attendeetypelist.map((attendeetype) => (
                  <MenuItem key={attendeetype} value={attendeetype}>
                    {attendeetype}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack style={{ flexBasis: "25%" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px" }}>
              <Select
                id="role"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem key="role" value="">
                  <font color="grey">All Role</font>
                </MenuItem>
                {roleslist.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <Select
                id="status"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
                onChange={statusFilterChange}
              >
                <MenuItem key="status" value="">
                  <font color="grey">All Status</font>
                </MenuItem>
                {statuslist.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack style={{ flexBasis: "25%" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px" }}>
              <Select
                id="rsvp"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem key="rsvp" value="">
                  <font color="grey">All RSVP</font>
                </MenuItem>
                {rsvplist.map((rsvp) => (
                  <MenuItem key={rsvp} value={rsvp}>
                    {rsvp}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <TextField
                id="search"
                placeholder="Search..."
                type="search"
                variant="outlined"
                height="30px"
                size="small"
                sx={{
                  p: 0,
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              />
            </FormControl>
          </Stack>
        </div>
        <div className="mytable">
          <BootstrapTable
            keyField="id"
            data={changeAttendees}
            columns={columnsdata}
            hover
            condensed
            bordered={false}
            headerWrapperClasses="table-header"
            bodyClasses="table-body"
            rowStyle={rowStyle}
            pagination={paginationFactory()}
            filter={filterFactory()}
          />
        </div>
      </div>
    </div>
  )
}

export default Attendees
