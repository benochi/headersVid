import React from 'react';

function HeaderExplanations({ headers }) {
  if (!headers) {
    return <div>No headers available</div>;
  }

  const headerExplanations = {
    'host': 'Specifies the domain name of the server (for virtual hosting), and the TCP port number on which the server is listening.',
    'connection': 'Controls whether the network connection stays open after the current transaction finishes.',
    'sec-ch-ua': 'Used in the client hints feature, which allows browsers to give servers information about the browser’s configuration.',
    'accept': 'Tells the server what content types, expressed as MIME types, the client can process.',
    'sec-ch-ua-mobile': '?0 indicates that the request is not from a mobile device.',
    'user-agent': 'Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, and software version of the requesting software.',
    'sec-ch-ua-platform': 'Indicates the platform on which the browser is running.',
    'dnt': 'Requests that a web application disable its tracking of an individual user.',
    'origin': 'Indicates where a fetch originates from.',
    'sec-fetch-site': 'A request header that indicates the relationship between a request initiator\'s origin and its target\'s origin.',
    'sec-fetch-mode': 'Used to indicate the request\'s mode to a server.',
    'sec-fetch-dest': 'Indicates the request\'s destination to a server.',
    'referer': 'The address of the previous web page from which a link to the currently requested page was followed.',
    'accept-encoding': 'The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.',
    'accept-language': 'Lists the languages that the client prefers, and the server uses this information to possibly serve up an alternate version of the document.'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '8px',
    flexWrap: 'wrap',
  };

  const headerTextStyle = {
    marginRight: '8px', // Add space between header and explanation
  };

  const explanationTextStyle = {
    marginLeft: '8px', // Add space between explanation and the right edge
  };

  return (
    <div className="header-explanation" style={containerStyle}>
      {Object.keys(headers).map((header) => (
        <div key={header} style={itemStyle}>
          <strong style={headerTextStyle}>{header}:</strong>
          <div style={explanationTextStyle}>{headerExplanations[header]}</div>
        </div>
      ))}
    </div>
  );
}

export default HeaderExplanations;
