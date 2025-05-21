import React, { useEffect, useState } from "react";
import axios from "axios"; // تأكد من استيراد Axios
import { getMessages, replyToMessage } from "../../api";

const ManageMessages = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [activeReply, setActiveReply] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // دالة حذف الرسالة
  const handleDelete = async (messageId) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${messageId}`);
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg._id !== messageId)
      );
      alert("تم حذف الرسالة بنجاح");
    } catch (error) {
      console.error("Failed to delete message:", error);
      alert("فشل في حذف الرسالة");
    }
  };

  const handleStatusChange = async (messageId, status) => {
    try {
      const updatedMessage = await updateMessageStatus(messageId, status);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === messageId
            ? { ...msg, status: updatedMessage.status }
            : msg
        )
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleReply = async (messageId) => {
    try {
      await replyToMessage(messageId, reply);
      setReply("");
      setActiveReply(null);
      alert("تم إرسال الرد بنجاح");
    } catch (error) {
      console.error("Failed to send reply:", error);
      alert("✅✅تم ارسال الرد");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">إدارة الرسائل</h3>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold text-gray-700">
            <div className="col-span-2">المرسل</div>
            <div className="col-span-2">البريد الإلكتروني</div>
            <div className="col-span-2">الموضوع</div>
            <div className="col-span-4">الرسالة</div>
            <div className="col-span-2 text-center">الإجراءات</div>
          </div>

          {messages.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              لا توجد رسائل لعرضها حالياً
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg._id}
                className="grid grid-cols-12 p-4 border-b hover:bg-gray-50"
              >
                <div className="col-span-2 font-medium text-gray-800">
                  {msg.name}
                </div>
                <div className="col-span-2 text-gray-600 text-sm">
                  {msg.email}
                </div>
                <div className="col-span-2 text-gray-700">{msg.subject}</div>
                <div className="col-span-4 text-gray-600">
                  <p className="line-clamp-2">{msg.message}</p>
                </div>
                <div className="col-span-2 flex justify-center space-x-2">
                  <button
                    onClick={() =>
                      setActiveReply(activeReply === msg._id ? null : msg._id)
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    title="رد"
                  >
                    ↩
                  </button>
                  <button
                    onClick={() => handleDelete(msg._id)} // استدعاء دالة الحذف
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                    title="حذف"
                  >
                    🗑️
                  </button>
                </div>

                {activeReply === msg._id && (
                  <div className="col-span-12 mt-3 flex gap-2">
                    <input
                      type="text"
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="أدخل ردك هنا..."
                      className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleReply(msg._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      إرسال
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMessages;
