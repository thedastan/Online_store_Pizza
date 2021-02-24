import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingBlock = () => {
  return (
    <ContentLoader
        className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="295" rx="4" ry="4" width="280" height="28"/>
      <rect x="0" y="335" rx="6" ry="6" width="280" height="84"/>
      <rect x="0" y="430" rx="3" ry="3" width="89" height="26"/>
      <circle cx="140" cy="140" r="140"/>
      <rect x="134" y="427" rx="30" ry="30" width="151" height="44"/>
    </ ContentLoader>
  )
};

export default LoadingBlock
