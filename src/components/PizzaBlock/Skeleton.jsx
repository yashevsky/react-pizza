import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="125" cy="125" r="125" />
    <rect x="0" y="252" rx="7" ry="7" width="245" height="36" />
    <rect x="0" y="304" rx="7" ry="7" width="245" height="59" />
    <rect x="0" y="376" rx="7" ry="7" width="84" height="30" />
    <rect x="142" y="377" rx="7" ry="7" width="103" height="30" />
  </ContentLoader>
);

export default Skeleton;
