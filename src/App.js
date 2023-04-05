import React from "react";
import "./App.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LinearProgress from "@mui/material/LinearProgress";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function App() {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <div className="App">
      <div className="App__c1">
        <div className="App__c1__r1">
          <div>
            <p className="App__c1__r1__title">Hira R.</p>
            <p className="App__c1__r1__desc">UI/UX designer</p>
          </div>
          <div className="App__c1__r1__info">
            <div className="App__c1__r1__info__1">
              <p style={{ fontWeight: "600" }}> 125 </p>
              <p style={{ fontWeight: "200" }}> Projects</p>
            </div>
            <div className="App__c1__r1__info__2">
              <p style={{ fontWeight: "600" }}> $124 </p>
              <p style={{ fontWeight: "200" }}> Revenue </p>
            </div>
          </div>
        </div>

        <div className="App__c1__r2">
          <div className="App__c1__r2__1">
            <FolderOpenOutlinedIcon /> Dashboard
          </div>
          <div className="App__c1__r2__1">
            <EmailOutlinedIcon /> Email
          </div>
          <div className="App__c1__r2__1">
            <CalendarTodayOutlinedIcon /> Calendar
          </div>
          <div className="App__c1__r2__1">
            <BarChartOutlinedIcon /> Graph
          </div>
          <div className="App__c1__r2__1">
            <InsertDriveFileOutlinedIcon /> Forms
          </div>
        </div>
        <div className="App__c1__r3">
          <div
            style={{
              width: "90%",
            }}
          >
            <p className="App__c1__r3__title">Go Pro</p>
            <p className="App__c1__r3__desc">
              Upgrade your plan to get pro benifits.
            </p>
          </div>
          <button>
            <strong>Let's Start</strong>
          </button>
        </div>
      </div>
      <div className="App__c2">
        <div className="App__c2__r1">
          <MonetizationOnIcon
            style={{
              fontSize: "4rem",
            }}
          />
          <div>
            <p className="App__c2__r1__title">Total Revenue</p>
            <p className="App__c2__r1__cost">$92,983</p>

            <LinearProgress
              value={50}
              style={{
                marginTop: "1rem",
                backgroundColor: "#ee515a",
              }}
            />
          </div>
        </div>
        <div className="App__c2__r2">
          <div className="App__c2__r2__c1">
            <div>
              <p className="App__c2__r2__c1__title">Travel</p>
              <p className="App__c2__r2__c1__desc">Mobile Application</p>
            </div>
            <div>
              <p className="App__c2__r2__c1__desc">Seen by</p>
              <AvatarGroup max={3} style={{ marginLeft: "1rem" }}>
                <Avatar {...stringAvatar("Kent Dodds")} />
                <Avatar {...stringAvatar("Jed Watson")} />
                <Avatar {...stringAvatar("Tim Neutkens")} />
                <Avatar {...stringAvatar("Tim Neutkens")} />
              </AvatarGroup>
            </div>
          </div>
          <div className="App__c2__r2__c2">
            <div>
              <p className="App__c2__r2__c1__title">Hotel</p>
              <p className="App__c2__r2__c1__desc">Dashboard</p>
            </div>
            <div>
              <p className="App__c2__r2__c1__desc">Seen by</p>
              <AvatarGroup max={3} style={{ marginLeft: "1rem" }}>
                <Avatar {...stringAvatar("Kent Dodds")} />
                <Avatar {...stringAvatar("Jed Watson")} />
                <Avatar {...stringAvatar("Tim Neutkens")} />
                <Avatar {...stringAvatar("Tim Neutkens")} />
              </AvatarGroup>
            </div>
          </div>
        </div>
        <div className="App__c2__r3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className="App__c2__r3__title">Free Slots Available </p>
            <Switch defaultChecked />
          </div>
          <div className="App__c2__r3__dates">
            <div
              className="App__c2__r3__date"
              style={{
                backgroundColor: "#ee515a",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                }}
              >
                12
              </p>
              <p>Jun</p>
            </div>
            <div className="App__c2__r3__date">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                }}
              >
                12
              </p>
              <p>Jun</p>
            </div>
            <div className="App__c2__r3__date">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                }}
              >
                12
              </p>
              <p>Jun</p>
            </div>
            <div className="App__c2__r3__date">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                }}
              >
                12
              </p>
              <p>Jun</p>
            </div>
            <div className="App__c2__r3__date">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                }}
              >
                12
              </p>
              <p>Jun</p>
            </div>
            <div className="App__c2__r3__date">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                }}
              >
                12
              </p>
              <p>Jun</p>
            </div>
          </div>
        </div>
      </div>
      <div className="App__c3">
        <div className="App__c3__r1">
          <div style={{ width: "70%" }}>
            <p className="App__c3__r1__title">Dear Client</p>
            <p className="App__c3__r1__desc">
              Join our online community. It helps in managing your projects.{" "}
            </p>
          </div>
        </div>
        <div className="App__c3__r2">Transaction details</div>
        <div className="App__c3__r3">
          <div className="App__c3__r3__c1">Proj Detail</div>
          <div className="App__c3__r3__c2">Proj Progress</div>
        </div>
      </div>
    </div>
  );
}

export default App;
