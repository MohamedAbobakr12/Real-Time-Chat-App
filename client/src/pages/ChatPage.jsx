import { useAuthStore } from '../store/useAuthStore'

const ChatPage = () => {
    const { logout } = useAuthStore();
    return (
        <div className="z-10">
            ChatPage
            <br />
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default ChatPage