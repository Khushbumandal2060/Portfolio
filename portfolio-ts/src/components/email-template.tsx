type Props = {
  Name: string;
  email: string;
  message: string;
};

export function ContactNotificationTemplate({
  Name,
  email,
  message,
}: Props) {
  return (
    <div>
      <h2>New Message</h2>
      <p><b>Name:</b> {Name}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Message:</b> {message}</p>
    </div>
  );
}