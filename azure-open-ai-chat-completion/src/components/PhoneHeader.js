export function PhoneHeader() {
  return <header className="phoneHeader">
    <div className="less-than">&lt;</div>
    <div className="avatar">
      <img
        src="https://source.unsplash.com/random/50x50?AI"
        alt="Avatar" />
    </div>
    <div>
      <h2 className="name">AI Chat Completion</h2>
      <h3 className="status">Chat GPT 3.5</h3>
    </div>
    <div className="three-dots">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </header>;
}
