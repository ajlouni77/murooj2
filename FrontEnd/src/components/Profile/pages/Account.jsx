import React from "react";

const Account = ({
  userInfo,
  isEditing,
  editForm,
  handleEditChange,
  handleEditSave,
  setIsEditing,
  primaryColor,
  primaryLightColor,
  primaryDarkColor,
}) => {
  if (!userInfo) return <p>جاري التحميل...</p>; // ✅ منع الخطأ أثناء التحميل

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">معلومات الحساب</h2>
      {!isEditing ? (
        <div>
          <p>الاسم: {userInfo.name}</p>
          <p>البريد: {userInfo.email}</p>
          <button onClick={() => setIsEditing(true)}>تعديل</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleEditChange}
          />
          <input
            type="email"
            name="email"
            value={editForm.email}
            onChange={handleEditChange}
          />
          <button onClick={handleEditSave}>حفظ</button>
          <button onClick={() => setIsEditing(false)}>إلغاء</button>
        </div>
      )}
    </div>
  );
};

export default Account;
