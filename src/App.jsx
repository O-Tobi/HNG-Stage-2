import {
  ArrowLeft,
  HorizontalLine,
  Logo,
  ProgressContainer,
} from "./components/utils/assets";

const App = () => {
  return (
    <div>
      {/* header starts here */}
      <header>
        <img src={Logo} alt="logo" />

        <div>
          <ul>
            <li>
              <nav>Events</nav>
            </li>

            <li>
              <nav>My Tickets</nav>
            </li>

            <li>
              <nav>About Project</nav>
            </li>
          </ul>
        </div>

        <button className="btn">
          MY TICKETS <img src={ArrowLeft} />
        </button>
      </header>

      <main>
        <div>
          <h1>Ticket Selection</h1>
          <p>Step 1/3</p>
        </div>

        <div>
          <img src={ProgressContainer} alt="" />
        </div>

        <div>
          <div>
            <h1>Techember Fest "25</h1>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>

            <div>
              <p>[Event Location]</p>
              <p>||</p>
              <p>March 15, 2025 | 7:00 PM</p>
            </div>

            <div>
              <img src={HorizontalLine} alt="" />
            </div>

            <div>
              <p>Select Ticket Type:</p>

              <div className="rounded-container">
                <div>
                  <div>
                    <p>REGULAR ACCESS</p>
                    <p>20 left!</p>
                  </div>
                  <button className="btn">Free</button>
                </div>

                <div>
                  <div>
                    <p>VIP ACCESS</p>
                    <p>20 left!</p>
                  </div>
                  <button className="btn">$50</button>
                </div>

                <div>
                  <div>
                    <p>VVIP ACCESS</p>
                    <p>20 left!</p>
                  </div>
                  <button className="btn">$150</button>
                </div>
              </div>
            </div>

            <div>
              <p>Number of Tickets</p>
              {/* dropdown here */}
            </div>

            <div>
              <button className="btn">Cancel</button>
              <button className="btn">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
