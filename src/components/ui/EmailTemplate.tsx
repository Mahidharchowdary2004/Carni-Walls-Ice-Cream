import React from 'react';

interface EmailTemplateProps {
  name: string;
  time: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, time, message }) => {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif, Arial', fontSize: '12px' }}>
      <div>A message by {name} has been received. Kindly respond at your earliest convenience.</div>
      <div
        style={{
          marginTop: '20px',
          padding: '15px 0',
          borderWidth: '1px 0',
          borderStyle: 'dashed',
          borderColor: 'lightgrey',
        }}
      >
        <table role="presentation">
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top' }}>
                <div
                  style={{
                    padding: '6px 10px',
                    margin: '0 10px',
                    backgroundColor: 'aliceblue',
                    borderRadius: '5px',
                    fontSize: '26px',
                  }}
                  role="img"
                >
                  &#x1F464;
                </div>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <div style={{ color: '#2c3e50', fontSize: '16px' }}>
                  <strong>{name}</strong>
                </div>
                <div style={{ color: '#cccccc', fontSize: '13px' }}>{time}</div>
                <p style={{ fontSize: '16px' }}>{message}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailTemplate; 