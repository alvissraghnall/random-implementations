package io.brr;

public class ComplexNumber {
  double real;
  double im;
  public ComplexNumber(double re, double im){
    if(im == 0) throw new IllegalArgumentException;
    this.real = re;
    this.im = im;
  }
  
  public ComplexNumber add(ComplexNumber cmplx){
    return new ComplexNumber(real + cmplx.real, im + cmplx.im);
  }
  
  public static ComplexNumber add(ComplexNumber cn1, ComplexNumber cn2) {
    return new ComplexNumber(cn1.real + cn2.real, cn1.im + cn2.im);
  }
  
  public ComplexNumber subtract(ComplexNumber cn){
    return new ComplexNumber(real - cn.real, im - cn.im);
  }
  
  public static ComplexNumber subtract(ComplexNumber cn1, ComplexNumber cn2){
    return new ComplexNumber(cn1.real - cn2.real, cn1.im - cn2.im);
  }
  
  public ComplexNumber multiplyBy(double num){
    return new ComplexNumber(num * real, num* im);
  }
  
  public static ComplexNumber multiply(ComplexNumber cn, double num){
    return new ComplexNumber(cn.real * num, cn.im * num);
  }
  
  public ComplexNumber multiplyBy(ComplexNumber cnum){
    return new ComplexNumber(real * cnum.real - im * cnum.im, im * cnum.real + real * cnum.im);
  }
  
  public static void main (String[] args) {
    ComplexNumber fr = new ComplexNumber(7, 5);
    System.out.println(fr.add(new ComplexNumber(2,3)).toString());
    System.out.println(fr.add(new ComplexNumber(2, 3)).multiplyBy(new ComplexNumber(2, 3)).toString());
  }
  
  @Override
  public String toString(){
    if(im > 0) return real + " + " + im + "i";
    return real + " - " + im + "i";
  }
}