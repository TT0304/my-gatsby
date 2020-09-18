import React from "react"
import Spinner from "../../../static/graphics/loading.inline.svg"
// import Spinner from "./Spinner"

export default function Loader() {
  return (
    <div
      id="__loader"
      style={{
        zIndex: 101,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#403d39',
        opacity: 0.99
      }}>
      <Spinner />
    </div>
  )
}