

def fibinacci_seq(n: int): 
  """ This function prints the Fibonacci Sequence until the nth number. """
  sequence = []
  try:
    n = int(n + 1)
    for i in range (n):
      if i <= 1:
        sequence.append(i)
      else:
        if sequence[-1] + sequence[-2] <= n:
          sequence.append(sequence[i - 2] + sequence[i - 1])
    return sequence
  except (AttributeError, TypeError, ValueError):
    raise AssertionError("Invalid type. Please enter a valid integer.")
    
print(fibinacci_seq(2**22))