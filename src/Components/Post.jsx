import React, { useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Post() {
  const [postId, setPostID] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ type: "info", massage: "" });
  return (
    <div>
      <input type="number" value={postId} onChange={handleChange} />
      {loading ? (
        <div
          className="d-flex align-items-center justify-content-center position-fixed "
          style={{ inset: 0 }}
        >
          <DNA />
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center position-fixed "
          style={{ inset: 0 }}
        >
            {title}
        </div>
      )}
    </div>
  );
}
