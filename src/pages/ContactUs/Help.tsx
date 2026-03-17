import "./Help.css";

const screenReaders = [
  { name: "Screen Access For All (SAFA)", website: "http://www.nabhindia.org/NAS_SAFA.htm External website that opens in a new window", free: "Free" },
  { name: "Non Visual Desktop Access (NVDA)", website: "http://www.nvda-project.org/ External website that opens in a new window", free: "Free" },
  { name: "System Access To Go", website: "http://www.satogo.com/ External website that opens in a new window", free: "Free" },
  { name: "Thunder", website: "http://www.screenreader.net/index.php?pageid=2 External website that opens in a new window", free: "Free" },
  { name: "WebAnywhere", website: "http://webanywhere.cs.washington.edu/wa.php External website that opens in a new window", free: "Free" },
  { name: "Hal", website: "http://www.yourdolphin.co.uk/productdetail.asp?id=4 External website that opens in a new window", free: "Commercial" },
  { name: "JAWS", website: "http://www.freedomscientific.com/jaws-hq.asp External website that opens in a new window", free: "Commercial" },
  { name: "Supernova", website: "http://www.yourdolphin.co.uk/productdetail.asp?id=1 External website that opens in a new window", free: "Commercial" },
  { name: "Window-Eyes", website: "http://www.gwmicro.com/Window-Eyes/ External website that opens in a new window", free: "Commercial" },
];

