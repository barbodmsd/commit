import React, { useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ type: "info", message: "" });
  return (
    <div>
      <input type="number" placeholder="Enter number:" />
      {loading ? (
        <div
          className="d-flex justify-content-center  align-items-center position-fixed "
          style={{ inset: 0 }}
        >
          <DNA />
        </div>
      ) : (
        <div
          className="d-flex justify-content-center  align-items-center position-fixed "
          style={{ inset: 0 }}
        >
            <h2>{title}</h2>
        </div>
      )}
    </div>
  );
}
