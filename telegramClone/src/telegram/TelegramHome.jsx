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
import './tg.css'
import { useEffect, useRef, useState } from 'react'

export default function TelegramHome() {

    const [isOpen, setIsOpen] = useState('none')
    const [isOpenminSet, setIsOpenminSet] = useState('none')
    const massRef = useRef()
    const [chat, setChat] = useState([
        {
            id: 1,
            messege: 'Salom',
            time: "11:23:13 AM"
        },
        {
            id: 2,
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
        if (massRef.current.value !== "") {
            setChat((prevChat) => [
                ...prevChat,
                {
                    id: prevChat.length + 1,
                    messege: massRef.current.value,
                    time: new Date().toLocaleTimeString(),
                },
            ]);
        }
    }

    const users = [
        {
            id: 1,
            name: 'React',
            image: "data:image/png;base64,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",
            onlineTime: '12:22',
            endMessege: chat.slice(-1)[0].messege,
            class: 'active'
        },
        {
            id: 2,
            name: 'JavaScript',
            image: "data:image/png;base64,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",
            onlineTime: '02:09',
            endMessege: chat.slice(-1)[0].messege
        }
    ]
    const group = [
        {
            id: 1,
            name: 'Python',
            image: "data:image/png;base64,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",
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
                            <img src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tgCon">
                <div className="tgLeft">
                    <div className="tgLeft_Btns">
                        <button ref={btn1Ref} className='active' onClick={() => setChats(users) + btn1()}><span>Shaxsiy</span><FaUser className='ix' size={'25px'} /></button>
                        <button ref={btn2Ref} onClick={() => setChats(group) + btn2()}><span>Guruhlar</span><BsChatFill className='ix' size={'25px'} /></button>
                    </div>
                </div>
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
                            {chat.map(item => (
                                <div className="user" key={item.id}>
                                    <div className="chat">
                                        <span className='massage'>{item.messege}</span>
                                        <div className="timeandcheck">
                                            <span>{item.time}</span>
                                            <button><FiCheck /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sendMassage">
                        <input id='file' type="file" />
                        <label for="file" htmlFor="file"><AiOutlinePaperClip color='#68747f' size={'35px'} /></label>
                        <input ref={massRef} id='mass' type="text" placeholder='Write a message...' />
                        <div className="btns">
                            <button><BsEmojiSmile /></button>
                            <button><BsMic /></button>
                            <button onClick={SendMassage} type='submit'><IoMdSend /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}