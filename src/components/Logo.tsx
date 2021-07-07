import React from "react"

const primary = '#F287AA';
const secondary = '#FFF';

type LogoProps = {
  inversed?: boolean,
  className?: string
}

const Logo = ({inversed = false, className = ''}: LogoProps) => {
  const fillColor = inversed ? secondary : primary;
  const backgroundStyle = {
    borderRadius: `100%`,
    background: inversed ? primary : secondary,
    
  }
  return (
    <svg className={className} style={backgroundStyle} version="1.1" xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px" width="41px" height="42px" viewBox="-0.501 -0.75 41 42" enableBackground="new -0.501 -0.75 41 42">
      <rect x="8.25" y="14.48" fill={fillColor} width="11.539" height="3.297"/>
      <rect x="8.25" y="18.602" fill={fillColor} width="11.539" height="3.297"/>
      <rect x="8.25" y="22.723" fill={fillColor} width="11.539" height="3.297"/>
      <rect x="20.612" y="14.481" fill={fillColor} width="3.297" height="11.539"/>
      <rect x="24.733" y="14.481" fill={fillColor} width="3.297" height="11.539"/>
      <rect x="28.854" y="14.481" fill={fillColor} width="3.297" height="11.539"/>
      <path fill={fillColor} d="M36.272,24.371c0-0.91-0.736-1.648-1.646-1.648c-0.912,0-1.65,0.738-1.65,1.648s0.738,1.648,1.65,1.648
  C35.536,26.02,36.272,25.281,36.272,24.371"/>
    </svg>
  )
}

export default Logo
