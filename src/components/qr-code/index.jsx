import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('')
  }

  return (
    <div>
      <h2 style={{textAlign:"center"}}>QR Code Generator</h2>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:10}}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <br/>
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
      <QRCode id="qr-code-value" value={qrCode} size={250} bgColor="#fff" style={{margin:"20px auto", display:"block"}} />
      </div>
    </div>
  );
}