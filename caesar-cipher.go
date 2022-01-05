package main

import (
  "fmt"
  "strings"
)

func cipher(msg string, shift int32) {
  var msgUpper string = strings.ToUpper(msg)
  var cipherText string = ""
  if shift > 26 {
    shift = shift % 26
  }
  for _, v := range msgUpper {
    //fmt.Println(v, shift)
    //fmt.Printf("%c \n", v + shift)
    if v > 90 || v < 65 {
      cipherText += string(v)
    } else {
      if v + shift <= 90 {
        cipherText += string(v + shift)
      } else {
        cipherText += string((v + shift) % 90 + 64)
      }
    }
  }
  //fmt.Println(msgUpper[0], msgUpper[1], "Z"[0], "z"[0])
  fmt.Println(msg)
  fmt.Println(msgUpper)
  fmt.Println(cipherText)
}

func main() {
  cipher(strings.ToLower("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."), 13)
}