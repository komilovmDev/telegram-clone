import { FaUser, FaCheck } from 'react-icons/fa'
import { BsChatFill, BsCheckAll, BsCheck, BsEmojiSmile, BsFillMicFill, BsMic } from 'react-icons/bs'
import { BiSearch, BiCheckDouble } from 'react-icons/bi'
import { IoCallSharp, IoClose } from 'react-icons/io5'
import { IoMdClose, IoMdSend } from 'react-icons/io'
import { GoKebabVertical } from 'react-icons/go'
import { FiCheck } from 'react-icons/fi'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { MdOutlineBlock } from 'react-icons/md'
import { BsVolumeMute } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/io5'
import './telegramlogin.css'
import './tg.css'
import { useEffect, useRef, useState } from 'react'

export default function TelegramHome() {

    const [isOpen, setIsOpen] = useState('none')
    const [message , setMessage] = useState('')
    const [isOpenminSet, setIsOpenminSet] = useState('none')
    const massRef = useRef()
    const [chat, setChat] = useState([
        {
            id: 1,
            class: 'ac',
            messege: 'Salom',
            time: "11:23:13 AM"
        },
        {
            id: 2,
            class: 'chat',
            messege: 'Salom',
            time: "11:23:13 AM"
        },
        {
            id: 3,
            class: 'chat',
            messege: 'Kim Bu',
            time: "10:23:13 AM"
        }
    ]);


    const [chat2, setChat2] = useState([
        {
            id: 1,
            messege: 'Salom',
            time: "01:23:13 AM"
        }
    ]);

    function SendMassage() {
        if (message !== "") {
            setChat((prevChat) => [
                ...prevChat,
                {
                    id: prevChat.length + 1,
                    class: 'chat',
                    messege: message,
                    time: new Date().toLocaleTimeString(),
                },
            ]);
        }
        setMessage('')
        setInputValue('')
    }

    const users = [
        {
            id: 1,
            name: 'React',
            image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
            onlineTime: '12:22',
            endMessege: chat.slice(-1)[0].messege,
            class: 'active'
        },
        {
            id: 2,
            name: 'JavaScript',
            image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
            onlineTime: '02:09',
            endMessege: chat.slice(-1)[0].messege
        }
    ]
    const group = [
        {
            id: 1,
            name: 'Python',
            image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
            onlineTime: '18:10',
            endMessege: chat.slice(-1)[0].messege,
            class: ''
        }
    ]



    const [chats, setChats] = useState(users)

    const btn1Ref = useRef()
    const btn2Ref = useRef()

    function btn1() {
        btn1Ref.current.classList.add('active');
        btn2Ref.current.classList.remove('active');
    }
    function btn2() {
        btn1Ref.current.classList.remove('active');
        btn2Ref.current.classList.add('active');
    }

    const [chatIsopen, setChatIsopen] = useState('tgChat on')

    function checkDisplayWidth() {
        const width = window.innerWidth;
        if (width < 900) {
            console.log('true');
        }
    }

    checkDisplayWidth();

    const [loginStatus, setLoginStatus] = useState(1)
    const phoneRef = useRef()

    function phoneSucses() {
        setLoginStatus(2)
    }
    function smsCodeSucses() {
        setLoginStatus(3)
    }
    function deleteChat(id) {
        setChat((prevChat) => prevChat.filter((item) => item.id !== id));
    }

    let [Sm, setSm] = useState("true")
    const emojiList = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😜', '😝', '😛', '🤑', '🤗', '🤔', '🤐', '😷', '🤒', '🤕', '😭', '😢', '😥', '👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '👏', '🙌', '👋', '🤚', '🖐'];

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setMessage(e.target.value)
    };

    const handleEmojiClick = (emoji) => {
        setInputValue(inputValue + emoji);
        setMessage(inputValue + emoji)
    };
    if (loginStatus == 1) {
        return (
            <>
                <div className="login">
                    <div className="loginBox">
                        <div className="loginTexst">
                            <span>Your Phone Number</span>
                            <p>Please confirm your country code and enter your phone number.</p>
                        </div>
                        <div className="country">
                            <span>Uzbekistan</span>
                        </div>
                        <div className="phone">
                            <input ref={phoneRef} className='country' type="text" value={'+998'} name="" id="" />
                            <input className='number' maxLength={9} type="number" placeholder='-- --- -- --' />
                        </div>
                        <button onClick={phoneSucses}>Next</button>
                    </div>
                </div>
            </>
        )
    }
    if (loginStatus == 2) {
        return (
            <>
                <div className="login">
                    <div className="loginBox">
                        <div className="loginTexst">
                            <span>+998 91 412 82 12</span>
                            <p>A code was sent via Telegram to your other devices, if you have any connected.</p>
                        </div>
                        <div className="phone">
                            <input className='code' maxLength={5} type="number" placeholder='Code' />
                        </div>
                        <button onClick={smsCodeSucses}>Next</button>
                    </div>
                </div>
            </>
        )
    }
    if (loginStatus == 3) {
        return (
            <>
                <div className={isOpen}>
                    <div className="close" onClick={() => setIsOpen('none')}></div>
                    <div className="profil">
                        <div className="profilBox">
                            <div className="profilBoxTop">
                                <span>React</span>
                                <div className="btns">
                                    <button><IoCallSharp size={'28px'} /></button>
                                    <button onClick={() => setIsOpen('none')}><IoClose /></button>
                                </div>
                            </div>
                            <div className="profilImg">
                                <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tgCon">
                    {/* <div className="tgLeft">
                        <div className="tgLeft_Btns">
                            <button onClick={() => setChats(users) + btn1() + setLoginStatus(1)}><span>chiqish</span><IoExitOutline className='ix' size={'25px'} /></button>
                            <button ref={btn1Ref} className='active' onClick={() => setChats(users) + btn1()}><span>Shaxsiy</span><FaUser className='ix' size={'25px'} /></button>
                            <button ref={btn2Ref} onClick={() => setChats(group) + btn2()}><span>Guruhlar</span><BsChatFill className='ix' size={'25px'} /></button>
                        </div>
                    </div> */}
                    <div className="tgUsers">
                        <div className="tgUsersSerach">
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="tgUsers_users">
                            {
                                chats.map(item => (
                                    <div className={`tgUsers_user ${item.class}`}>
                                        <img src={item.image} alt="" />
                                        <div className="tgUsers_users_Info">
                                            <div className="tgUsers_users_Info_Left">
                                                <span className="tgUsers_users_Info_Left_Name">{item.name}</span>
                                                <span className="tgUsers_users_Info_Left_massage">{item.endMessege}</span>
                                            </div>
                                            <div className="tgUsers_users_Info_Right">
                                                <div className="tgUsers_users_Info_Right_Icon"><BiCheckDouble size={'25px'} color='#fff' /></div>
                                                <span className="tgUsers_users_Info_Right_Time">{item.onlineTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={chatIsopen}>
                        <div className="tgChat_userInfo">
                            <div className="tgChat_userInfo_userName" onClick={() => setIsOpen('profilON')}>
                                <span className='tgChat_userInfo_userName_name'>React</span>
                                <span className="tgChat_userInfo_userName_online">last seen 20 minutes ago</span>
                            </div>
                            <div className="tgChatCallBtns">
                                <button><BiSearch /></button>
                                <button><IoCallSharp /></button>
                                <button onClick={() => setIsOpenminSet('prmSet')}><GoKebabVertical /></button>
                            </div>
                            <div className={isOpenminSet}>
                                <div className="close" onClick={() => setIsOpenminSet('none')}></div>
                                <div className="prmSetseting">
                                    <button><MdOutlineBlock size={'26px'} /><span>Block User</span></button>
                                    <button><BsVolumeMute size={'30px'} /><span>Ovozsiz</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="tgChatMassage">
                            <div className="chst">
                                {chat2.map(item => (
                                    <div className="user2" key={item.id}>
                                        <div className="chat">
                                            <span className='massage'>{item.messege}</span>
                                            <div className="timeandcheck">
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {
                                    chat.map((item) => (
                                        <div className="user" key={item.id}>
                                            <div className={item.class}>
                                                <span className="massage">{item.messege}</span>
                                                <div className="timeandcheck">
                                                    <span>{item.time}</span>
                                                    <button onClick={() => deleteChat(item.id)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="sendMassage">
                            <input id='file' type="file" />
                            <label for="file" htmlFor="file"><AiOutlinePaperClip color='#68747f' size={'35px'} /></label>
                            <input value={inputValue} onChange={handleInputChange} id='mass' type="text" placeholder='Write a message...' />
                            <div className="btns">
                                <button className='Btn__Smilek' onClick={() => { Sm ? setSm(false) : setSm(true) }}><BsEmojiSmile /></button>
                                <button onClick={SendMassage} type='submit'><IoMdSend /></button>
                                <div className={Sm ? 'smaylek Window' : 'smaylek'}>
                                    {emojiList.map((emoji, index) => (
                                        <span className='__smile' key={index} onClick={() => handleEmojiClick(emoji)}>
                                            {emoji}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}