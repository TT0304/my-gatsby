import "typeface-archivo"
import "typeface-archivo-narrow"
import "./src/styles/_global.scss"
export const onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById("__loader").style.display = "none"
  }, 900)
}
