type Props = {
  Name: string;
  email: string;
  message: string;
};

export function ContactNotificationTemplate({ Name, email, message }: Props) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#3b82f6",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          📬 New Contact Message
        </h2>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "32px",
          backgroundColor: "white",
        }}
      >
        {/* Name Section */}
        <div
          style={{
            marginBottom: "24px",
            paddingBottom: "16px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "20px" }}>👤</span>
            <span
              style={{
                fontWeight: "600",
                color: "#374151",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Name
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              color: "#111827",
              fontWeight: "500",
              marginLeft: "28px",
            }}
          >
            {Name}
          </p>
        </div>

        {/* Email Section */}
        <div
          style={{
            marginBottom: "24px",
            paddingBottom: "16px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "20px" }}>📧</span>
            <span
              style={{
                fontWeight: "600",
                color: "#374151",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Email Address
            </span>
          </div>
          <a
            href={`mailto:${email}`}
            style={{
              margin: 0,
              fontSize: "16px",
              color: "#3b82f6",
              textDecoration: "none",
              marginLeft: "28px",
              display: "inline-block",
            }}
          >
            {email}
          </a>
        </div>

        {/* Message Section */}
        <div
          style={{
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <span style={{ fontSize: "20px" }}>💬</span>
            <span
              style={{
                fontWeight: "600",
                color: "#374151",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Message
            </span>
          </div>
          <div
            style={{
              marginLeft: "28px",
              backgroundColor: "#f9fafb",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #3b82f6",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#374151",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "16px",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "#6b7280",
          }}
        >
          This message was sent from your website's contact form
        </p>
      </div>
    </div>
  );
}
