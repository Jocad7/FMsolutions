import React from 'react';
import Iframe from 'react-iframe';

const WebsitePreview = ({ url }) => {
  return (
    <div>
      <Iframe url={url}
      width="640px"
      height="420px"
      id=""
      className=""
      display="block"
      position="relative"
      />
    </div>
  );
};

export default WebsitePreview;