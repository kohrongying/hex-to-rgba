export const hex2rgba = (hex) => {
  const [rr, gg, bb, aa] = hex.match(/\w\w/g)
  const r = parseInt(rr, 16)
  const g = parseInt(gg, 16)
  const b = parseInt(bb, 16)
  const alpha = aa ? (parseInt(aa, 16) / 255).toFixed(2) : 1.0
  return `rgba(${r},${g},${b},${alpha})`
};

export const checkValidHex = (hex) => {
  const regex = /^#[a-fA-F0-9]{6}$/
  const regex2 = /^#[a-fA-F0-9]{8}$/
  return regex.test(hex) || regex2.test(hex)
};

export const rgba2hex = (rgba) => {
  if (rgba.slice(0,4) === "rgba") {
    const [r, g, b, a] = rgba.slice(5,-1).split(',')
    const rr = parseInt(r).toString(16).padStart(2, '0')
    const gg = parseInt(g).toString(16).padStart(2, '0')
    const bb = parseInt(b).toString(16).padStart(2, '0')
    const aa = Math.round((parseFloat(a) * 255)).toString(16).padStart(2, '0')
    return `#${rr}${gg}${bb}${aa}`
  } else {
      const [r, g, b] = rgba.slice(4,-1).split(',')
                            .map(i => parseInt(i).toString(16).padStart(2, '0'))
      return `#${r}${g}${b}`                      
  }
};

export const checkValidRGBA = (rgba) => {
  let r = 0; 
  let g = 0; 
  let b = 0;
  let a = 0;
  if (rgba.slice(0,4) === "rgba") {
    [r, g, b, a] = rgba.slice(5,-1).split(',')
  } else {
    [r, g, b] = rgba.slice(4,-1).split(',')
    a = 1
  }
  return (
    inRange(r, 255) && 
    inRange(g, 255) && 
    inRange(b, 255) &&
    inRange(a, 1)
  )
};

const inRange = (n, upperLimit) => {
  return parseInt(n) >= 0 && parseInt(n) <= upperLimit
}

export const checkDarkMode = (rgba) => {
  const [r, g, b, a] = rgba.slice(5,-1).split(',')
  const val = parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114 / 1000
  return val < 123 ? true : false
}