import { useEffect } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice"
import { getRandomName } from "../utils/helper"

const data = [{

}]


const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messsages)
  console.log('****************');
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(addMessage({
        name:getRandomName(),
        message: getRandomName()
      }))
      console.log('API Pulling...')
    }, 500);
    return () => clearInterval(i);
  }, [])
  return (
    <div className='w-full ml p-2 h-full border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      { chatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)}
      {/* <div>{messages[0] || 'hi'}</div> */}
      {/* <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" />
      <ChatMessage name="Anup Ray" message="This is a sample message" /> */}
    </div>
  )
}

export default LiveChat