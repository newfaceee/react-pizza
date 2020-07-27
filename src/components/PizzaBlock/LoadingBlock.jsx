import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="278" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="320" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="407" rx="0" ry="0" width="127" height="44" />
      <rect x="146" y="407" rx="30" ry="30" width="129" height="44" />
    </ContentLoader>
  );
};

export default LoadingBlock;
