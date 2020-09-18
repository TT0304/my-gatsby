import 'typeface-ibm-plex-sans-condensed'
import 'typeface-ibm-plex-sans'
import "./src/styles/_global.scss"
export const onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById('__loader').style.display = "none"
  }, 1000)
}