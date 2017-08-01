import React from 'react';
import BackgroundImage from 'react-background-image-loader';

export default (props) => {
  const {source, ...otherProps} = props;
  const localImage = '/path/to/local/asset';

  return(
    <BackgroundImage src={source} placeholder={localImage} {...otherProps}>
      <div className="something-else">
        Some more markup
      </div>
    </BackgroundImage>
  );
}