const Help = () => {
  return (
    <div className="hp-page">

      {/* Page Heading */}
      <div>
        <div className="main-title">Help</div>
        <div className="title-underline"></div>
      </div>

      <p className="hp-intro">
        Are you finding it difficult to access/navigate through the content/pages of this Portal?
        This section attempts to help you have a pleasant experience while browsing this Portal.
      </p>

      {/* Two column grid */}
      <div className="hp-two-col">
        <div>
          <h3 className="hp-section-title">Section of this Portal</h3>
          <p className="hp-para">Provides summary of what each section of the Portal contains.</p>
        </div>
        <div>
          <h3 className="hp-section-title">Accessibility</h3>
          <p className="hp-para">Know about the accessibility statement, accessibility features, and accessibility options.</p>
        </div>
        <div>
          <h3 className="hp-section-title">Using the search facility</h3>
          <p className="hp-para">Provides tips on searching information on this Portal in an effective way.</p>
        </div>
        <div>
          <h3 className="hp-section-title">Displaying Hindi Content</h3>
          <p className="hp-para">If your system doesn't display Hindi content on the browser title, please follow the instructions</p>
        </div>
        <div>
          <h3 className="hp-section-title">Viewing Photo galleries, News and Announcement, Press release</h3>
          <p className="hp-para">Provides information on how to access photo galleries, News formats for viewing the required information</p>
        </div>
        <div>
          <h3 className="hp-section-title">Viewing Information in various file formats</h3>
          <p className="hp-para">Provides information on how access different file formats for viewing the required information</p>
        </div>
        <div>
          <h3 className="hp-section-title"></h3>
          <p className="hp-para"></p>
        </div>
        <div>
          <h3 className="hp-section-title">Screen Reader Access</h3>
          <p className="hp-para">Provides information regarding access to different Screen Readers.</p>
        </div>
      </div>

      {/* Using the search facility */}
      <h3 className="hp-section-title">Using the search facility</h3>
      <p className="hp-para">You can search for documents with entries that contain:</p>
      <p className="hp-para">Any <strong>one</strong> of the words you specify</p>
      <p className="hp-para">All of the words you specify</p>
      <p className="hp-para">
        If you search for more than one word, the way you separate the words determines how Search
        Server performs the search.
      </p>

      {/* Search Table */}
      <div className="hp-table-wrapper">
        <table className="hp-table">
          <thead>
            <tr>
              <th>The way you do the search</th>
              <th>What you type</th>
              <th>Documents will be listed if their index entries contain:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Words separated by spaces or commas</td>
              <td>Indian Railways India, Railway</td>
              <td>
                The two words India and Railways. Those two words (regardless of capitalisation)
                must occur somewhere in the index but not necessarily together or in any order.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Searching Tips */}
      <h3 className="hp-section-title">Searching Tips</h3>
      <p className="hp-para">
        When searching, don't enter plural forms such as "press releases" because the server will
        only find documents with <strong>releases</strong> (plural) in the title or keywords. If you
        enter release (singular), the server will list entries with both <strong>release</strong> and{" "}
        <strong>releases</strong>.
      </p>
      <p className="hp-para">All searches are case-insensitive. That is, words are looked for regardless of capitalisation.</p>

      {/* Viewing Photo galleries */}
      <h3 className="hp-section-title">Viewing Photo galleries, News and Announcement, Press release</h3>
      <p className="hp-para">
        On this Portal, you shall find photo galleries, News and Announcement, Press release of a
        lot of important National and International Events such as Conferences, Addresses to the
        Nation, Festival Celebrations, Budget etc. In order to view these information's, you need
        to go through the link given on website.
      </p>

      {/* Accessibility */}
      <h3 className="hp-section-title">Accessibility</h3>
      <p className="hp-para">Do you find it difficult to read the contents on the screen?</p>
      <p className="hp-para">Is the displayed information not clearly visible to you?</p>
      <p className="hp-para">
        We have the accessibility options provided in the Web-site to control the screen display.
        Those options allow changing the text size for clear visibility and better readability.
      </p>

      {/* Changing the Text Size */}
      <h3 className="hp-section-title">Changing the Text Size</h3>
      <p className="hp-para">
        Changing the size of the text refers to making the text appearing smaller or bigger from
        its standard size. There are three options provided to you to set the size of the text that
        affects the readability. These are:
      </p>
      <p className="hp-para"><strong>Large (A+)</strong> : Displays information in the largest font size.</p>
      <p className="hp-para"><strong>Medium (A)</strong> : Displays information in a standard font size, which is the default size.</p>
      <p className="hp-para"><strong>Smaller (A-)</strong> : Displays information in a font size smaller than the standard font size.</p>
      <p className="hp-para"><strong>To change the text size:</strong></p>
      <p className="hp-para">- Go to the top right corner of the page last resizing icons are available there.</p>
      <p className="hp-para">- From the text resizing icons, select the appropriate text size.</p>
      <p className="hp-para">- Click to set the size of the text</p>

      {/* Displaying Hindi Content */}
      <h3 className="hp-section-title">Displaying Hindi Content</h3>
      <p className="hp-para">
        You can view a Web page in <strong>Hindi</strong> by clicking on the top-right corner of the page.
      </p>

      {/* Viewing Information in various file formats */}
      <h3 className="hp-section-title">Viewing Information in various file formats</h3>
      <p className="hp-para">
        The information provided by this Web site is available in various file formats, such as
        Portable Document Format (PDF), Word, Excel and PowerPoint. To view this information
        properly, your browser might need to have the required plug-ins or software. For example,
        the Adobe Flash software is required to view the Flash files. In case your system does not
        have the software, you can download them from the Internet for free. The table lists the
        required plug-ins needed to view the information in various file formats.
      </p>
      <p className="hp-para">
        To view Microsoft Office 2007 files, install the Microsoft Office Compatibility Pack along
        with the respective viewer.
      </p>

      {/* File formats table */}
      <div className="hp-table-wrapper">
        <table className="hp-table">
          <thead>
            <tr>
              <th>Document Type</th>
              <th>Plug-in for Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Portable Document Format (PDF) files</td>
              <td>
                <a href="#" className="hp-link">Adobe Acrobat Reader (External website that opens in a new window)</a><br />
                <a href="#" className="hp-link">Convert a PDF file online into HTML or text format (External website that opens in a new window)</a>
              </td>
            </tr>
            <tr>
              <td>Word files</td>
              <td>
                <a href="#" className="hp-link">Word Viewer (in any version till 2003) - External website that opens in a new window</a><br />
                <a href="#" className="hp-link">Microsoft Office Compatibility Pack for Word (for 2007 version) - External website that opens in a new window</a>
              </td>
            </tr>
            <tr>
              <td>Excel files</td>
              <td>
                <a href="#" className="hp-link">Excel Viewer 2003 (in any version till 2003) - External website that opens in a new window</a><br />
                <a href="#" className="hp-link">Microsoft Office Compatibility Pack for Excel (for 2007 version) - External website that opens in a new window</a>
              </td>
            </tr>
            <tr>
              <td>PowerPoint presentations</td>
              <td>
                <a href="#" className="hp-link">PowerPoint Viewer (in any version till 2003) - External website that opens in a new window</a><br />
                <a href="#" className="hp-link">Microsoft Office Compatibility Pack for PowerPoint (for 2007 version) - External website that opens in a new window</a>
              </td>
            </tr>
            <tr>
              <td>Flash content</td>
              <td><a href="#" className="hp-link">Adobe Flash Player</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Screen Reader Access */}
      <h3 className="hp-section-title">Screen Reader Access</h3>
      <p className="hp-para">
        The National Portal of Indian Railways fully complies with{" "}
        <a href="#" className="hp-link">Guidelines for Indian Government Websites (External website that opens in a new window)</a>.
        Our visitors with visual impairments can access the Portal using assistive technologies,
        such as screen readers.
      </p>
      <p className="hp-para">
        The information of this Portal is accessible with different screen readers, such as JAWS,
        NVDA, SAFA, Supernova and Window-Eyes.
      </p>
      <p className="hp-para">Following table lists the information about different screen readers.</p>

      {/* Screen Reader Table */}
      <h3 className="hp-section-title">Information related to the various screen readers:</h3>
      <div className="hp-table-wrapper">
        <table className="hp-table">
          <thead>
            <tr>
              <th>Screen Reader</th>
              <th>Website</th>
              <th>Free / Commercial</th>
            </tr>
          </thead>
          <tbody>
            {screenReaders.map((sr, i) => (
              <tr key={i}>
                <td>{sr.name}</td>
                <td><a href="#" className="hp-link">{sr.website}</a></td>
                <td>{sr.free}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Help;