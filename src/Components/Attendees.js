import React from "react"
import { FormControl, TextField, MenuItem, Select, Stack } from "@mui/material"
import countries from "../data/countries.json"
import cities from "all-countries-and-cities-json"

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

const statuslist = ["Active", "Inactive"]

const rsvplist = ["Open", "Attended", "Not Attended", "Remind"]

const Attendees = () => {
  console.log(cities)
  const selectcountry = (e) => {
    let selectedcountry = e.target.value
    console.log(cities[selectedcountry])
  }
  return (
    <div className="attendees">
      <div className="attendees-head">
        <h2>Attendees List</h2>
        <div className="buttons">
          <div className="button-head">+ New Attendee</div>
          <div className="button-head">Export</div>
        </div>
      </div>
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
                <MenuItem value="">
                  <font color="grey">All Country</font>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.name}>{country.name}</MenuItem>
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
              >
                <MenuItem value="">
                  <font color="grey">All Application Status</font>
                </MenuItem>
                {appstatuslist.map((appstatus) => (
                  <MenuItem value={appstatus}>{appstatus}</MenuItem>
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
                <MenuItem value="">
                  <font color="grey">All City</font>
                </MenuItem>
                {cities["Afghanistan"].map((city) => (
                  <MenuItem value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <Select
                id="country"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem value="">
                  <font color="grey">All Attendee Type</font>
                </MenuItem>
                {attendeetypelist.map((attendeetype) => (
                  <MenuItem value={attendeetype}>{attendeetype}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack style={{ flexBasis: "25%" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px" }}>
              <Select
                id="country"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem value="">
                  <font color="grey">All Role</font>
                </MenuItem>
                {roleslist.map((role) => (
                  <MenuItem value={role}>{role}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <Select
                id="country"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem value="">
                  <font color="grey">All Status</font>
                </MenuItem>
                {statuslist.map((status) => (
                  <MenuItem value={status}>{status}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack style={{ flexBasis: "25%" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px" }}>
              <Select
                id="country"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              >
                <MenuItem value="">
                  <font color="grey">All RSVP</font>
                </MenuItem>
                {rsvplist.map((rsvp) => (
                  <MenuItem value={rsvp}>{rsvp}</MenuItem>
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
      </div>
    </div>
  )
}

export default Attendees
