package io.brr;

import java.util.Scanner;
import java.math.BigInteger;
import java.util.InputMismatchException;
import java.util.ArrayList;

class NextPrime {
  
  static boolean isPrime(int num){
    int[] primeVerse = { 2, 3, 5, 7};
    if(num <= 1) return false;
    for(int i : primeVerse) {
      if(num == i) return true;
      else if(num % i == 0) return false;
    }
    return true;
  }
  
  static String strJoin(Integer[] aArr, String sSep){
    StringBuilder sbStr = new StringBuilder();     
    for (int i = 0, il = aArr.length; i < il; i++) {        
      if (i > 0)             sbStr.append(sSep); 
      if(i == il - 1){ sbStr.append("and ");}
      sbStr.append(aArr[i]);     
    }    
    return sbStr.toString(); 
    }
  
  static ArrayList<Integer> primeList(Integer start, Integer number){
    ArrayList<Integer> primeList = new ArrayList<>();
      for(int j = start + 1; j < Integer.MAX_VALUE; ++j){
        if(NextPrime.isPrime(j)){ primeList.add(j); } //System.out.println(primeList.toString()); }
        if(primeList.size() == number){ break; }
      
      //System.out.println(primeList.toString());
    }
    return primeList;
  }
  
  public static void main(String args[]){
    Integer num = null;    
    Integer itr = null;

    Scanner scan = new Scanner(System.in);
    System.out.println("What number would you like to begin printing consecutive primes from?");
    boolean check = true;
          
    while(check){
      try {
        num = scan.nextInt();
      } catch(InputMismatchException e){
        System.out.println("Please enter a valid number..");
        if(scan.next().isEmpty()){
          break;
        }
      } 
      if(num != null){
        boolean ncheck = true;
        System.out.println("And how many consecutive primes after " + num + " should I print?");
        while(ncheck) {
          try {
            itr = scan.nextInt();
          } catch(InputMismatchException exp) {
            System.out.println("Please enter a valid number..");
            if(scan.next().isEmpty()){
              break;
            }
          }
          
          if(itr != null){
            scan.close();
            System.out.println(num + " " + itr);
            ncheck = false;
            check = false;
            System.out.println("The first " + itr + " Prime numbers from " + num + " are: " + strJoin((Integer[])primeList(num, itr).toArray(new Integer[0]), ", "));
            //System.out.println(strJoin(primeList(num, itr).toArray(), ","));
          }
        }
      }
      
      /* finally {
        System.out.println("And how many consecutive primes after " + num + " should I print?");
        try {
          itr = scan.nextBigInteger();
        } catch(InputMismatchException e){
          System.out.println("Please enter a valid number..");
          if(scan.next().isEmpty()){
            break;
          }
        } finally {
          scan.close(); 
          System.out.println(num + " " + itr);
          
        }
      } */
    }
  }
}