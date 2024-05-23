import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="homecontainer">
      <h1 style={{ fontWeight: "3rem", fontSize: "300px" }}><b>Sleeve 2</b></h1>
      <h3><b style={{ fontWeight: "bolder", fontSize: "50px" }}>The ultimate music accessory for your Mac.</b></h3>
      <p style={{ fontSize: "30px" }}> Sleeve sits on the desktop, displaying and controlling the music you’re</p><p style={{ fontSize: "30px" }}>currently playing in
        <img src="https://replay.software/sleeve/images/AppMusicDark.png" width={"30px"} height={"30px"}></img>
        Apple Music,
        <img src="https://replay.software/sleeve/images/AppSpotifyDark.png" width={"30px"} height={"30px"}></img>
        Spotify, and
        <img src="https://replay.software/sleeve/images/AppDopplerDark.png" width={"30px"} height={"30px"}></img>
        Doppler.</p>
      <div>
        <button className="btns"><i class="fa-brands fa-apple"></i>MAC APP STORE</button>
       <Link to="payment"><button className="btns" style={{ marginLeft: "10px" }}>BUY DIRECTLY <button className="btn1" style={{ borderRadius: "50px" }}>$5.99</button></button></Link> 
      </div>
      <div>
        <h1 style={{ marginTop: "5%" }}><b>Themes. Unlimited themes.</b></h1>
        <h5 >Themes in Sleeve make creating and switching between customizations easy. </h5><h5>Share your own creations with friends and install as many themes as you like with just a double-click.</h5>
      </div>
      <div className="imgcontainer">
        <div className="imgcardcontainer">
          <div className="imgcard">
            <img src="https://tse4.mm.bing.net/th?id=OIP.iy31y_UGv-aJ3KiN2sqcxwHaHa&pid=Api&P=0&h=180"></img>
            Eternal Sunshine
            Forgotten Feels
            Slow Magic
          </div>
          <div className="imgcard">
            <img src="https://tse3.mm.bing.net/th?id=OIP.JJVD0fRJ7ApC1rgYPpxEkAHaEK&pid=Api&P=0&h=180" style={{ width: "200px", height: "200px" }}></img>
            Bunny Is a Rider
            Desire, I Want to Turn Into You
            Caroline Polachek<br />
            <i class="fa-solid fa-backward-step"></i> <i class="fa-solid fa-pause"></i> <i class="fa-solid fa-forward-step"></i>

          </div>
          <div className="imgcard">

            <img src="https://tse1.mm.bing.net/th?id=OIP.rUZa89q-YAwATKY8XkF6BAHaEK&pid=Api&P=0&h=180" style={{ width: "200px", height: "200px" }}></img>
            Creation Comes Alive
            Petit Biscuit

          </div>
        </div>
      </div>
      <div className="textcontent">
        <div className="textcardcontainer">
          <div className="textcard">
            <div>
              <h4>Change it up
                Switch between themes with just a click.</h4>

              <h4>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</h4>
            </div>
            <div>
              <img src="https://replay.software/sleeve/images/ThemeUIDark.png" className="musicimg"></img>
              <img src="https://replay.software/sleeve/images/ThemeUIActiveDark.png" className="musicimg1" ></img>
            </div>
          </div>

        </div>
        <div className="textcardcontainer">
          <div className="textcard">
            <div>
              <h4>
                Shareable
                Export your themes and share them with friends using the handy new Sleeve Theme file format.
              </h4>
              <h4>Install themes from anywhere with a double-click or a drag and drop.</h4>
            </div>
            <div>
              <img src="https://replay.software/sleeve/images/ThemeExportDark.png" width={"200px"} height={"200px"} ></img>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ marginTop: "5%" }}><b>Countless ways to customize.</b></h1>
        <h5>Customization is at the core of the Sleeve experience — choose from any</h5><h5> combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</h5>
        <div className="gridimgcontainer">
          <img src="https://replay.software/sleeve/images/IconArrayHotkeysDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArrayWindowDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArrayInterfaceDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArrayLayoutDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArrayThemeDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArrayTrackDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArrayPositionDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArrayArtworkDark.png"></img>
          <img src="https://replay.software/sleeve/images/IconArraySettingsDark.png"></img>
        </div>

      </div>
      <div className="headingcontainer">
        <div>
          <img src="https://replay.software/sleeve/images/IconArrayArtworkDark.png"></img>
          <h2><b>Artwork</b></h2>
          <h4>Scale artwork all the way up or all the way down. Round the corners or leave them square.</h4><br />
          <h4>Choose shadow and lighting effects to bring your album artwork to life.</h4><br />
          <h4>Or hide it completely.</h4>
        </div>
        <div className="artworkimg">
          <img src="https://replay.software/sleeve/images/Artwork1Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Artwork2Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Artwork3Dark.jpg" style={{ borderRadius: "30px" }}></img>
        </div>
      </div>
      <div className="headingcontainer">
        <div>
          <img src="https://replay.software/sleeve/images/IconArrayTrackDark.png"></img>
          <h2><b>Typography</b></h2>
          <h4>Pick the track info you want to display, and then exactly how to display it.</h4><br />
          <h4>Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</h4><br />
        </div>
        <div className="artworkimg">
          <img src="https://replay.software/sleeve/images/Typography1Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Typography2Dark.jpg" style={{ borderRadius: "30px" }}></img>

        </div>
      </div>
      <div className="headingcontainer">
        <div>
          <img src="https://replay.software/sleeve/images/IconInterfaceDark.png"></img>
          <h2><b>Interface</b></h2>
          <h4>Customize the layout, alignment and position to fit your setup.</h4><br />
          <h4>Show and hide playback controls. Add a backdrop layer and customize it.</h4><br />
        </div>
        <div className="artworkimg">
          <img src="https://replay.software/sleeve/images/Interface1Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Interface2Dark.jpg" style={{ borderRadius: "30px" }}></img>

        </div>
      </div>
      <div className="headingcontainer">

        <div>
          <img src="https://replay.software/sleeve/images/IconSettingsDark.png"></img>
          <h2><b>Settings</b></h2>
          <h4>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.</h4><br />
          <h4>Show it in the Dock, choose from custom icons, or keep it on the Desktop only.</h4><br />
          <h4>Set your custom keyboard shortcuts and integrate with the apps you use.</h4><br />
          
        </div>
        <div className="artworkimg">
          <img src="https://replay.software/sleeve/images/Settings1Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Settings2Dark.jpg" style={{ borderRadius: "30px" }}></img>
          
        </div>
      </div>
      <div>
      <h1 style={{ marginTop: "5%" }}><b>Like, Scrobble.</b></h1>
      <div className="textcontent">
      <div className="textcardcontainer1">
            <div className="textcard1">
            <div>
             <img src="https://replay.software/sleeve/images/IntegrationLastfmDark.png"></img>
            </div>
            <div style={{color:"rosybrown"}}>
            Sleeve integrates with Last.<br/>fm so you never miss a track.<br/> Simply sign in and start scrobbling.
            Last.fm account required
            </div>
            </div>
           </div>
           <div className="textcardcontainer1" style={{backgroundColor:"green"}}>
            <div className="textcard1">
            <div>
             <img src="https://replay.software/sleeve/images/IntegrationSpotifyDark.png"></img>
            </div>
            <div style={{color:"white"}}>
            With Sleeve 2 you can now like<br/>tracks in Spotify, without ever<br/> having to switch away from Sleeve.
            A free Spotify Developer account is required
            </div>
           </div>
            </div>
            
      </div>
      </div>
      <div className="widthcontainer">
          <img src="https://replay.software/sleeve/images/AppMusicDark.png"></img>
          <img src="https://replay.software/sleeve/images/AppSpotifyDark.png"></img>
          <img src="https://replay.software/sleeve/images/AppDopplerDark.png"></img>
          <h4>Sleeve integrates directly with Apple Music, Spotify and Doppler.</h4> <h4>Control playback, like tracks and adjust volume seamlessly.</h4>
      </div>
           
    </div>

  )
}

export default Home