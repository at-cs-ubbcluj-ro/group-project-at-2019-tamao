import React, { Fragment } from "react";
import "../App.css";
import { Button, Typography } from "@material-ui/core";

function License() {
  return (
    <Fragment>
      <div className="License" id="License">
        <Typography variant="body1" color="inherit" style={{ fontSize: 14 }}>
          <h2>License</h2>
          <p>Copyright (c) 2019 Android Things class.</p>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation{" "}
            <br /> files (the "Software"), to deal in the Software without
            restriction, including without limitation the rights to use, copy,
            modify, <br /> merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software
            is <br />
            furnished to do so, subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED <br /> TO THE
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT <br /> SHALL THE AUTHORS OR COPYRIGHT
            HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
            IN AN <br /> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE <br /> SOFTWARE OR THE USE OR OTHER
            DEALINGS IN THE SOFTWARE.
          </p>
        </Typography>
      </div>
    </Fragment>
  );
}

export default License;
