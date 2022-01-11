package main

import "fmt"

func factorial (num int) int {
  if err return err
  if(num == 0) { return 1 }
  return num * factorial(num - 1)
}

func main() {
  var num int, err error
  fmt.Println("Enter a number to get it's factorial as output: ")
  fmt.Scanln(&num)
  fmt.Println(factorial(num))
}