export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainYellow: `#6F3E23`,
  mainYellow2: `#F2AF29`,
  mainGrey: `#474747`,
  mainBrown: `#6F3E23`,
  mainRed: `#A63421`,
  mainGreen: `#69bd45`,
}
export const textSlanted = `font-family:cursive;`

export const transDefault = "transition:all 0.5s ease-in-out"
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}
