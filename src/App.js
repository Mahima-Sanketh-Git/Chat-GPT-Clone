import { useState } from 'react';
import './App.css';
import addBtn from "./assets/add-30.png";
import savedSvg from "./assets/bookmark.svg";
import gpt_logo from "./assets/chatgpt.svg";
import gptIcon from "./assets/chatgptLogo.svg";
import homeSvg from "./assets/home.svg";
import msgIcon from "./assets/message.svg";
import rocketSvg from "./assets/rocket.svg";
import sendButton from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";

function App() {
  const [userInput,setUserInput] =useState("");


  
  
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperside">
          <div className="upperSideTop">
            <img src={gpt_logo} alt="" className='logo' /><span className='brand'>
              Chat GPT
            </span>
           
          </div>
          <button className="midBtn">
              <img src={addBtn} alt="" className='btnImg' />New Chat
            </button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="" />What is Programming ?</button>
            <button className="query"><img src={msgIcon} alt="" />What is Flutter App?</button>
          </div>
        </div>
        <div className="lowerSide">
        <div className="listItem">
  <img src={homeSvg}alt="" className='listItemImg' />Home
</div>
<div className="listItem">
  <img src={savedSvg} alt="" className='listItemImg' />Saved
</div>
<div className="listItem">
  <img src={rocketSvg} alt="" className='listItemImg' />Upgrade to Pro
</div>
        </div>
      </div>
      <div className="main">
<div className="chats">
  <div className="chat">
    <img className='chatImg' src={userIcon} alt="" /><p className="txt">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur distinctio, itaque est officia adipisci praesentium, commodi reprehenderit ab tenetur natus reiciendis facere similique aliquam dicta molestias recusandae, ex 
    </p>
  </div>
  <div className="chat bot">
    <img className='chatImg' src={gptIcon} alt="" /><p className="txt">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid vitae asperiores saepe mollitia numquam molestias ipsam, aut assumenda itaque. Corrupti porro, nostrum ex eaque a modi nulla laudantium facere placeat sit! Et consectetur consequatur ex iste eos. Optio iusto non rem in quas dolores velit laboriosam? Error ipsam doloremque ea nemo minus. Quam voluptatibus molestiae vel. Necessitatibus praesentium neque ea est, iste iure ipsam molestias accusamus nisi sit dignissimos ratione, exercitationem placeat at totam voluptate provident sequi earum labore voluptas voluptatem vitae minus. Hic, rem? Corporis placeat atque fuga odit cumque illo porro officia sunt. Numquam esse optio odio dolore.
    </p>
  </div>
</div>
<div className="chatFooter">
  <div className="inp">
    <input value={userInput} onChange={(e)=>{setUserInput(
 e.target.value
    )

    }} type="text" placeholder='Send a message' id=''  /><button className="send" ><img src={sendButton} alt="" /></button>
  </div>
  <p>Chat Gpt may produce incorrect resluts it updated until 2023 september</p>
</div>
      </div>
    </div>
  );
}

export default App;
